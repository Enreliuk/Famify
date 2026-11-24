## Executar

### Pré-requisitos
- **Node.js** compatível com o projeto: `^20.19.0 || ^22.12.0 || ^24.0.0` (conforme `engines` em [`package.json`](package.json)).
- **npm** (incluído com o Node.js).

### Passos
1. No diretório do frontend (`ProjetoFamify/`), instale as dependências:
   ```bash
   npm install
   ```
2. Inicie o servidor de desenvolvimento:
   ```bash
   npm start
   ```
   (equivalente a `ng serve`)
3. Acesse a aplicação no navegador (por padrão): `http://localhost:4200/#/inicio` ou em `http://enreliuk.github.io/Famify/#/inicio`
   - O roteamento usa **hash** (`useHash: true`), então as rotas ficam no formato `/#/rota`.

### Outros comandos úteis
- **Build:** `npm run build`
- **Build em modo watch:** `npm run watch`
- **Testes:** `npm test` (executa `ng test --watch=false`)

## O que observar

- **Layout persistente:** [`layout.component.html`](src/app/layout/layout.component.html) mantém cabeçalho, conteúdo e rodapé; o `<router-outlet>` troca apenas a página ativa.
- **Navegação principal:** links para **Como funciona** (âncora na página inicial), **Cadastrar família** (`/cadastrar-familia`) e **Encontrar família** (`/match`). O item **Gerenciar (Demo)** (`/admin`) aparece apenas quando a conta administrativa está autenticada.
- **Cabeçalho e sessão:** exibe o nome do sistema (**Famify**) e, quando não há sessão, o botão **Conectar Steam** (leva a `/login`). Com usuário logado, mostra avatar/iniciais, nome e opção **Sair**; em `/login` o topo é ocultado.
- **Autenticação local:** a tela [`/login`](src/app/pages/auth/auth.ts) permite **entrar**, **criar conta** e **entrar com Steam** (simulado). A sessão ativa é persistida no navegador.
- **Persistência local:** os dados são mantidos em `localStorage` pelos serviços Angular; **não há API nem banco externo** nesta etapa.
- **Proteção de rota:** `/admin` é protegida por [`admin.guard.ts`](src/app/admin.guard.ts); usuários não administradores são redirecionados para `/inicio`.
- **Tema/recursos locais:** a interface utiliza estilos e ícones configurados no projeto (Angular Material/tema local), sem dependência obrigatória de fontes externas para funcionamento básico.

## Conta administrativa

Use as credenciais abaixo **somente para exploração local/demonstração**:

- **E-mail:** `adm@famify.com.br`
- **Senha:** `123123`

Como explorar:
1. Acesse `/#/login`.
2. Faça login com as credenciais acima.
3. Após autenticar, o menu exibirá **Gerenciar (Demo)**; acesse `/#/admin`.
4. A conta administrativa é criada/atualizada pelo [`AuthService`](src/app/services/auth.ts) no fluxo de login. Tentativas de acesso direto a `/#/admin` sem sessão administrativa redirecionam para `/#/inicio`.

## Serviços e persistência local

A aplicação usa serviços (`providedIn: 'root'`) com leitura/escrita em `localStorage` e, na maioria dos casos, estado reativo via `BehaviorSubject`/`Observable`:

| Serviço | Arquivo | Chave(s) no `localStorage` | Responsabilidade principal |
|---|---|---|---|
| `UsuarioService` | [`usuario.service.ts`](src/app/services/usuario.service.ts) | `famify_usuarios` | CRUD de usuários (`UsuarioFamify`), buscas por id/e-mail, emissão de `usuarios$` |
| `AuthService` | [`auth.ts`](src/app/services/auth.ts) | `famify_sessao_ativa` (+ uso de usuários) | Cadastro, login, login simulado Steam, logout, sessão atual (`usuarioAtual$`) e verificação de admin |
| `FamiliaService` | [`familia.service.ts`](src/app/services/familia.service.ts) | `famify_familias` | CRUD de famílias (`FamiliaSteam`), dados iniciais, validação de limite (`regras-negocio`), `familias$` |
| `JogoService` | [`jogo.service.ts`](src/app/services/jogo.service.ts) | `famify_jogos` | CRUD de jogos (`Jogo`), catálogo inicial, `jogos$` |
| `GeneroService` | [`genero.service.ts`](src/app/services/genero.service.ts) | `famify_generos` | CRUD de gêneros (lista de strings), gêneros iniciais |
| `SolicitacaoService` | [`solicitacao.service.ts`](src/app/services/solicitacao.service.ts) | `famify_solicitacoes` | Criação/cancelamento/atualização de solicitações, aprovação/rejeição, integração com famílias e regras |

