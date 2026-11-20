import { Component, OnInit } from '@angular/core';
import { FamiliaService, FamiliaSteam } from '../../services/familia.service';
import { UsuarioService, UsuarioFamify } from '../../services/usuario.service';
import { JogoService, Jogo } from '../../services/jogo.service';
import { GeneroService } from '../../services/genero.service';
import { SolicitacaoService, SolicitacaoFamilia } from '../../services/solicitacao.service';

@Component({
  selector: 'app-admin',
  standalone: false,
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  abaAtiva = 'usuarios';
  carregando = true;
  mensagemErro = '';
  mensagemSucesso = '';

  usuarios: UsuarioFamify[] = [];
  usuarioEditando: UsuarioFamify | null = null;
  usuarioForm: Omit<UsuarioFamify, 'id'> = {
    nome: '', email: '', senha: '', steamId: '', jogosImportados: 0, jogosDesejados: ''
  };

  familias: FamiliaSteam[] = [];
  familiaEditando: FamiliaSteam | null = null;
  familiaForm: Omit<FamiliaSteam, 'id'> = {
    nome: '', descricao: '', vagasDisponiveis: 1, membrosAtuais: 1,
    limiteMembros: 6, totalJogos: 0, generos: [], avataresMembros: [],
    jogosDestaque: []
  };
  generosFamilia = '';

  jogos: Jogo[] = [];
  jogoEditando: Jogo | null = null;
  jogoForm: Omit<Jogo, 'id'> = { titulo: '', imagemUrl: '', crescimento: '', buscasSemana: '' };

  generos: string[] = [];
  generoForm = '';

  solicitacoes: SolicitacaoFamilia[] = [];

  constructor(
    private usuarioService: UsuarioService,
    private familiaService: FamiliaService,
    private jogoService: JogoService,
    private generoService: GeneroService,
    private solicitacaoService: SolicitacaoService
  ) {}

  ngOnInit(): void {
    window.setTimeout(() => {
      try {
        this.carregarDados();
      } catch (erro) {
        this.mensagemErro = erro instanceof Error ? erro.message : 'Não foi possível carregar os dados locais.';
      } finally {
        this.carregando = false;
      }
    }, 250);
  }

  carregarDados(): void {
    this.usuarios = this.usuarioService.listar();
    this.familias = this.familiaService.listar();
    this.jogos = this.jogoService.listar();
    this.generos = this.generoService.listar();
    this.solicitacoes = this.solicitacaoService.listar();
  }

  selecionarAba(aba: string): void {
    this.abaAtiva = aba;
    this.limparMensagens();
  }

  salvarUsuario(): void {
    try {
      if (!this.usuarioForm.nome.trim() || !this.usuarioForm.email.trim()) {
        throw new Error('Informe nome e e-mail do usuário.');
      }
      if (this.usuarioEditando) {
        this.usuarioService.atualizar({ ...this.usuarioEditando, ...this.usuarioForm });
      } else {
        if (this.usuarioService.buscarPorEmail(this.usuarioForm.email)) {
          throw new Error('Já existe um usuário com este e-mail.');
        }
        this.usuarioService.criar(this.usuarioForm);
      }
      this.usuarioEditando = null;
      this.usuarioForm = { nome: '', email: '', senha: '', steamId: '', jogosImportados: 0, jogosDesejados: '' };
      this.finalizarAcao('Usuário salvo com sucesso.');
    } catch (erro) {
      this.mensagemErro = erro instanceof Error ? erro.message : 'Não foi possível salvar o usuário.';
    }
  }

  editarUsuario(usuario: UsuarioFamify): void {
    this.usuarioEditando = usuario;
    this.usuarioForm = {
      nome: usuario.nome, email: usuario.email, senha: usuario.senha ?? '',
      steamId: usuario.steamId, jogosImportados: usuario.jogosImportados,
      jogosDesejados: usuario.jogosDesejados ?? ''
    };
  }

  excluirUsuario(id: number): void {
    this.usuarioService.excluir(id);
    this.finalizarAcao('Usuário excluído.');
  }

  salvarFamilia(): void {
    try {
      if (!this.familiaForm.nome.trim()) {
        throw new Error('Informe o nome da família.');
      }
      const dados = {
        ...this.familiaForm,
        generos: this.generosFamilia.split(',').map(item => item.trim()).filter(Boolean),
        vagasDisponiveis: this.familiaForm.limiteMembros - this.familiaForm.membrosAtuais
      };
      if (this.familiaEditando) {
        this.familiaService.atualizar({ ...dados, id: this.familiaEditando.id });
      } else {
        this.familiaService.criar(dados);
      }
      this.familiaEditando = null;
      this.generosFamilia = '';
      this.familiaForm = {
        nome: '', descricao: '', vagasDisponiveis: 1, membrosAtuais: 1,
        limiteMembros: 6, totalJogos: 0, generos: [], avataresMembros: [], jogosDestaque: []
      };
      this.finalizarAcao('Família salva com sucesso.');
    } catch (erro) {
      this.mensagemErro = erro instanceof Error ? erro.message : 'Não foi possível salvar a família.';
    }
  }

  editarFamilia(familia: FamiliaSteam): void {
    this.familiaEditando = familia;
    this.familiaForm = { ...familia };
    this.generosFamilia = familia.generos.join(', ');
  }

  excluirFamilia(id: number): void {
    this.familiaService.excluir(id);
    this.finalizarAcao('Família excluída.');
  }

  salvarJogo(): void {
    try {
      if (!this.jogoForm.titulo.trim()) {
        throw new Error('Informe o título do jogo.');
      }
      if (this.jogoEditando) {
        this.jogoService.atualizar({ ...this.jogoEditando, ...this.jogoForm });
      } else {
        this.jogoService.criar(this.jogoForm);
      }
      this.jogoEditando = null;
      this.jogoForm = { titulo: '', imagemUrl: '', crescimento: '', buscasSemana: '' };
      this.finalizarAcao('Jogo salvo com sucesso.');
    } catch (erro) {
      this.mensagemErro = erro instanceof Error ? erro.message : 'Não foi possível salvar o jogo.';
    }
  }

  editarJogo(jogo: Jogo): void {
    this.jogoEditando = jogo;
    this.jogoForm = {
      titulo: jogo.titulo, imagemUrl: jogo.imagemUrl,
      crescimento: jogo.crescimento ?? '', buscasSemana: jogo.buscasSemana ?? ''
    };
  }

  excluirJogo(id: number): void {
    this.jogoService.excluir(id);
    this.finalizarAcao('Jogo excluído.');
  }

  salvarGenero(): void {
    try {
      if (!this.generoForm.trim()) {
        throw new Error('Informe o nome do gênero.');
      }
      this.generoService.criar(this.generoForm);
      this.generoForm = '';
      this.finalizarAcao('Gênero salvo com sucesso.');
    } catch (erro) {
      this.mensagemErro = erro instanceof Error ? erro.message : 'Não foi possível salvar o gênero.';
    }
  }

  excluirGenero(genero: string): void {
    if (genero !== 'Todos') {
      this.generoService.excluir(genero);
      this.finalizarAcao('Gênero excluído.');
    }
  }

  alterarSolicitacao(solicitacao: SolicitacaoFamilia, status: 'aprovada' | 'rejeitada'): void {
    try {
      this.solicitacaoService.atualizarStatus(solicitacao.id, status);
      this.finalizarAcao(`Solicitação ${status}.`);
    } catch (erro) {
      this.mensagemErro = erro instanceof Error ? erro.message : 'Não foi possível alterar a solicitação.';
    }
  }

  excluirSolicitacao(id: number): void {
    this.solicitacaoService.excluir(id);
    this.finalizarAcao('Solicitação excluída.');
  }

  private finalizarAcao(mensagem: string): void {
    this.mensagemErro = '';
    this.mensagemSucesso = mensagem;
    this.carregarDados();
  }

  private limparMensagens(): void {
    this.mensagemErro = '';
    this.mensagemSucesso = '';
  }
}
