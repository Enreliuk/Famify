import { describe, expect, it } from 'vitest';
import { calcularPorcentagemOcupacao, podeSolicitarEntrada, validarLimiteFamilia } from './regras-negocio';
import type { FamiliaSteam } from './familia.service';
import type { SolicitacaoFamilia } from './solicitacao.service';

function criarFamilia(dados: Partial<FamiliaSteam> = {}): FamiliaSteam {
  return {
    id: 1,
    nome: 'Família Teste',
    descricao: 'Descrição',
    vagasDisponiveis: 2,
    membrosAtuais: 4,
    limiteMembros: 6,
    totalJogos: 10,
    generos: ['RPG'],
    avataresMembros: [],
    jogosDestaque: [],
    ...dados
  };
}

describe('Regras de negócio do Famify', () => {
  it('impede limite da família acima de seis membros', () => {
    expect(validarLimiteFamilia(4, 7)).toContain('1 e 6');
  });

  it('impede membros atuais acima do limite', () => {
    expect(validarLimiteFamilia(7, 6)).toContain('não podem exceder');
  });

  it('aceita uma família válida', () => {
    expect(validarLimiteFamilia(5, 6)).toBeNull();
  });

  it('impede solicitação para família sem vagas', () => {
    const familia = criarFamilia({ membrosAtuais: 6, vagasDisponiveis: 0 });
    expect(podeSolicitarEntrada(familia, [], 10)).toContain('não possui vagas');
  });

  it('impede solicitação duplicada pendente', () => {
    const familia = criarFamilia();
    const solicitacao: SolicitacaoFamilia = {
      id: 1,
      usuarioId: 10,
      familiaId: familia.id,
      status: 'pendente',
      criadaEm: new Date().toISOString()
    };
    expect(podeSolicitarEntrada(familia, [solicitacao], 10)).toContain('Já existe');
  });

  it('permite solicitação quando existe vaga e não há duplicidade', () => {
    expect(podeSolicitarEntrada(criarFamilia(), [], 10)).toBeNull();
  });

  it('calcula a ocupação percentual da família', () => {
    expect(calcularPorcentagemOcupacao(criarFamilia())).toBeCloseTo(66.67, 1);
  });

  it('retorna ocupação zero quando o limite é inválido', () => {
    expect(calcularPorcentagemOcupacao(criarFamilia({ limiteMembros: 0 }))).toBe(0);
  });
});
