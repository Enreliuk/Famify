import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-auth',
  standalone: false,
  templateUrl: './auth.html',
  styleUrls: ['./auth.css']
})
export class AuthComponent {
  modoCadastro: boolean = false;

  // Campos do formulário
  nome: string = '';
  email: string = '';
  senha: string = '';
  steamProfileUrl: string = '';
  jogosDesejados: string = '';
  erroMensagem: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  alternarModo(cadastro: boolean): void {
    this.modoCadastro = cadastro;
    this.erroMensagem = '';
  }

  enviarFormulario(): void {
    if (!this.email.trim() || !this.senha.trim()) {
      this.erroMensagem = 'Preencha seu e-mail e senha para continuar.';
      return;
    }

    if (this.modoCadastro) {
      if (!this.nome.trim()) {
        this.erroMensagem = 'Informe seu apelido ou nome de exibição.';
        return;
      }

      const resultado = this.authService.cadastrar({
        nome: this.nome,
        email: this.email,
        senha: this.senha,
        steamId: this.steamProfileUrl,
        jogosDesejados: this.jogosDesejados
      });

      if (!resultado.sucesso) {
        this.erroMensagem = resultado.mensagem || 'Erro ao criar conta.';
        return;
      }

      this.router.navigate(['/match']);
    } else {
      const resultado = this.authService.login(this.email, this.senha);

      if (!resultado.sucesso) {
        this.erroMensagem = resultado.mensagem || 'E-mail ou senha inválidos.';
        return;
      }

      this.router.navigate(['/match']);
    }
  }

  entrarComSteam(): void {
    this.authService.loginComSteam();
    this.router.navigate(['/match']);
  }
}