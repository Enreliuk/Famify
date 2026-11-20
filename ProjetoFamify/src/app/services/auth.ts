import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UsuarioFamify, UsuarioService } from './usuario.service';

export type { UsuarioFamify } from './usuario.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly STORAGE_SESSAO = 'famify_sessao_ativa';

  private usuarioAtualSubject = new BehaviorSubject<UsuarioFamify | null>(
    this.carregarSessaoSalva()
  );
  usuarioAtual$ = this.usuarioAtualSubject.asObservable();

  constructor(private usuarioService: UsuarioService) {}

  cadastrar(dados: {
    nome: string;
    email: string;
    senha: string;
    steamId: string;
    jogosDesejados: string;
  }): { sucesso: boolean; mensagem?: string } {
    const jaExiste = this.usuarioService.buscarPorEmail(dados.email);

    if (jaExiste) {
      return { sucesso: false, mensagem: 'Este e-mail já está cadastrado.' };
    }

    this.usuarioService.criar({
      nome: dados.nome.trim(),
      email: dados.email.trim().toLowerCase(),
      senha: dados.senha,
      steamId: dados.steamId.trim() || '76561198000000000',
      jogosImportados: 42,
      jogosDesejados: dados.jogosDesejados
    });

    this.salvarSessao(this.usuarioService.buscarPorEmail(dados.email)!);
    return { sucesso: true };
  }

  login(email: string, senha: string): { sucesso: boolean; mensagem?: string } {
    const encontrado = this.usuarioService.buscarPorEmail(email);

    if (!encontrado || encontrado.senha !== senha) {
      return {
        sucesso: false,
        mensagem: 'E-mail ou senha inválidos. Crie uma conta caso ainda não tenha cadastro.'
      };
    }

    this.salvarSessao(encontrado);
    return { sucesso: true };
  }

  loginComSteam(): void {
    const usuarioSteam = {
      nome: 'Jogador1',
      email: 'jogador@famify.com.br',
      steamId: '76561198091234567',
      jogosImportados: 68
    };
    const existente = this.usuarioService.buscarPorEmail(usuarioSteam.email);
    const usuario = existente ?? this.usuarioService.criar(usuarioSteam);
    this.salvarSessao(usuario);
  }

  logout(): void {
    localStorage.removeItem(this.STORAGE_SESSAO);
    this.usuarioAtualSubject.next(null);
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