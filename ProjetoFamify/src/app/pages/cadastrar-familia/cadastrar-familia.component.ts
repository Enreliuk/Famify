import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { AuthService } from '../../services/auth';
import { FamiliaService, FamiliaSteam } from '../../services/familia.service';
import { GeneroService } from '../../services/genero.service';

@Component({
  selector: 'app-cadastrar-familia',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule
  ],
  templateUrl: './cadastrar-familia.component.html',
  styleUrls: ['./cadastrar-familia.component.css']
})
export class CadastrarFamiliaComponent implements OnInit {
  usuarioLogado = false;
  generosDisponiveis: string[] = [];
  generosSelecionados: string[] = [];
  carregando = false;
  mensagemSucesso = '';
  mensagemErro = '';

  formulario = {
    nome: '',
    descricao: '',
    membrosAtuais: 1,
    limiteMembros: 6,
    totalJogos: 0
  };

  constructor(
    private authService: AuthService,
    private familiaService: FamiliaService,
    private generoService: GeneroService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.authService.usuarioAtual$.subscribe(usuario => {
      this.usuarioLogado = !!usuario;
    });

    this.generosDisponiveis = this.generoService
      .listar()
      .filter(genero => genero !== 'Todos');
  }

  cadastrarFamilia(): void {
    this.mensagemSucesso = '';
    this.mensagemErro = '';

    if (!this.usuarioLogado) {
      this.mensagemErro = 'Entre ou crie uma conta para cadastrar sua família Steam.';
      return;
    }

    if (!this.formulario.nome.trim()) {
      this.mensagemErro = 'Informe o nome da família.';
      return;
    }

    const membrosAtuais = Number(this.formulario.membrosAtuais);
    const limiteMembros = Number(this.formulario.limiteMembros);
    const totalJogos = Number(this.formulario.totalJogos);

    if (!Number.isInteger(membrosAtuais) || membrosAtuais < 1) {
      this.mensagemErro = 'Informe um número válido de membros atuais (mínimo 1).';
      return;
    }

    if (!Number.isInteger(limiteMembros) || limiteMembros < 1 || limiteMembros > 6) {
      this.mensagemErro = 'O limite da família deve estar entre 1 e 6 membros.';
      return;
    }

    if (membrosAtuais > limiteMembros) {
      this.mensagemErro = 'Os membros atuais não podem exceder o limite da família.';
      return;
    }

    const novaFamilia: Omit<FamiliaSteam, 'id'> = {
      nome: this.formulario.nome.trim(),
      descricao: this.formulario.descricao.trim(),
      membrosAtuais,
      limiteMembros,
      vagasDisponiveis: Math.max(0, limiteMembros - membrosAtuais),
      totalJogos: Number.isInteger(totalJogos) && totalJogos >= 0 ? totalJogos : 0,
      generos: this.generosSelecionados,
      avataresMembros: [],
      jogosDestaque: []
    };

    this.carregando = true;
    try {
      this.familiaService.criar(novaFamilia);
      this.mensagemSucesso = 'Família cadastrada com sucesso! Agora ela pode aparecer em "Encontrar família" quando houver vagas disponíveis.';
      this.formulario = {
        nome: '',
        descricao: '',
        membrosAtuais: 1,
        limiteMembros: 6,
        totalJogos: 0
      };
      this.generosSelecionados = [];
    } catch (erro) {
      this.mensagemErro = erro instanceof Error ? erro.message : 'Não foi possível cadastrar a família.';
    } finally {
      this.carregando = false;
    }
  }

  irParaLogin(): void {
    this.router.navigate(['/login']);
  }

  irParaMatch(): void {
    this.router.navigate(['/match']);
  }
}
