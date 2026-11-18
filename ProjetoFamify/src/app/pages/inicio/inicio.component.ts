import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

interface Metrica {
  titulo: string;
  valor: string;
}

interface JogoEmAlta {
  id: number;
  titulo: string;
  buscasSemana: string;
  crescimento: string;
  imagemUrl: string;
}

@Component({
  selector: 'app-inicio',
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  termoBusca: string = '';

  metricas: Metrica[] = [
    { titulo: 'Famílias ativas', valor: '2.480' },
    { titulo: 'Jogos disponíveis', valor: '12.300+' },
    { titulo: 'Usuários', valor: '9.760' },
    { titulo: 'Jogos economizados', valor: '38.900' }
  ];

  jogosMaisProcurados = [
  {
    titulo: 'Elden Ring',
    crescimento: '+139%',
    buscasSemana: '15.400 buscas',
    imagemUrl: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1245620/header.jpg'
  },
  {
    titulo: 'Cyberpunk 2077',
    crescimento: '+84%',
    buscasSemana: '11.200 buscas',
    imagemUrl: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1091500/header.jpg'
  },
  {
    titulo: "Baldur's Gate 3",
    crescimento: '+112%',
    buscasSemana: '9.850 buscas',
    imagemUrl: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1086940/header.jpg'
  },
  {
    titulo: 'The Witcher 3',
    crescimento: '+45%',
    buscasSemana: '7.430 buscas',
    imagemUrl: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/292030/header.jpg'
  },
  {
    titulo: 'Valheim',
    crescimento: '+30%',
    buscasSemana: '6.120 buscas',
    imagemUrl: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/892970/header.jpg'
  },
  {
    titulo: 'Red Dead Redemption 2',
    crescimento: '+62%',
    buscasSemana: '8.900 buscas',
    imagemUrl: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1174180/header.jpg'
  }
];

  constructor(private router: Router) {}

  ngOnInit(): void {}

  buscarFamilia(): void {
    if (this.termoBusca.trim()) {
      this.router.navigate(['/grupos'], {
        queryParams: { q: this.termoBusca }
      });
    } else {
      this.router.navigate(['/grupos']);
    }
  }

  filtrarPorJogo(nomeJogo: string): void {
    this.termoBusca = nomeJogo;
    this.buscarFamilia();
  }
}