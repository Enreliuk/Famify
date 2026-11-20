import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface UsuarioFamify {
  id: number;
  nome: string;
  email: string;
  senha?: string;
  steamId: string;
  jogosImportados: number;
  jogosDesejados?: string;
}

@Injectable({ providedIn: 'root' })
export class UsuarioService {
  private readonly storageKey = 'famify_usuarios';
  private readonly usuariosSubject = new BehaviorSubject<UsuarioFamify[]>(this.listar());

  usuarios$ = this.usuariosSubject.asObservable();

  listar(): UsuarioFamify[] {
    const dados = localStorage.getItem(this.storageKey);
    return dados ? JSON.parse(dados) : [];
  }

  buscarPorId(id: number): UsuarioFamify | undefined {
    return this.listar().find(usuario => usuario.id === id);
  }

  buscarPorEmail(email: string): UsuarioFamify | undefined {
    const emailNormalizado = email.trim().toLowerCase();
    return this.listar().find(usuario => usuario.email.toLowerCase() === emailNormalizado);
  }

  criar(dados: Omit<UsuarioFamify, 'id'>): UsuarioFamify {
    const usuarios = this.listar();
    const novoUsuario: UsuarioFamify = {
      ...dados,
      id: usuarios.length ? Math.max(...usuarios.map(usuario => usuario.id)) + 1 : 1,
      nome: dados.nome.trim(),
      email: dados.email.trim().toLowerCase(),
      steamId: dados.steamId.trim()
    };

    usuarios.push(novoUsuario);
    this.salvar(usuarios);
    return novoUsuario;
  }

  atualizar(usuarioAtualizado: UsuarioFamify): UsuarioFamify {
    const usuarios = this.listar().map(usuario =>
      usuario.id === usuarioAtualizado.id ? usuarioAtualizado : usuario
    );
    this.salvar(usuarios);
    return usuarioAtualizado;
  }

  excluir(id: number): void {
    this.salvar(this.listar().filter(usuario => usuario.id !== id));
  }

  private salvar(usuarios: UsuarioFamify[]): void {
    localStorage.setItem(this.storageKey, JSON.stringify(usuarios));
    this.usuariosSubject.next(usuarios);
  }
}
