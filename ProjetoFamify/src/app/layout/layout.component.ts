import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth';

@Component({
  selector: 'app-layout',
  standalone: false,
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  private authService = inject(AuthService);
  private router = inject(Router);

  nomeSistema: string = 'Famify';
  usuario: string = '';
  iniciaisUsuario: string = 'JS';
  usuarioLogado: boolean = false;

  ngOnInit(): void {
    this.authService.usuarioAtual$.subscribe(user => {
      if (user) {
        this.usuarioLogado = true;
        this.usuario = user.nome;
        this.iniciaisUsuario = user.nome.substring(0, 2).toUpperCase();
      } else {
        this.usuarioLogado = false;
        this.usuario = '';
      }
    });
  }

  conectarSteam(): void {
    this.router.navigate(['/login']);
  }

  desconectar(): void {
    this.authService.logout();
    this.router.navigate(['/inicio']);
  }
}