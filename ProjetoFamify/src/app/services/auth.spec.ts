import { beforeEach, describe, expect, it } from 'vitest';
import { AuthService } from './auth';
import { UsuarioService } from './usuario.service';

describe('Autenticação administrativa local', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('aceita as credenciais da conta administrativa', () => {
    const authService = new AuthService(new UsuarioService());
    const resultado = authService.login('adm@famify.com.br', '123123');

    expect(resultado.sucesso).toBe(true);
    expect(authService.isAdministrador()).toBe(true);
  });

  it('recusa a conta administrativa com senha incorreta', () => {
    const authService = new AuthService(new UsuarioService());
    const resultado = authService.login('adm@famify.com.br', 'errada');

    expect(resultado.sucesso).toBe(false);
    expect(authService.isAdministrador()).toBe(false);
  });

  it('impede o cadastro reservando o e-mail administrativo', () => {
    const authService = new AuthService(new UsuarioService());
    const resultado = authService.cadastrar({
      nome: 'Outro usuário',
      email: 'adm@famify.com.br',
      senha: 'outra',
      steamId: '',
      jogosDesejados: ''
    });

    expect(resultado.sucesso).toBe(false);
  });
});
