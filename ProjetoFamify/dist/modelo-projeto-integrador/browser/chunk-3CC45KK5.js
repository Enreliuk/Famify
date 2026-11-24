import {
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-2SBXNMGV.js";

// src/app/services/genero.service.ts
var GeneroService = class _GeneroService {
  storageKey = "famify_generos";
  generosIniciais = [
    "Todos",
    "RPG",
    "FPS",
    "Indie",
    "Aventura",
    "Co-op",
    "Simula\xE7\xE3o",
    "Estrat\xE9gia",
    "Terror",
    "Corrida",
    "Plataforma"
  ];
  listar() {
    const dados = localStorage.getItem(this.storageKey);
    if (!dados) {
      localStorage.setItem(this.storageKey, JSON.stringify(this.generosIniciais));
      return this.generosIniciais;
    }
    return JSON.parse(dados);
  }
  criar(genero) {
    const generos = this.listar();
    if (genero.trim() && !generos.includes(genero.trim())) {
      this.salvar([...generos, genero.trim()]);
    }
  }
  atualizar(generoAntigo, generoNovo) {
    this.salvar(this.listar().map((genero) => genero === generoAntigo ? generoNovo.trim() : genero));
  }
  excluir(genero) {
    this.salvar(this.listar().filter((item) => item !== genero));
  }
  salvar(generos) {
    localStorage.setItem(this.storageKey, JSON.stringify(generos));
  }
  static \u0275fac = function GeneroService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _GeneroService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _GeneroService, factory: _GeneroService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GeneroService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  GeneroService
};
//# sourceMappingURL=chunk-3CC45KK5.js.map
