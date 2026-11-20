# Modelo de Projeto Integrador

Projeto didático Angular 20 + Angular Material 20, com NgModules e componentes `standalone: false`.

## Executar

1. Instale Node.js compatível: 20.19 ou superior da linha 20, 22.12 ou superior da linha 22, ou linha 24. Recomenda-se Node 22.12+.
2. Extraia o ZIP e abra a pasta `modelo-projeto-integrador` no VS Code.
3. No terminal dessa pasta, execute:

```bash
npm ci
npm start
```

Acesse http://localhost:4200. Para encerrar, pressione Ctrl+C. Não é necessário instalar Angular CLI globalmente nem executar `ng add`: o Material já está configurado.

Se optar por alterar dependências, utilize `npm install` para atualizar o arquivo de lock. Este é um projeto completo independente; não copie seu package.json por cima de um projeto já desenvolvido.

## O que observar

- Menu com **Início**, **Encontrar família** e **Gerenciar**, com indicação da página ativa.
- Cabeçalho com o nome do software e usuário fictício. Não há autenticação.
- O menu e o cabeçalho ficam no layout. O `router-outlet` troca apenas a página de conteúdo.
- Em telas menores que 768 px, o menu vira uma sobreposição, aberta pelo botão do cabeçalho, e fecha ao escolher uma página.
- As páginas usam dados locais persistidos pelos serviços Angular no `localStorage`. Não há API ou banco externo nesta etapa.
- O tema é local e não depende de Google Fonts nem de uma fonte externa de ícones.
- A aba **Gerenciar (Demo)** só aparece para a conta administrativa.

## Conta administrativa

Use as seguintes credenciais somente nesta demonstração local:

- E-mail: `adm@famify.com.br`
- Senha: `123123`

A conta é criada ou atualizada pelo `AuthService` durante o login administrativo. O link de gerenciamento só é exibido quando essa conta está ativa na sessão e a rota `/admin` possui proteção por guard. Outros usuários são redirecionados para a página inicial ao tentar acessar `/admin` diretamente.

## Serviços e persistência local

Como o projeto não possui back-end nesta etapa, os dados são centralizados em serviços Angular e persistidos no `localStorage` do navegador.

Cada entidade principal possui seu próprio serviço:

- `UsuarioService`: cadastro, consulta, edição e exclusão de usuários.
- `FamiliaService`: cadastro, consulta, edição e exclusão de famílias.
- `JogoService`: cadastro, consulta, edição e exclusão de jogos.
- `GeneroService`: cadastro, consulta, edição e exclusão de gêneros.
- `SolicitacaoService`: envio, consulta, aprovação, rejeição e cancelamento de solicitações.
- `AuthService`: sessão ativa e autenticação local simulada.

Os componentes não devem acessar o `localStorage` diretamente. Eles chamam os serviços correspondentes, que validam as operações e atualizam os dados observáveis utilizados pelas telas. Os serviços também centralizam dados iniciais para que o projeto já seja executável sem API.

As informações ficam disponíveis apenas no navegador utilizado pelo usuário. Por isso, login, usuários, famílias, jogos, gêneros e solicitações não são compartilhados entre dispositivos ou navegadores diferentes.

## Área administrativa

A rota `/admin` permite executar o CRUD completo das entidades principais sem back-end:

- Usuários: cadastrar, consultar, editar e excluir.
- Famílias: cadastrar, consultar, editar e excluir.
- Jogos: cadastrar, consultar, editar e excluir.
- Gêneros: cadastrar, consultar e excluir.
- Solicitações: consultar, aprovar, rejeitar e excluir.

Os formulários exibem estados fictícios de carregamento, mensagens de sucesso e mensagens de erro. A aprovação de solicitação atualiza a ocupação da família e respeita o limite máximo de seis membros.

## Dashboard e fluxo principal

Os indicadores da página inicial são calculados a partir dos dados cadastrados nos serviços locais. A página permite pesquisar famílias, aplicar filtros por gênero, consultar vagas e enviar ou cancelar solicitações.

## Recursos simulados e testes

Os seguintes recursos são representações locais e não devem ser considerados integração real:

- Login e sessão local, sem segurança server-side.
- OAuth da Steam e validação do Steam ID.
- Dados compartilhados entre usuários ou dispositivos.
- Comunicação com uma API externa.

As regras críticas estão cobertas por testes em `src/app/services/regras-negocio.spec.ts`, incluindo limite de membros, vagas, duplicidade de solicitações e cálculo de ocupação.

Execute os testes com:

```bash
npm test
```

## Arquivos para estudar

- `src/app/app.module.ts`: módulo principal.
- `src/app/app-routing.module.ts`: rotas principais e lazy loading.
- `src/app/layout/layout.module.ts`: importações do Material necessárias ao layout.
- `src/app/layout/layout.component.ts`: nome do sistema, usuário e tamanho da tela.
- `src/app/layout/layout.component.html`: menu, cabeçalho e router-outlet.
- `src/app/layout/layout.component.css`: estilos da estrutura.
- `src/app/pages/inicio/`: módulo e página inicial.
- `src/app/pages/projetos/`: módulo e segunda página.
- `src/styles.css`: estilos compartilhados.
- `angular.json`: tema pronto azure-blue do Material.

## Como personalizar

1. Em `layout.component.ts`, altere `nomeSistema` e `usuario`. Ajuste também as iniciais do avatar no HTML; os dados são apenas de demonstração.
2. Edite o título em `src/index.html`.
3. Troque o texto dos itens no menu e mantenha cada `routerLink` coerente com as rotas.
4. Altere o HTML das duas páginas conforme o domínio da equipe.
5. Ajuste as cores no CSS do layout, preservando contraste e legibilidade.

## Adicionar uma terceira página

Use a pasta `pages/projetos` como referência para criar `pages/clientes`:

1. Crie `ClientesComponent`, com `standalone: false`, e seu HTML.
2. Crie `ClientesModule`, declare nele o componente e importe `CommonModule`, os módulos Material utilizados e `RouterModule.forChild([{ path: '', component: ClientesComponent }])`.
3. Adicione em `app-routing.module.ts`, ANTES da rota `**`:

```typescript
{ path: 'clientes', loadChildren: () =>
    import('./pages/clientes/clientes.module').then(m => m.ClientesModule) }
```

4. Adicione um link no menu com `routerLink="/clientes"` e `routerLinkActive="item-ativo"`, seguindo os links existentes.

Não coloque `RouterModule.forRoot` nos módulos de páginas. Não declare o mesmo componente em dois módulos. Se incluir `[(ngModel)]`, importe `FormsModule` no módulo da página.

## Atividade da equipe

Adaptem o modelo ao software do grupo. Mantenham menu lateral, topo e navegação. Substituam a segunda página por uma tela de cadastro real do seu projeto usando Angular Material, conforme o guia de instalação trabalhado em aula.

## Verificação

```bash
npm run build
```

Teste os dois links, o botão de recolher o menu, o acesso direto a `/projetos`, a atualização do navegador nessa rota e a navegação em tela pequena. O build de produção fica em `dist/modelo-projeto-integrador/browser`.

Ao hospedar como SPA, o servidor precisa direcionar rotas desconhecidas para index.html. O servidor de desenvolvimento já faz esse tratamento.

## Referências

- https://angular.dev/guide/ngmodules/overview
- https://angular.dev/guide/routing
- https://material.angular.dev/components/sidenav/overview
- https://material.angular.dev/components/toolbar/overview
