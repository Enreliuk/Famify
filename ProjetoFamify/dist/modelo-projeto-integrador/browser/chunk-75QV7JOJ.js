import {
  FamiliaService,
  podeSolicitarEntrada
} from "./chunk-UMLRIWJD.js";
import {
  BehaviorSubject,
  Injectable,
  __spreadProps,
  __spreadValues,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-2SBXNMGV.js";

// src/app/services/solicitacao.service.ts
var SolicitacaoService = class _SolicitacaoService {
  familiaService;
  storageKey = "famify_solicitacoes";
  solicitacoesSubject = new BehaviorSubject(this.listar());
  solicitacoes$ = this.solicitacoesSubject.asObservable();
  constructor(familiaService) {
    this.familiaService = familiaService;
  }
  listar() {
    const dados = localStorage.getItem(this.storageKey);
    return dados ? JSON.parse(dados) : [];
  }
  listarPorUsuario(usuarioId) {
    return this.listar().filter((solicitacao) => solicitacao.usuarioId === usuarioId);
  }
  solicitar(usuarioId, familiaId) {
    const solicitacoes = this.listar();
    const familia = this.familiaService.buscarPorId(familiaId);
    if (!familia) {
      throw new Error("Fam\xEDlia n\xE3o encontrada.");
    }
    const erro = podeSolicitarEntrada(familia, solicitacoes, usuarioId);
    if (erro) {
      throw new Error(erro);
    }
    const existente = solicitacoes.find((solicitacao2) => solicitacao2.usuarioId === usuarioId && solicitacao2.familiaId === familiaId && solicitacao2.status === "pendente");
    if (existente) {
      return existente;
    }
    const solicitacao = {
      id: solicitacoes.length ? Math.max(...solicitacoes.map((item) => item.id)) + 1 : 1,
      usuarioId,
      familiaId,
      status: "pendente",
      criadaEm: (/* @__PURE__ */ new Date()).toISOString()
    };
    this.salvar([...solicitacoes, solicitacao]);
    return solicitacao;
  }
  cancelar(id) {
    this.salvar(this.listar().filter((solicitacao) => solicitacao.id !== id));
  }
  atualizarStatus(id, status) {
    const solicitacao = this.listar().find((item) => item.id === id);
    if (!solicitacao) {
      throw new Error("Solicita\xE7\xE3o n\xE3o encontrada.");
    }
    if (status === "aprovada") {
      const familia = this.familiaService.buscarPorId(solicitacao.familiaId);
      if (!familia || familia.vagasDisponiveis <= 0) {
        throw new Error("N\xE3o existe vaga dispon\xEDvel para aprovar esta solicita\xE7\xE3o.");
      }
      if (familia.membrosAtuais >= 6) {
        throw new Error("O limite m\xE1ximo de seis membros foi atingido.");
      }
      this.familiaService.atualizar(__spreadProps(__spreadValues({}, familia), {
        membrosAtuais: familia.membrosAtuais + 1
      }));
    }
    this.salvar(this.listar().map((solicitacao2) => solicitacao2.id === id ? __spreadProps(__spreadValues({}, solicitacao2), { status }) : solicitacao2));
  }
  excluir(id) {
    this.cancelar(id);
  }
  salvar(solicitacoes) {
    localStorage.setItem(this.storageKey, JSON.stringify(solicitacoes));
    this.solicitacoesSubject.next(solicitacoes);
  }
  static \u0275fac = function SolicitacaoService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SolicitacaoService)(\u0275\u0275inject(FamiliaService));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SolicitacaoService, factory: _SolicitacaoService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SolicitacaoService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: FamiliaService }], null);
})();

export {
  SolicitacaoService
};
//# sourceMappingURL=chunk-75QV7JOJ.js.map
