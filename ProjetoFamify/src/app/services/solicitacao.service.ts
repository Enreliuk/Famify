import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { podeSolicitarEntrada } from './regras-negocio';
import { FamiliaService } from './familia.service';

export type StatusSolicitacao = 'pendente' | 'aprovada' | 'rejeitada';

export interface SolicitacaoFamilia {
  id: number;
  usuarioId: number;
  familiaId: number;
  status: StatusSolicitacao;
  criadaEm: string;
}

@Injectable({ providedIn: 'root' })
export class SolicitacaoService {
  private readonly storageKey = 'famify_solicitacoes';
  private readonly solicitacoesSubject = new BehaviorSubject<SolicitacaoFamilia[]>(this.listar());
  solicitacoes$ = this.solicitacoesSubject.asObservable();

  constructor(private familiaService: FamiliaService) {}

  listar(): SolicitacaoFamilia[] {
    const dados = localStorage.getItem(this.storageKey);
    return dados ? JSON.parse(dados) : [];
  }

  listarPorUsuario(usuarioId: number): SolicitacaoFamilia[] {
    return this.listar().filter(solicitacao => solicitacao.usuarioId === usuarioId);
  }

  solicitar(usuarioId: number, familiaId: number): SolicitacaoFamilia | undefined {
    const solicitacoes = this.listar();
    const familia = this.familiaService.buscarPorId(familiaId);
    if (!familia) {
      throw new Error('Família não encontrada.');
    }
    const erro = podeSolicitarEntrada(familia, solicitacoes, usuarioId);
    if (erro) {
      throw new Error(erro);
    }
    const existente = solicitacoes.find(solicitacao =>
      solicitacao.usuarioId === usuarioId &&
      solicitacao.familiaId === familiaId &&
      solicitacao.status === 'pendente'
    );
    if (existente) {
      return existente;
    }

    const solicitacao: SolicitacaoFamilia = {
      id: solicitacoes.length ? Math.max(...solicitacoes.map(item => item.id)) + 1 : 1,
      usuarioId,
      familiaId,
      status: 'pendente',
      criadaEm: new Date().toISOString()
    };
    this.salvar([...solicitacoes, solicitacao]);
    return solicitacao;
  }

  cancelar(id: number): void {
    this.salvar(this.listar().filter(solicitacao => solicitacao.id !== id));
  }

  atualizarStatus(id: number, status: StatusSolicitacao): void {
    const solicitacao = this.listar().find(item => item.id === id);
    if (!solicitacao) {
      throw new Error('Solicitação não encontrada.');
    }

    if (status === 'aprovada') {
      const familia = this.familiaService.buscarPorId(solicitacao.familiaId);
      if (!familia || familia.vagasDisponiveis <= 0) {
        throw new Error('Não existe vaga disponível para aprovar esta solicitação.');
      }
      if (familia.membrosAtuais >= 6) {
        throw new Error('O limite máximo de seis membros foi atingido.');
      }
      this.familiaService.atualizar({
        ...familia,
        membrosAtuais: familia.membrosAtuais + 1
      });
    }

    this.salvar(this.listar().map(solicitacao =>
      solicitacao.id === id ? { ...solicitacao, status } : solicitacao
    ));
  }

  excluir(id: number): void {
    this.cancelar(id);
  }

  private salvar(solicitacoes: SolicitacaoFamilia[]): void {
    localStorage.setItem(this.storageKey, JSON.stringify(solicitacoes));
    this.solicitacoesSubject.next(solicitacoes);
  }
}