Regras de negócio: [`regras-negocio.ts`](src/app/services/regras-negocio.ts) (`validarLimiteFamilia`, `podeSolicitarEntrada`, `calcularPorcentagemOcupacao`).

> Dica para exploração: limpe as chaves `famify_*` no `localStorage` do navegador para restaurar o estado inicial semeado pelos serviços.

## Área administrativa

Rota: `/#/admin` (protegida por [`admin.guard.ts`](src/app/admin.guard.ts)). Implementação: [`admin.component.ts`](src/app/pages/admin/admin.component.ts).

Funcionalidades disponíveis para exploração (CRUD local e gestão):
- **Usuários:** listar, criar, editar e excluir usuários (campos como nome, e-mail, senha, Steam ID, jogos importados/desejados).
- **Famílias:** listar, criar, editar e excluir famílias (nome, descrição, limites/membros, gêneros, etc.), com validações de consistência/limite.
- **Jogos:** listar, criar, editar e excluir jogos do catálogo.
- **Gêneros:** cadastrar e remover gêneros (o gênero "Todos" não deve ser removido).
- **Solicitações:** visualizar solicitações e alterar status (**aprovar/rejeitar**) ou excluir; a aprovação atualiza membros/vagas da família conforme regras.

Mensagens de sucesso/erro e recarregamento dos dados locais ajudam a validar o comportamento de cada operação.

## Dashboard e fluxo principal

### Início (`/#/inicio`) — [`inicio.component.ts`](src/app/pages/inicio/inicio.component.ts)
- Exibe **métricas** calculadas a partir dos dados locais (ex.: famílias ativas, jogos disponíveis, usuários, solicitações locais).
- Lista **jogos mais procurados** do catálogo.
- Permite buscar/filtrar e navegar para **Encontrar família** (`/match`), inclusive com termo de busca.

### Cadastrar família (`/#/cadastrar-familia`) — [`cadastrar-familia.component.ts`](src/app/pages/cadastrar-familia/cadastrar-familia.component.ts)
- Permite cadastrar no Famify uma família Steam da qual o usuário já participa, informando dados como nome, descrição, membros atuais, limite de membros, total de jogos e gêneros.
- Requer conta autenticada para concluir o cadastro; caso não haja sessão, a tela orienta o acesso via `/login`.
- Ao salvar, utiliza `FamiliaService.criar` (com validações de limite/regras) e a família passa a ficar disponível para descoberta em **Encontrar família** quando houver vagas.

### Encontrar família (`/#/match`) — [`match.component.ts`](src/app/pages/match/match.component.ts)
- Lista famílias com **vagas disponíveis** e aplica filtros por **gênero** e **texto** (nome, descrição, gêneros, jogos em destaque).
- Mostra informações como ocupação, membros, total de jogos e destaques.
- **Solicitar/Cancelar entrada:** requer usuário autenticado; cria ou cancela solicitação pendente conforme o estado. Validações de negócio (vagas, limite, duplicidade pendente) são aplicadas pelo serviço/regras.

### Acesso (`/#/login`) — [`auth.ts`](src/app/pages/auth/auth.ts)
- Alterna entre **entrar** e **criar conta**.
- **Login:** valida credenciais contra usuários salvos (ou fluxo especial do admin).
- **Cadastro:** cria usuário local e inicia sessão, redirecionando para `/match`.
- **Entrar com Steam:** fluxo simulado que cria/usa um usuário de demonstração e inicia sessão.

## Recursos simulados e testes

### Recursos simulados / dados locais
- **Sem backend:** todas as operações são locais (`localStorage`).
- **Dados iniciais (seed):** `FamiliaService`, `JogoService` e `GeneroService` populam valores padrão quando não há dados salvos.
- **Login Steam simulado:** `AuthService.loginComSteam()` autentica um usuário de demonstração local.
- **Aprovação de solicitação:** ao aprovar, o sistema atualiza a contagem de membros da família e recalcula vagas conforme as regras implementadas.

### Testes
- Arquivos de teste presentes: [`auth.spec.ts`](src/app/services/auth.spec.ts) e [`regras-negocio.spec.ts`](src/app/services/regras-negocio.spec.ts).
- Executar:
  ```bash
  npm test
  ```
- O script está configurado como `ng test --watch=false` em [`package.json`](package.json). Caso o ambiente exija configuração adicional do runner, verifique as dependências e a configuração do Angular no projeto antes da execução.
