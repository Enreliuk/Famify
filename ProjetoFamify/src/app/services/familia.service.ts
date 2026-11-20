import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { validarLimiteFamilia } from './regras-negocio';

export interface JogoDestaqueFamilia {
  titulo: string;
  capaUrl: string;
}

export interface FamiliaSteam {
  id: number;
  nome: string;
  descricao: string;
  vagasDisponiveis: number;
  membrosAtuais: number;
  limiteMembros: number;
  totalJogos: number;
  generos: string[];
  avataresMembros: string[];
  jogosDestaque: JogoDestaqueFamilia[];
  solicitado?: boolean;
}

@Injectable({ providedIn: 'root' })
export class FamiliaService {
  private readonly storageKey = 'famify_familias';
  private readonly familiasIniciais: FamiliaSteam[] = [
    {
      id: 1, nome: 'Família Nebulosa', descricao: 'RPGs e jogos de mundo aberto',
      vagasDisponiveis: 2, membrosAtuais: 3, limiteMembros: 5, totalJogos: 214,
      generos: ['RPG', 'Aventura'], avataresMembros: ['FB', 'FT', 'GS'],
      jogosDestaque: [
        { titulo: 'Elden Ring', capaUrl: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1245620/header.jpg' },
        { titulo: "Baldur's Gate 3", capaUrl: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1086940/header.jpg' },
        { titulo: 'The Witcher 3', capaUrl: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/292030/header.jpg' },
        { titulo: 'Cyberpunk 2077', capaUrl: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1091500/header.jpg' }
      ]
    },
    {
      id: 2, nome: 'Pixel Squad', descricao: 'RPGs, ação e títulos competitivos',
      vagasDisponiveis: 2, membrosAtuais: 4, limiteMembros: 6, totalJogos: 248,
      generos: ['FPS', 'Co-op', 'RPG'], avataresMembros: ['LT', 'MC', 'NS', 'AE'],
      jogosDestaque: [
        { titulo: 'Cyberpunk 2077', capaUrl: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1091500/header.jpg' },
        { titulo: 'Red Dead Redemption 2', capaUrl: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1174180/header.jpg' },
        { titulo: 'Valheim', capaUrl: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/892970/header.jpg' },
        { titulo: 'Elden Ring', capaUrl: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1245620/header.jpg' }
      ]
    },
    {
      id: 3, nome: 'Os Aventureiros', descricao: 'Exploração, sobrevivência e co-op',
      vagasDisponiveis: 2, membrosAtuais: 3, limiteMembros: 5, totalJogos: 214,
      generos: ['Aventura', 'Co-op', 'Indie'], avataresMembros: ['RK', 'DM', 'PL'],
      jogosDestaque: [
        { titulo: 'Valheim', capaUrl: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/892970/header.jpg' },
        { titulo: 'Red Dead Redemption 2', capaUrl: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1174180/header.jpg' },
        { titulo: 'The Witcher 3', capaUrl: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/292030/header.jpg' },
        { titulo: "Baldur's Gate 3", capaUrl: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1086940/header.jpg' }
      ]
    },
    {
      id: 4, nome: 'Clã do Sofá', descricao: 'Jogos narrativos e campanhas AAA',
      vagasDisponiveis: 1, membrosAtuais: 5, limiteMembros: 6, totalJogos: 314,
      generos: ['RPG', 'Aventura', 'Estratégia'], avataresMembros: ['JS', 'MA', 'CR', 'VN', 'TH'],
      jogosDestaque: [
        { titulo: 'Red Dead Redemption 2', capaUrl: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1174180/header.jpg' },
        { titulo: 'Elden Ring', capaUrl: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1245620/header.jpg' },
        { titulo: 'Cyberpunk 2077', capaUrl: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1091500/header.jpg' },
        { titulo: 'The Witcher 3', capaUrl: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/292030/header.jpg' }
      ]
    },
    {
      id: 5, nome: 'Lunar Games', descricao: 'Indies premiados, terror e plataforma',
      vagasDisponiveis: 2, membrosAtuais: 4, limiteMembros: 6, totalJogos: 189,
      generos: ['Indie', 'Terror', 'Plataforma'], avataresMembros: ['AL', 'BR', 'CA', 'DF'],
      jogosDestaque: [
        { titulo: 'Valheim', capaUrl: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/892970/header.jpg' },
        { titulo: "Baldur's Gate 3", capaUrl: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1086940/header.jpg' },
        { titulo: 'Elden Ring', capaUrl: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1245620/header.jpg' },
        { titulo: 'Cyberpunk 2077', capaUrl: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1091500/header.jpg' }
      ]
    },
    {
      id: 6, nome: 'Mesa Redonda', descricao: 'Simulação, estratégia e RPGs táticos',
      vagasDisponiveis: 1, membrosAtuais: 4, limiteMembros: 5, totalJogos: 276,
      generos: ['Simulação', 'Estratégia', 'Corrida'], avataresMembros: ['GR', 'HT', 'IV', 'JP'],
      jogosDestaque: [
        { titulo: "Baldur's Gate 3", capaUrl: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1086940/header.jpg' },
        { titulo: 'The Witcher 3', capaUrl: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/292030/header.jpg' },
        { titulo: 'Red Dead Redemption 2', capaUrl: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1174180/header.jpg' },
        { titulo: 'Valheim', capaUrl: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/892970/header.jpg' }
      ]
    }
  ];

  private readonly familiasSubject = new BehaviorSubject<FamiliaSteam[]>(this.listar());
  familias$ = this.familiasSubject.asObservable();

  listar(): FamiliaSteam[] {
    const dados = localStorage.getItem(this.storageKey);
    if (!dados) {
      localStorage.setItem(this.storageKey, JSON.stringify(this.familiasIniciais));
      return this.familiasIniciais.map(familia => ({ ...familia }));
    }
    return JSON.parse(dados);
  }

  buscarPorId(id: number): FamiliaSteam | undefined {
    return this.listar().find(familia => familia.id === id);
  }

  criar(familia: Omit<FamiliaSteam, 'id'>): FamiliaSteam {
    const erro = validarLimiteFamilia(familia.membrosAtuais, familia.limiteMembros);
    if (erro) {
      throw new Error(erro);
    }
    const familias = this.listar();
    const novaFamilia = {
      ...familia,
      id: familias.length ? Math.max(...familias.map(item => item.id)) + 1 : 1
    };
    this.salvar([...familias, novaFamilia]);
    return novaFamilia;
  }

  atualizar(familiaAtualizada: FamiliaSteam): void {
    const erro = validarLimiteFamilia(
      familiaAtualizada.membrosAtuais,
      familiaAtualizada.limiteMembros
    );
    if (erro) {
      throw new Error(erro);
    }
    const familiaConsistente = {
      ...familiaAtualizada,
      vagasDisponiveis: Math.max(
        0,
        familiaAtualizada.limiteMembros - familiaAtualizada.membrosAtuais
      )
    };
    this.salvar(this.listar().map(familia =>
      familia.id === familiaConsistente.id ? familiaConsistente : familia
    ));
  }

  excluir(id: number): void {
    this.salvar(this.listar().filter(familia => familia.id !== id));
  }

  private salvar(familias: FamiliaSteam[]): void {
    localStorage.setItem(this.storageKey, JSON.stringify(familias));
    this.familiasSubject.next(familias);
  }
}
