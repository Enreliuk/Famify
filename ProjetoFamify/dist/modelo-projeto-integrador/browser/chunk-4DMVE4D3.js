import {
  BehaviorSubject,
  Injectable,
  __spreadProps,
  __spreadValues,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-2SBXNMGV.js";

// src/app/services/jogo.service.ts
var JogoService = class _JogoService {
  storageKey = "famify_jogos";
  jogosIniciais = [
    { id: 1, titulo: "Elden Ring", crescimento: "+139%", buscasSemana: "15.400 buscas", imagemUrl: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1245620/header.jpg" },
    { id: 2, titulo: "Cyberpunk 2077", crescimento: "+84%", buscasSemana: "11.200 buscas", imagemUrl: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1091500/header.jpg" },
    { id: 3, titulo: "Baldur's Gate 3", crescimento: "+112%", buscasSemana: "9.850 buscas", imagemUrl: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1086940/header.jpg" },
    { id: 4, titulo: "The Witcher 3", crescimento: "+45%", buscasSemana: "7.430 buscas", imagemUrl: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/292030/header.jpg" },
    { id: 5, titulo: "Valheim", crescimento: "+30%", buscasSemana: "6.120 buscas", imagemUrl: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/892970/header.jpg" },
    { id: 6, titulo: "Red Dead Redemption 2", crescimento: "+62%", buscasSemana: "8.900 buscas", imagemUrl: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1174180/header.jpg" }
  ];
  jogosSubject = new BehaviorSubject(this.listar());
  jogos$ = this.jogosSubject.asObservable();
  listar() {
    const dados = localStorage.getItem(this.storageKey);
    if (!dados) {
      localStorage.setItem(this.storageKey, JSON.stringify(this.jogosIniciais));
      return this.jogosIniciais;
    }
    return JSON.parse(dados);
  }
  buscarPorId(id) {
    return this.listar().find((jogo) => jogo.id === id);
  }
  criar(jogo) {
    const jogos = this.listar();
    const novoJogo = __spreadProps(__spreadValues({}, jogo), { id: jogos.length ? Math.max(...jogos.map((item) => item.id)) + 1 : 1 });
    this.salvar([...jogos, novoJogo]);
    return novoJogo;
  }
  atualizar(jogoAtualizado) {
    this.salvar(this.listar().map((jogo) => jogo.id === jogoAtualizado.id ? jogoAtualizado : jogo));
  }
  excluir(id) {
    this.salvar(this.listar().filter((jogo) => jogo.id !== id));
  }
  salvar(jogos) {
    localStorage.setItem(this.storageKey, JSON.stringify(jogos));
    this.jogosSubject.next(jogos);
  }
  static \u0275fac = function JogoService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _JogoService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _JogoService, factory: _JogoService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(JogoService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  JogoService
};
//# sourceMappingURL=chunk-4DMVE4D3.js.map
