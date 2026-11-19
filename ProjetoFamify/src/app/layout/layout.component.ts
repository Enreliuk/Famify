import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { AuthService } from '../services/auth';

@Component({
  selector: 'app-layout',
  standalone: false,
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit, OnDestroy {
  private authService = inject(AuthService);
  private router = inject(Router);

  nomeSistema: string = 'Famify';
  usuario: string = '';
  iniciaisUsuario: string = 'JS';
  usuarioLogado: boolean = false;
  esconderTopo: boolean = false;

  private subscriptions = new Subscription();

  ngOnInit(): void {
    this.atualizarVisibilidadeTopo(this.router.url);

    this.subscriptions.add(
      this.authService.usuarioAtual$.subscribe(user => {
        if (user) {
          this.usuarioLogado = true;
          this.usuario = user.nome;
          this.iniciaisUsuario = user.nome.substring(0, 2).toUpperCase();
        } else {
          this.usuarioLogado = false;
          this.usuario = '';
        }
      })
    );

    this.subscriptions.add(
      this.router.events
        .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
        .subscribe(event => {
          this.atualizarVisibilidadeTopo(event.urlAfterRedirects);
        })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  private atualizarVisibilidadeTopo(url: string): void {
    const rotaLimpa = url.split('?')[0].split('#')[0];
    this.esconderTopo = rotaLimpa.startsWith('/login');
  }

  conectarSteam(): void {
    this.router.navigate(['/login']);
  }

  desconectar(): void {
    this.authService.logout();
    this.router.navigate(['/inicio']);
  }
}