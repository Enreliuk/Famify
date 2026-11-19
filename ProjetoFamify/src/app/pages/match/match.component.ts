import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';

interface JogoDestaque {
  titulo: string;
  capaUrl: string;
}

interface FamiliaSteam {
  id: number;
  nome: string;
  descricao: string;
  vagasDisponiveis: number;
  membrosAtuais: number;
  limiteMembros: number;
  totalJogos: number;
  generos: string[];
  avataresMembros: string[];
  jogosDestaque: JogoDestaque[];
  solicitado?: boolean;
}

@Component({
  selector: 'app-match',
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatChipsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatProgressBarModule
  ],
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css']
})
export class MatchComponent implements OnInit {
  termoFiltro: string = '';
  generoSelecionado: string = 'Todos';

  // Filtros de Afinidade (Slide 10)
  generosDisponiveis: string[] = [
    'Todos',
    'RPG',
    'FPS',
    'Indie',
    'Aventura',
    'Co-op',
    'Simulação',
    'Estratégia',
    'Terror',
    'Corrida',
    'Plataforma'
  ];

  // Lista de Grupos Familiares (Slide 10 - respeitando limite máximo de 6 membros)
  familias: FamiliaSteam[] = [
    {
      id: 1,
      nome: 'Família Nebulosa',
      descricao: 'RPGs e jogos de mundo aberto',
      vagasDisponiveis: 2,
      membrosAtuais: 3,
      limiteMembros: 5,
      totalJogos: 214,
      generos: ['RPG', 'Aventura'],
      avataresMembros: ['FB', 'FT', 'GS'],
      jogosDestaque: [
        { titulo: 'Elden Ring', capaUrl: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1245620/header.jpg' },
        { titulo: "Baldur's Gate 3", capaUrl: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1086940/header.jpg' },
        { titulo: 'The Witcher 3', capaUrl: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/292030/header.jpg' },
        { titulo: 'Cyberpunk 2077', capaUrl: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1091500/header.jpg' }
      ]
    },
    {
      id: 2,
      nome: 'Pixel Squad',
      descricao: 'RPGs, ação e títulos competitivos',
      vagasDisponiveis: 2,
      membrosAtuais: 4,
      limiteMembros: 6,
      totalJogos: 248,
      generos: ['FPS', 'Co-op', 'RPG'],
      avataresMembros: ['LT', 'MC', 'NS', 'AE'],
      jogosDestaque: [
        { titulo: 'Cyberpunk 2077', capaUrl: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1091500/header.jpg' },
        { titulo: 'Red Dead Redemption 2', capaUrl: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1174180/header.jpg' },
        { titulo: 'Valheim', capaUrl: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/892970/header.jpg' },
        { titulo: 'Elden Ring', capaUrl: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1245620/header.jpg' }
      ]
    },
    {
      id: 3,
      nome: 'Os Aventureiros',
      descricao: 'Exploração, sobrevivência e co-op',
      vagasDisponiveis: 2,
      membrosAtuais: 3,
      limiteMembros: 5,
      totalJogos: 214,
      generos: ['Aventura', 'Co-op', 'Indie'],
      avataresMembros: ['RK', 'DM', 'PL'],
      jogosDestaque: [
        { titulo: 'Valheim', capaUrl: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/892970/header.jpg' },
        { titulo: 'Red Dead Redemption 2', capaUrl: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1174180/header.jpg' },
        { titulo: 'The Witcher 3', capaUrl: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/292030/header.jpg' },
        { titulo: "Baldur's Gate 3", capaUrl: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1086940/header.jpg' }
      ]
    },
    {
      id: 4,
      nome: 'Clã do Sofá',
      descricao: 'Jogos narrativos e campanhas AAA',
      vagasDisponiveis: 1,
      membrosAtuais: 5,
      limiteMembros: 6,
      totalJogos: 314,
      generos: ['RPG', 'Aventura', 'Estratégia'],
      avataresMembros: ['JS', 'MA', 'CR', 'VN', 'TH'],
      jogosDestaque: [
        { titulo: 'Red Dead Redemption 2', capaUrl: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1174180/header.jpg' },
        { titulo: 'Elden Ring', capaUrl: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1245620/header.jpg' },
        { titulo: 'Cyberpunk 2077', capaUrl: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1091500/header.jpg' },
        { titulo: 'The Witcher 3', capaUrl: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/292030/header.jpg' }
      ]
    },
    {
      id: 5,
      nome: 'Lunar Games',
      descricao: 'Indies premiados, terror e plataforma',
      vagasDisponiveis: 2,
      membrosAtuais: 4,
      limiteMembros: 6,
      totalJogos: 189,
      generos: ['Indie', 'Terror', 'Plataforma'],
      avataresMembros: ['AL', 'BR', 'CA', 'DF'],
      jogosDestaque: [
        { titulo: 'Valheim', capaUrl: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/892970/header.jpg' },
        { titulo: "Baldur's Gate 3", capaUrl: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1086940/header.jpg' },
        { titulo: 'Elden Ring', capaUrl: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1245620/header.jpg' },
        { titulo: 'Cyberpunk 2077', capaUrl: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1091500/header.jpg' }
      ]
    },
    {
      id: 6,
      nome: 'Mesa Redonda',
      descricao: 'Simulação, estratégia e RPGs táticos',
      vagasDisponiveis: 1,
      membrosAtuais: 4,
      limiteMembros: 5,
      totalJogos: 276,
      generos: ['Simulação', 'Estratégia', 'Corrida'],
      avataresMembros: ['GR', 'HT', 'IV', 'JP'],
      jogosDestaque: [
        { titulo: "Baldur's Gate 3", capaUrl: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1086940/header.jpg' },
        { titulo: 'The Witcher 3', capaUrl: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/292030/header.jpg' },
        { titulo: 'Red Dead Redemption 2', capaUrl: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1174180/header.jpg' },
        { titulo: 'Valheim', capaUrl: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/892970/header.jpg' }
      ]
    }
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Captura o termo pesquisado caso o usuário tenha vindo da barra de busca da página inicial
    this.route.queryParams.subscribe(params => {
      if (params['q']) {
        this.termoFiltro = params['q'];
      }
    });
  }

  selecionarGenero(genero: string): void {
    this.generoSelecionado = genero;
  }

  get familiasFiltradas(): FamiliaSteam[] {
    return this.familias.filter(familia => {
      // Regra de segurança do Slide 8: nunca recomendar famílias lotadas (6/6)
      if (familia.membrosAtuais >= 6 || familia.vagasDisponiveis <= 0) {
        return false;
      }

      const bateGenero =
        this.generoSelecionado === 'Todos' ||
        familia.generos.includes(this.generoSelecionado);

      const termo = this.termoFiltro.trim().toLowerCase();
      const bateTexto =
        !termo ||
        familia.nome.toLowerCase().includes(termo) ||
        familia.descricao.toLowerCase().includes(termo) ||
        familia.generos.some(g => g.toLowerCase().includes(termo)) ||
        familia.jogosDestaque.some(j => j.titulo.toLowerCase().includes(termo));

      return bateGenero && bateTexto;
    });
  }

  solicitarEntrada(familia: FamiliaSteam): void {
    familia.solicitado = !familia.solicitado;
  }

  calcularPorcentagemOcupacao(familia: FamiliaSteam): number {
    return (familia.membrosAtuais / familia.limiteMembros) * 100;
  }
}