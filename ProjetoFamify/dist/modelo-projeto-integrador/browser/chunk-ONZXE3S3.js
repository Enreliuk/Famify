import {
  BehaviorSubject,
  Injectable,
  UsuarioService,
  __objRest,
  __spreadProps,
  __spreadValues,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-2SBXNMGV.js";

// src/app/services/auth.ts
var AuthService = class _AuthService {
  usuarioService;
  STORAGE_SESSAO = "famify_sessao_ativa";
  ADMIN_EMAIL = "adm@famify.com.br";
  ADMIN_SENHA = "123123";
  usuarioAtualSubject = new BehaviorSubject(this.carregarSessaoSalva());
  usuarioAtual$ = this.usuarioAtualSubject.asObservable();
  constructor(usuarioService) {
    this.usuarioService = usuarioService;
  }
  cadastrar(dados) {
    if (dados.email.trim().toLowerCase() === this.ADMIN_EMAIL) {
      return { sucesso: false, mensagem: "Este e-mail \xE9 reservado para o administrador." };
    }
    const jaExiste = this.usuarioService.buscarPorEmail(dados.email);
    if (jaExiste) {
      return { sucesso: false, mensagem: "Este e-mail j\xE1 est\xE1 cadastrado." };
    }
    this.usuarioService.criar({
      nome: dados.nome.trim(),
      email: dados.email.trim().toLowerCase(),
      senha: dados.senha,
      steamId: dados.steamId.trim() || "76561198000000000",
      jogosImportados: 42,
      jogosDesejados: dados.jogosDesejados
    });
    this.salvarSessao(this.usuarioService.buscarPorEmail(dados.email));
    return { sucesso: true };
  }
  login(email, senha) {
    if (email.trim().toLowerCase() === this.ADMIN_EMAIL) {
      if (senha !== this.ADMIN_SENHA) {
        return { sucesso: false, mensagem: "E-mail ou senha inv\xE1lidos." };
      }
      let administrador = this.usuarioService.buscarPorEmail(this.ADMIN_EMAIL);
      if (!administrador) {
        administrador = this.usuarioService.criar({
          nome: "Administrador",
          email: this.ADMIN_EMAIL,
          senha: this.ADMIN_SENHA,
          steamId: "76561198000000000",
          jogosImportados: 0,
          jogosDesejados: ""
        });
      } else if (administrador.senha !== this.ADMIN_SENHA) {
        this.usuarioService.atualizar(__spreadProps(__spreadValues({}, administrador), { senha: this.ADMIN_SENHA }));
        administrador = this.usuarioService.buscarPorEmail(this.ADMIN_EMAIL);
      }
      this.salvarSessao(administrador);
      return { sucesso: true };
    }
    const encontrado = this.usuarioService.buscarPorEmail(email);
    if (!encontrado || encontrado.senha !== senha) {
      return {
        sucesso: false,
        mensagem: "E-mail ou senha inv\xE1lidos. Crie uma conta caso ainda n\xE3o tenha cadastro."
      };
    }
    this.salvarSessao(encontrado);
    return { sucesso: true };
  }
  loginComSteam() {
    const usuarioSteam = {
      nome: "Jogador1",
      email: "jogador@famify.com.br",
      steamId: "76561198091234567",
      jogosImportados: 68
    };
    const existente = this.usuarioService.buscarPorEmail(usuarioSteam.email);
    const usuario = existente ?? this.usuarioService.criar(usuarioSteam);
    this.salvarSessao(usuario);
  }
  logout() {
    localStorage.removeItem(this.STORAGE_SESSAO);
    this.usuarioAtualSubject.next(null);
  }
  isAdministrador() {
    const usuario = this.carregarSessaoSalva();
    return usuario?.email.toLowerCase() === this.ADMIN_EMAIL;
  }
  salvarSessao(usuario) {
    const _a = usuario, { senha } = _a, dadosSemSenha = __objRest(_a, ["senha"]);
    localStorage.setItem(this.STORAGE_SESSAO, JSON.stringify(dadosSemSenha));
    this.usuarioAtualSubject.next(dadosSemSenha);
  }
  carregarSessaoSalva() {
    const sessao = localStorage.getItem(this.STORAGE_SESSAO);
    return sessao ? JSON.parse(sessao) : null;
  }
  static \u0275fac = function AuthService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AuthService)(\u0275\u0275inject(UsuarioService));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthService, factory: _AuthService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: UsuarioService }], null);
})();

export {
  AuthService
};
//# sourceMappingURL=chunk-ONZXE3S3.js.map
