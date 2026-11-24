import {
  BehaviorSubject,
  Injectable,
  __spreadProps,
  __spreadValues,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-2SBXNMGV.js";

// src/app/services/regras-negocio.ts
function validarLimiteFamilia(membrosAtuais, limiteMembros) {
  if (!Number.isInteger(membrosAtuais) || membrosAtuais < 0) {
    return "O n\xFAmero de membros atuais deve ser v\xE1lido.";
  }
  if (!Number.isInteger(limiteMembros) || limiteMembros < 1 || limiteMembros > 6) {
    return "O limite da fam\xEDlia deve estar entre 1 e 6 membros.";
  }
  if (membrosAtuais > limiteMembros) {
    return "Os membros atuais n\xE3o podem exceder o limite da fam\xEDlia.";
  }
  return null;
}
function podeSolicitarEntrada(familia, solicitacoes, usuarioId) {
  if (familia.membrosAtuais >= 6 || familia.vagasDisponiveis <= 0) {
    return "Esta fam\xEDlia n\xE3o possui vagas dispon\xEDveis.";
  }
  if (familia.membrosAtuais >= familia.limiteMembros) {
    return "Esta fam\xEDlia atingiu o limite de membros.";
  }
  const solicitacaoExistente = solicitacoes.find((solicitacao) => solicitacao.usuarioId === usuarioId && solicitacao.familiaId === familia.id && solicitacao.status === "pendente");
  if (solicitacaoExistente) {
    return "J\xE1 existe uma solicita\xE7\xE3o pendente para esta fam\xEDlia.";
  }
  return null;
}

// src/app/services/familia.service.ts
var FamiliaService = class _FamiliaService {
  storageKey = "famify_familias";
  familiasIniciais = [
    {
      id: 1,
      nome: "Fam\xEDlia Nebulosa",
      descricao: "RPGs e jogos de mundo aberto",
      vagasDisponiveis: 2,
      membrosAtuais: 3,
      limiteMembros: 5,
      totalJogos: 214,
      generos: ["RPG", "Aventura"],
      avataresMembros: ["FB", "FT", "GS"],
      jogosDestaque: [
        { titulo: "Elden Ring", capaUrl: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1245620/header.jpg" },
        { titulo: "Baldur's Gate 3", capaUrl: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1086940/header.jpg" },
        { titulo: "The Witcher 3", capaUrl: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/292030/header.jpg" },
        { titulo: "Cyberpunk 2077", capaUrl: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1091500/header.jpg" }
      ]
    },
    {
      id: 2,
      nome: "Pixel Squad",
      descricao: "RPGs, a\xE7\xE3o e t\xEDtulos competitivos",
      vagasDisponiveis: 2,
      membrosAtuais: 4,
      limiteMembros: 6,
      totalJogos: 248,
      generos: ["FPS", "Co-op", "RPG"],
      avataresMembros: ["LT", "MC", "NS", "AE"],
      jogosDestaque: [
        { titulo: "Cyberpunk 2077", capaUrl: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1091500/header.jpg" },
        { titulo: "Red Dead Redemption 2", capaUrl: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1174180/header.jpg" },
        { titulo: "Valheim", capaUrl: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/892970/header.jpg" },
        { titulo: "Elden Ring", capaUrl: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1245620/header.jpg" }
      ]
    },
    {
      id: 3,
      nome: "Os Aventureiros",
      descricao: "Explora\xE7\xE3o, sobreviv\xEAncia e co-op",
      vagasDisponiveis: 2,
      membrosAtuais: 3,
      limiteMembros: 5,
      totalJogos: 214,
      generos: ["Aventura", "Co-op", "Indie"],
      avataresMembros: ["RK", "DM", "PL"],
      jogosDestaque: [
        { titulo: "Valheim", capaUrl: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/892970/header.jpg" },
        { titulo: "Red Dead Redemption 2", capaUrl: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1174180/header.jpg" },
        { titulo: "The Witcher 3", capaUrl: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/292030/header.jpg" },
        { titulo: "Baldur's Gate 3", capaUrl: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1086940/header.jpg" }
      ]
    },
    {
      id: 4,
      nome: "Cl\xE3 do Sof\xE1",
      descricao: "Jogos narrativos e campanhas AAA",
      vagasDisponiveis: 1,
      membrosAtuais: 5,
      limiteMembros: 6,
      totalJogos: 314,
      generos: ["RPG", "Aventura", "Estrat\xE9gia"],
      avataresMembros: ["JS", "MA", "CR", "VN", "TH"],
      jogosDestaque: [
        { titulo: "Red Dead Redemption 2", capaUrl: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1174180/header.jpg" },
        { titulo: "Elden Ring", capaUrl: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1245620/header.jpg" },
        { titulo: "Cyberpunk 2077", capaUrl: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1091500/header.jpg" },
        { titulo: "The Witcher 3", capaUrl: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/292030/header.jpg" }
      ]
    },
    {
      id: 5,
      nome: "Lunar Games",
      descricao: "Indies premiados, terror e plataforma",
      vagasDisponiveis: 2,
      membrosAtuais: 4,
      limiteMembros: 6,
      totalJogos: 189,
      generos: ["Indie", "Terror", "Plataforma"],
      avataresMembros: ["AL", "BR", "CA", "DF"],
      jogosDestaque: [
        { titulo: "Valheim", capaUrl: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/892970/header.jpg" },
        { titulo: "Baldur's Gate 3", capaUrl: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1086940/header.jpg" },
        { titulo: "Elden Ring", capaUrl: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1245620/header.jpg" },
        { titulo: "Cyberpunk 2077", capaUrl: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1091500/header.jpg" }
      ]
    },
    {
      id: 6,
      nome: "Mesa Redonda",
      descricao: "Simula\xE7\xE3o, estrat\xE9gia e RPGs t\xE1ticos",
      vagasDisponiveis: 1,
      membrosAtuais: 4,
      limiteMembros: 5,
      totalJogos: 276,
      generos: ["Simula\xE7\xE3o", "Estrat\xE9gia", "Corrida"],
      avataresMembros: ["GR", "HT", "IV", "JP"],
      jogosDestaque: [
        { titulo: "Baldur's Gate 3", capaUrl: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1086940/header.jpg" },
        { titulo: "The Witcher 3", capaUrl: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/292030/header.jpg" },
        { titulo: "Red Dead Redemption 2", capaUrl: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1174180/header.jpg" },
        { titulo: "Valheim", capaUrl: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/892970/header.jpg" }
      ]
    }
  ];
  familiasSubject = new BehaviorSubject(this.listar());
  familias$ = this.familiasSubject.asObservable();
  listar() {
    const dados = localStorage.getItem(this.storageKey);
    if (!dados) {
      localStorage.setItem(this.storageKey, JSON.stringify(this.familiasIniciais));
      return this.familiasIniciais.map((familia) => __spreadValues({}, familia));
    }
    return JSON.parse(dados);
  }
  buscarPorId(id) {
    return this.listar().find((familia) => familia.id === id);
  }
  criar(familia) {
    const erro = validarLimiteFamilia(familia.membrosAtuais, familia.limiteMembros);
    if (erro) {
      throw new Error(erro);
    }
    const familias = this.listar();
    const novaFamilia = __spreadProps(__spreadValues({}, familia), {
      id: familias.length ? Math.max(...familias.map((item) => item.id)) + 1 : 1
    });
    this.salvar([...familias, novaFamilia]);
    return novaFamilia;
  }
  atualizar(familiaAtualizada) {
    const erro = validarLimiteFamilia(familiaAtualizada.membrosAtuais, familiaAtualizada.limiteMembros);
    if (erro) {
      throw new Error(erro);
    }
    const familiaConsistente = __spreadProps(__spreadValues({}, familiaAtualizada), {
      vagasDisponiveis: Math.max(0, familiaAtualizada.limiteMembros - familiaAtualizada.membrosAtuais)
    });
    this.salvar(this.listar().map((familia) => familia.id === familiaConsistente.id ? familiaConsistente : familia));
  }
  excluir(id) {
    this.salvar(this.listar().filter((familia) => familia.id !== id));
  }
  salvar(familias) {
    localStorage.setItem(this.storageKey, JSON.stringify(familias));
    this.familiasSubject.next(familias);
  }
  static \u0275fac = function FamiliaService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FamiliaService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _FamiliaService, factory: _FamiliaService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FamiliaService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  podeSolicitarEntrada,
  FamiliaService
};
//# sourceMappingURL=chunk-UMLRIWJD.js.map
