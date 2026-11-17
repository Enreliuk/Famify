import { Component, inject } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { map, shareReplay } from 'rxjs';

@Component({
  selector: 'app-layout',
  standalone: false, // Mantenha apenas se estiver usando LayoutModule com declarations
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  private breakpointObserver = inject(BreakpointObserver);

  // Propriedades exibidas no menu lateral e no header
  nomeSistema: string = 'Famify';
  usuario: string = 'Jogador Steam';
  iniciaisUsuario: string = 'JS';
  usuarioLogado: boolean = false;

  telaPequena$ = this.breakpointObserver.observe('(max-width: 767px)').pipe(
    map(result => result.matches),
    shareReplay()
  );

  conectarSteam(): void {
    this.usuarioLogado = true;
  }

  desconectar(): void {
    this.usuarioLogado = false;
  }
}