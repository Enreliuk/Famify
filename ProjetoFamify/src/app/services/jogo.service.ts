import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Jogo {
  id: number;
  titulo: string;
  imagemUrl: string;
  crescimento?: string;
  buscasSemana?: string;
}

@Injectable({ providedIn: 'root' })
export class JogoService {
  private readonly storageKey = 'famify_jogos';
  private readonly jogosIniciais: Jogo[] = [
    { id: 1, titulo: 'Elden Ring', crescimento: '+139%', buscasSemana: '15.400 buscas', imagemUrl: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1245620/header.jpg' },
    { id: 2, titulo: 'Cyberpunk 2077', crescimento: '+84%', buscasSemana: '11.200 buscas', imagemUrl: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1091500/header.jpg' },
    { id: 3, titulo: "Baldur's Gate 3", crescimento: '+112%', buscasSemana: '9.850 buscas', imagemUrl: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1086940/header.jpg' },
    { id: 4, titulo: 'The Witcher 3', crescimento: '+45%', buscasSemana: '7.430 buscas', imagemUrl: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/292030/header.jpg' },
    { id: 5, titulo: 'Valheim', crescimento: '+30%', buscasSemana: '6.120 buscas', imagemUrl: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/892970/header.jpg' },
    { id: 6, titulo: 'Red Dead Redemption 2', crescimento: '+62%', buscasSemana: '8.900 buscas', imagemUrl: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1174180/header.jpg' }
  ];

  private readonly jogosSubject = new BehaviorSubject<Jogo[]>(this.listar());
  jogos$ = this.jogosSubject.asObservable();

  listar(): Jogo[] {
    const dados = localStorage.getItem(this.storageKey);
    if (!dados) {
      localStorage.setItem(this.storageKey, JSON.stringify(this.jogosIniciais));
      return this.jogosIniciais;
    }
    return JSON.parse(dados);
  }

  buscarPorId(id: number): Jogo | undefined {
    return this.listar().find(jogo => jogo.id === id);
  }

  criar(jogo: Omit<Jogo, 'id'>): Jogo {
    const jogos = this.listar();
    const novoJogo = { ...jogo, id: jogos.length ? Math.max(...jogos.map(item => item.id)) + 1 : 1 };
    this.salvar([...jogos, novoJogo]);
    return novoJogo;
  }

  atualizar(jogoAtualizado: Jogo): void {
    this.salvar(this.listar().map(jogo => jogo.id === jogoAtualizado.id ? jogoAtualizado : jogo));
  }

  excluir(id: number): void {
    this.salvar(this.listar().filter(jogo => jogo.id !== id));
  }

  private salvar(jogos: Jogo[]): void {
    localStorage.setItem(this.storageKey, JSON.stringify(jogos));
    this.jogosSubject.next(jogos);
  }
}
