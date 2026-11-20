import type { FamiliaSteam } from './familia.service';
import type { SolicitacaoFamilia } from './solicitacao.service';

export function calcularPorcentagemOcupacao(familia: FamiliaSteam): number {
  if (familia.limiteMembros <= 0) {
    return 0;
  }
  return (familia.membrosAtuais / familia.limiteMembros) * 100;
}

export function validarLimiteFamilia(
  membrosAtuais: number,
  limiteMembros: number
): string | null {
  if (!Number.isInteger(membrosAtuais) || membrosAtuais < 0) {
    return 'O número de membros atuais deve ser válido.';
  }
  if (!Number.isInteger(limiteMembros) || limiteMembros < 1 || limiteMembros > 6) {
    return 'O limite da família deve estar entre 1 e 6 membros.';
  }
  if (membrosAtuais > limiteMembros) {
    return 'Os membros atuais não podem exceder o limite da família.';
  }
  return null;
}

export function podeSolicitarEntrada(
  familia: FamiliaSteam,
  solicitacoes: SolicitacaoFamilia[],
  usuarioId: number
): string | null {
  if (familia.membrosAtuais >= 6 || familia.vagasDisponiveis <= 0) {
    return 'Esta família não possui vagas disponíveis.';
  }
  if (familia.membrosAtuais >= familia.limiteMembros) {
    return 'Esta família atingiu o limite de membros.';
  }
  const solicitacaoExistente = solicitacoes.find(solicitacao =>
    solicitacao.usuarioId === usuarioId &&
    solicitacao.familiaId === familia.id &&
    solicitacao.status === 'pendente'
  );
  if (solicitacaoExistente) {
    return 'Já existe uma solicitação pendente para esta família.';
  }
  return null;
}
