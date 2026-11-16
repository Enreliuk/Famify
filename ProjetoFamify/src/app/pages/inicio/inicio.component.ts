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

  jogosMaisProcurados: JogoEmAlta[] = [
    {
      id: 1,
      titulo: 'Elden Ring',
      buscasSemana: '15.400 buscas',
      crescimento: '+139%',
      imagemUrl: 'assets/images/elden-ring.jpg'
    },
    {
      id: 2,
      titulo: 'Cyberpunk 2077',
      buscasSemana: '11.200 buscas',
      crescimento: '+84%',
      imagemUrl: 'assets/images/cyberpunk.jpg'
    },
    {
      id: 3,
      titulo: "Baldur's Gate 3",
      buscasSemana: '9.850 buscas',
      crescimento: '+112%',
      imagemUrl: 'assets/images/baldurs-gate-3.jpg'
    },
    {
      id: 4,
      titulo: 'The Witcher 3',
      buscasSemana: '7.430 buscas',
      crescimento: '+45%',
      imagemUrl: 'assets/images/witcher-3.jpg'
    },
    {
      id: 5,
      titulo: 'Valheim',
      buscasSemana: '6.120 buscas',
      crescimento: '+30%',
      imagemUrl: 'assets/images/valheim.jpg'
    },
    {
      id: 6,
      titulo: 'Red Dead Redemption 2',
      buscasSemana: '8.900 buscas',
      crescimento: '+62%',
      imagemUrl: 'assets/images/rdr2.jpg'
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