import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatChipsModule } from '@angular/material/chips';
import { FamiliaService } from '../../services/familia.service';
import { JogoService, Jogo } from '../../services/jogo.service';
import { UsuarioService } from '../../services/usuario.service';
import { SolicitacaoService } from '../../services/solicitacao.service';

interface Metrica {
  titulo: string;
  valor: string;
}

@Component({
  selector: 'app-inicio',
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatChipsModule
  ],
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  termoBusca: string = '';

  metricas: Metrica[] = [];
  jogosMaisProcurados: Jogo[] = [];

  constructor(
    private router: Router,
    private familiaService: FamiliaService,
    private jogoService: JogoService,
    private usuarioService: UsuarioService,
    private solicitacaoService: SolicitacaoService
  ) {}

  ngOnInit(): void {
    this.jogosMaisProcurados = this.jogoService.listar();
    this.atualizarMetricas();

    this.familiaService.familias$.subscribe(() => this.atualizarMetricas());
    this.jogoService.jogos$.subscribe(jogos => {
      this.jogosMaisProcurados = jogos;
      this.atualizarMetricas();
    });
    this.usuarioService.usuarios$.subscribe(() => this.atualizarMetricas());
    this.solicitacaoService.solicitacoes$.subscribe(() => this.atualizarMetricas());
  }

  private atualizarMetricas(): void {
    const familias = this.familiaService.listar();
    const jogos = this.jogoService.listar();
    const usuarios = this.usuarioService.listar();
    const solicitacoes = this.solicitacaoService.listar();

    this.metricas = [
      { titulo: 'Famílias ativas', valor: familias.filter(familia => familia.membrosAtuais > 0).length.toLocaleString('pt-BR') },
      { titulo: 'Jogos disponíveis', valor: jogos.length.toLocaleString('pt-BR') },
      { titulo: 'Usuários', valor: usuarios.length.toLocaleString('pt-BR') },
      { titulo: 'Solicitações locais', valor: solicitacoes.length.toLocaleString('pt-BR') }
    ];
  }

  buscarFamilia(): void {
    this.router.navigate(['/match'], {
      queryParams: this.termoBusca.trim() ? { q: this.termoBusca.trim() } : {}
    });
  }

  filtrarPorJogo(nomeJogo: string): void {
    this.termoBusca = nomeJogo;
    this.buscarFamilia();
  }
}