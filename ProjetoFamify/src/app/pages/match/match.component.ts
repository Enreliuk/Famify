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
import { FamiliaService, FamiliaSteam } from '../../services/familia.service';
import { GeneroService } from '../../services/genero.service';
import { SolicitacaoService } from '../../services/solicitacao.service';
import { AuthService } from '../../services/auth';

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

  generosDisponiveis: string[] = [];
  familias: FamiliaSteam[] = [];
  private usuarioId: number | null = null;

  constructor(
    private route: ActivatedRoute,
    private familiaService: FamiliaService,
    private generoService: GeneroService,
    private solicitacaoService: SolicitacaoService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.familias = this.familiaService.listar();
    this.generosDisponiveis = this.generoService.listar();
    this.familiaService.familias$.subscribe(familias => this.familias = familias);
    this.authService.usuarioAtual$.subscribe(usuario => {
      this.usuarioId = usuario?.id ?? null;
    });

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
    if (this.usuarioId && familia.solicitado) {
      this.solicitacaoService.solicitar(this.usuarioId, familia.id);
    } else if (this.usuarioId && !familia.solicitado) {
      const pendente = this.solicitacaoService.listar().find(solicitacao =>
        solicitacao.usuarioId === this.usuarioId &&
        solicitacao.familiaId === familia.id &&
        solicitacao.status === 'pendente'
      );
      if (pendente) {
        this.solicitacaoService.cancelar(pendente.id);
      }
    }
  }

  calcularPorcentagemOcupacao(familia: FamiliaSteam): number {
    return (familia.membrosAtuais / familia.limiteMembros) * 100;
  }
}