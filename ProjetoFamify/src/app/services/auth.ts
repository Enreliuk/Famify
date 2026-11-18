import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface UsuarioFamify {
  nome: string;
  email: string;
  senha?: string;
  steamId: string;
  jogosImportados: number;
  jogosDesejados?: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly STORAGE_USUARIOS = 'famify_usuarios';
  private readonly STORAGE_SESSAO = 'famify_sessao_ativa';

  private usuarioAtualSubject = new BehaviorSubject<UsuarioFamify | null>(
    this.carregarSessaoSalva()
  );
  usuarioAtual$ = this.usuarioAtualSubject.asObservable();

  // Cadastra um novo usuário no localStorage e já inicia a sessão
  cadastrar(dados: {
    nome: string;
    email: string;
    senha: string;
    steamId: string;
    jogosDesejados: string;
  }): { sucesso: boolean; mensagem?: string } {
    const usuarios = this.listarUsuarios();

    const jaExiste = usuarios.some(
      u => u.email.toLowerCase() === dados.email.trim().toLowerCase()
    );

    if (jaExiste) {
      return { sucesso: false, mensagem: 'Este e-mail já está cadastrado.' };
    }

    const novoUsuario: UsuarioFamify = {
      nome: dados.nome.trim(),
      email: dados.email.trim().toLowerCase(),
      senha: dados.senha,
      steamId: dados.steamId.trim() || '76561198000000000',
      jogosImportados: 42,
      jogosDesejados: dados.jogosDesejados
    };

    usuarios.push(novoUsuario);
    localStorage.setItem(this.STORAGE_USUARIOS, JSON.stringify(usuarios));

    this.salvarSessao(novoUsuario);
    return { sucesso: true };
  }

  // Valida e-mail e senha contra os usuários cadastrados
  login(email: string, senha: string): { sucesso: boolean; mensagem?: string } {
    const usuarios = this.listarUsuarios();
    const encontrado = usuarios.find(
      u =>
        u.email.toLowerCase() === email.trim().toLowerCase() &&
        u.senha === senha
    );

    if (!encontrado) {
      return {
        sucesso: false,
        mensagem: 'E-mail ou senha inválidos. Crie uma conta caso ainda não tenha cadastro.'
      };
    }

    this.salvarSessao(encontrado);
    return { sucesso: true };
  }

  loginComSteam(): void {
    const usuarioSteam: UsuarioFamify = {
      nome: 'Enreliuk',
      email: 'contato@famify.com.br',
      steamId: '76561198091234567',
      jogosImportados: 68
    };
    this.salvarSessao(usuarioSteam);
  }

  logout(): void {
    localStorage.removeItem(this.STORAGE_SESSAO);
    this.usuarioAtualSubject.next(null);
  }

  private listarUsuarios(): UsuarioFamify[] {
    const dados = localStorage.getItem(this.STORAGE_USUARIOS);
    return dados ? JSON.parse(dados) : [];
  }

  private salvarSessao(usuario: UsuarioFamify): void {
    const { senha, ...dadosSemSenha } = usuario;
    localStorage.setItem(this.STORAGE_SESSAO, JSON.stringify(dadosSemSenha));
    this.usuarioAtualSubject.next(dadosSemSenha);
  }

  private carregarSessaoSalva(): UsuarioFamify | null {
    const sessao = localStorage.getItem(this.STORAGE_SESSAO);
    return sessao ? JSON.parse(sessao) : null;
  }
}