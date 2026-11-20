import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class GeneroService {
  private readonly storageKey = 'famify_generos';
  private readonly generosIniciais = [
    'Todos', 'RPG', 'FPS', 'Indie', 'Aventura', 'Co-op',
    'Simulação', 'Estratégia', 'Terror', 'Corrida', 'Plataforma'
  ];

  listar(): string[] {
    const dados = localStorage.getItem(this.storageKey);
    if (!dados) {
      localStorage.setItem(this.storageKey, JSON.stringify(this.generosIniciais));
      return this.generosIniciais;
    }
    return JSON.parse(dados);
  }

  criar(genero: string): void {
    const generos = this.listar();
    if (genero.trim() && !generos.includes(genero.trim())) {
      this.salvar([...generos, genero.trim()]);
    }
  }

  atualizar(generoAntigo: string, generoNovo: string): void {
    this.salvar(this.listar().map(genero => genero === generoAntigo ? generoNovo.trim() : genero));
  }

  excluir(genero: string): void {
    this.salvar(this.listar().filter(item => item !== genero));
  }

  private salvar(generos: string[]): void {
    localStorage.setItem(this.storageKey, JSON.stringify(generos));
  }
}
