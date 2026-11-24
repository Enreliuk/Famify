import {
  MatChip,
  MatChipAvatar,
  MatChipSet,
  MatChipsModule
} from "./chunk-V2CYPURQ.js";
import {
  MatCard,
  MatCardContent,
  MatCardModule,
  MatFormField,
  MatFormFieldModule,
  MatInput,
  MatInputModule,
  MatLabel,
  MatPrefix
} from "./chunk-47P3QVWC.js";
import {
  MatButton,
  MatButtonModule,
  MatIcon,
  MatIconButton,
  MatIconModule
} from "./chunk-Q2D5DFCU.js";
import {
  JogoService
} from "./chunk-4DMVE4D3.js";
import {
  SolicitacaoService
} from "./chunk-75QV7JOJ.js";
import {
  FamiliaService
} from "./chunk-UMLRIWJD.js";
import {
  CommonModule,
  Component,
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForOf,
  NgForm,
  NgIf,
  NgModel,
  NgModule,
  Router,
  RouterModule,
  UsuarioService,
  setClassMetadata,
  ɵNgNoValidate,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-2SBXNMGV.js";

// src/app/pages/inicio/inicio.component.ts
function InicioComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.mensagemErro);
  }
}
function InicioComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33);
    \u0275\u0275text(1, "Calculando indicadores locais...");
    \u0275\u0275elementEnd();
  }
}
function InicioComponent_mat_card_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-card", 34)(1, "mat-card-content")(2, "span", 35);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "strong", 36);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const metrica_r2 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(metrica_r2.titulo);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(metrica_r2.valor);
  }
}
function InicioComponent_mat_card_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-card", 37)(1, "div", 38);
    \u0275\u0275element(2, "img", 39);
    \u0275\u0275elementStart(3, "mat-chip", 40)(4, "mat-icon", 41);
    \u0275\u0275text(5, "trending_up");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "mat-card-content", 42)(8, "div")(9, "h3");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p")(12, "mat-icon");
    \u0275\u0275text(13, "search");
    \u0275\u0275elementEnd();
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "button", 43);
    \u0275\u0275listener("click", function InicioComponent_mat_card_35_Template_button_click_15_listener() {
      const jogo_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.filtrarPorJogo(jogo_r4.titulo));
    });
    \u0275\u0275elementStart(16, "mat-icon");
    \u0275\u0275text(17, "arrow_outward");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const jogo_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("src", jogo_r4.imagemUrl, \u0275\u0275sanitizeUrl)("alt", "Capa de " + jogo_r4.titulo);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", jogo_r4.crescimento, " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(jogo_r4.titulo);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(jogo_r4.buscasSemana);
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", "Buscar fam\xEDlias para " + jogo_r4.titulo);
  }
}
var InicioComponent = class _InicioComponent {
  router;
  familiaService;
  jogoService;
  usuarioService;
  solicitacaoService;
  termoBusca = "";
  carregando = true;
  mensagemErro = "";
  metricas = [];
  jogosMaisProcurados = [];
  constructor(router, familiaService, jogoService, usuarioService, solicitacaoService) {
    this.router = router;
    this.familiaService = familiaService;
    this.jogoService = jogoService;
    this.usuarioService = usuarioService;
    this.solicitacaoService = solicitacaoService;
  }
  ngOnInit() {
    window.setTimeout(() => {
      try {
        this.jogosMaisProcurados = this.jogoService.listar();
        this.atualizarMetricas();
        this.familiaService.familias$.subscribe(() => this.atualizarMetricas());
        this.jogoService.jogos$.subscribe((jogos) => {
          this.jogosMaisProcurados = jogos;
          this.atualizarMetricas();
        });
        this.usuarioService.usuarios$.subscribe(() => this.atualizarMetricas());
        this.solicitacaoService.solicitacoes$.subscribe(() => this.atualizarMetricas());
      } catch (erro) {
        this.mensagemErro = erro instanceof Error ? erro.message : "N\xE3o foi poss\xEDvel carregar o dashboard.";
      } finally {
        this.carregando = false;
      }
    }, 200);
  }
  atualizarMetricas() {
    const familias = this.familiaService.listar();
    const jogos = this.jogoService.listar();
    const usuarios = this.usuarioService.listar();
    const solicitacoes = this.solicitacaoService.listar();
    this.metricas = [
      { titulo: "Fam\xEDlias ativas", valor: familias.filter((familia) => familia.membrosAtuais > 0).length.toLocaleString("pt-BR") },
      { titulo: "Jogos dispon\xEDveis", valor: jogos.length.toLocaleString("pt-BR") },
      { titulo: "Usu\xE1rios", valor: usuarios.length.toLocaleString("pt-BR") },
      { titulo: "Solicita\xE7\xF5es locais", valor: solicitacoes.length.toLocaleString("pt-BR") }
    ];
  }
  buscarFamilia() {
    this.router.navigate(["/match"], {
      queryParams: this.termoBusca.trim() ? { q: this.termoBusca.trim() } : {}
    });
  }
  filtrarPorJogo(nomeJogo) {
    this.termoBusca = nomeJogo;
    this.buscarFamilia();
  }
  static \u0275fac = function InicioComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InicioComponent)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(FamiliaService), \u0275\u0275directiveInject(JogoService), \u0275\u0275directiveInject(UsuarioService), \u0275\u0275directiveInject(SolicitacaoService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InicioComponent, selectors: [["app-inicio"]], decls: 88, vars: 5, consts: [[1, "famify-home"], ["class", "alerta-erro", "role", "alert", 4, "ngIf"], ["class", "carregando", 4, "ngIf"], [1, "hero-section"], [1, "hero-glow", "hero-glow-um"], [1, "hero-glow", "hero-glow-dois"], [1, "hero-content"], [1, "subtitle"], [1, "search-bar", 3, "ngSubmit"], ["appearance", "outline", 1, "search-field"], ["matPrefix", ""], ["matInput", "", "type", "search", "name", "termoBusca", "placeholder", "Ex.: Elden Ring, RPG, Pixel Squad", 3, "ngModelChange", "ngModel"], ["mat-flat-button", "", "color", "primary", "type", "submit", 1, "search-submit"], ["aria-label", "Famify em n\xFAmeros", 1, "metrics-grid"], ["class", "metric-card", "appearance", "outlined", 4, "ngFor", "ngForOf"], ["aria-labelledby", "trending-title", 1, "trending-section"], [1, "section-header"], ["id", "trending-title"], ["aria-label", "Per\xEDodo"], [1, "games-grid"], ["class", "game-card", "appearance", "outlined", 4, "ngFor", "ngForOf"], ["id", "como-funciona", "aria-labelledby", "como-title", 1, "info-section"], ["id", "como-title"], [1, "steps-grid"], ["appearance", "outlined", 1, "step-card"], [1, "step-icon"], [1, "step-number"], ["id", "regras-steam", "aria-labelledby", "rules-title", 1, "rules-banner"], [1, "rules-icon"], [1, "section-eyebrow"], ["id", "rules-title"], ["aria-hidden", "true", 1, "rules-arrow"], ["role", "alert", 1, "alerta-erro"], [1, "carregando"], ["appearance", "outlined", 1, "metric-card"], [1, "metric-label"], [1, "metric-value"], ["appearance", "outlined", 1, "game-card"], [1, "game-cover"], [3, "src", "alt"], [1, "growth-badge"], ["matChipAvatar", ""], [1, "game-info"], ["mat-icon-button", "", "color", "primary", "type", "button", 3, "click"]], template: function InicioComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275template(1, InicioComponent_div_1_Template, 2, 1, "div", 1)(2, InicioComponent_div_2_Template, 2, 0, "div", 2);
      \u0275\u0275elementStart(3, "main", 3);
      \u0275\u0275element(4, "div", 4)(5, "div", 5);
      \u0275\u0275elementStart(6, "div", 6)(7, "h1")(8, "span");
      \u0275\u0275text(9, "Famify");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "p", 7);
      \u0275\u0275text(11, " Encontre uma fam\xEDlia Steam com os mesmos interesses e descubra novos jogos para jogar \u2014 tudo em um s\xF3 lugar. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "form", 8);
      \u0275\u0275listener("ngSubmit", function InicioComponent_Template_form_ngSubmit_12_listener() {
        return ctx.buscarFamilia();
      });
      \u0275\u0275elementStart(13, "mat-form-field", 9)(14, "mat-label");
      \u0275\u0275text(15, "Busque por jogo ou fam\xEDlia");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "mat-icon", 10);
      \u0275\u0275text(17, "search");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "input", 11);
      \u0275\u0275twoWayListener("ngModelChange", function InicioComponent_Template_input_ngModelChange_18_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.termoBusca, $event) || (ctx.termoBusca = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(19, "button", 12)(20, "span");
      \u0275\u0275text(21, "Encontrar fam\xEDlia");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "mat-icon");
      \u0275\u0275text(23, "arrow_forward");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(24, "div", 13);
      \u0275\u0275template(25, InicioComponent_mat_card_25_Template, 6, 2, "mat-card", 14);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(26, "section", 15)(27, "div", 16)(28, "div")(29, "h2", 17);
      \u0275\u0275text(30, "Em alta na Steam");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(31, "mat-chip-set", 18)(32, "mat-chip");
      \u0275\u0275text(33, "\xDAltimos 7 dias");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(34, "div", 19);
      \u0275\u0275template(35, InicioComponent_mat_card_35_Template, 18, 6, "mat-card", 20);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(36, "section", 21)(37, "div", 16)(38, "div")(39, "h2", 22);
      \u0275\u0275text(40, "Como funciona");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(41, "div", 23)(42, "mat-card", 24)(43, "mat-card-content")(44, "span", 25)(45, "mat-icon");
      \u0275\u0275text(46, "person_search");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(47, "span", 26);
      \u0275\u0275text(48, "01");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(49, "h3");
      \u0275\u0275text(50, "Encontre seu grupo");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(51, "p");
      \u0275\u0275text(52, "Explore fam\xEDlias e filtre por jogos e g\xEAneros que combinam com voc\xEA.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(53, "mat-card", 24)(54, "mat-card-content")(55, "span", 25)(56, "mat-icon");
      \u0275\u0275text(57, "send");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(58, "span", 26);
      \u0275\u0275text(59, "02");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(60, "h3");
      \u0275\u0275text(61, "Envie uma solicita\xE7\xE3o");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(62, "p");
      \u0275\u0275text(63, "Conhe\xE7a os grupos dispon\xEDveis e pe\xE7a para fazer parte da comunidade.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(64, "mat-card", 24)(65, "mat-card-content")(66, "span", 25)(67, "mat-icon");
      \u0275\u0275text(68, "sports_esports");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(69, "span", 26);
      \u0275\u0275text(70, "03");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(71, "h3");
      \u0275\u0275text(72, "Jogue em fam\xEDlia");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(73, "p");
      \u0275\u0275text(74, "Conecte-se com pessoas novas e aproveite mais momentos de jogo.");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(75, "section", 27)(76, "span", 28)(77, "mat-icon");
      \u0275\u0275text(78, "verified_user");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(79, "div")(80, "span", 29);
      \u0275\u0275text(81, "Jogar com tranquilidade");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(82, "h2", 30);
      \u0275\u0275text(83, "Feito para respeitar as regras da Steam");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(84, "p");
      \u0275\u0275text(85, " Fam\xEDlias Steam t\xEAm limite de at\xE9 6 membros e cada conta pode participar de uma fam\xEDlia por vez. Confira sempre as regras oficiais antes de entrar. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(86, "mat-icon", 31);
      \u0275\u0275text(87, "arrow_downward");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.mensagemErro);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.carregando);
      \u0275\u0275advance(16);
      \u0275\u0275twoWayProperty("ngModel", ctx.termoBusca);
      \u0275\u0275advance(7);
      \u0275\u0275property("ngForOf", ctx.metricas);
      \u0275\u0275advance(10);
      \u0275\u0275property("ngForOf", ctx.jogosMaisProcurados);
    }
  }, dependencies: [
    CommonModule,
    NgForOf,
    NgIf,
    FormsModule,
    \u0275NgNoValidate,
    DefaultValueAccessor,
    NgControlStatus,
    NgControlStatusGroup,
    NgModel,
    NgForm,
    RouterModule,
    MatButtonModule,
    MatButton,
    MatIconButton,
    MatCardModule,
    MatCard,
    MatCardContent,
    MatFormFieldModule,
    MatFormField,
    MatLabel,
    MatPrefix,
    MatIconModule,
    MatIcon,
    MatInputModule,
    MatInput,
    MatChipsModule,
    MatChip,
    MatChipAvatar,
    MatChipSet
  ], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.famify-home[_ngcontent-%COMP%] {\n  padding-bottom: 5rem;\n}\n.hero-section[_ngcontent-%COMP%] {\n  position: relative;\n  isolation: isolate;\n  overflow: hidden;\n  padding: clamp(4rem, 8vw, 7.5rem) 5% 3.5rem;\n  background:\n    radial-gradient(\n      ellipse at 50% 0%,\n      rgba(233, 113, 199, 0.16),\n      transparent 52%),\n    linear-gradient(\n      180deg,\n      #1d1824 0%,\n      #17131d 100%);\n  text-align: center;\n}\n.hero-content[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  max-width: 1120px;\n  margin: 0 auto;\n}\n.hero-content[_ngcontent-%COMP%]    > mat-chip-set[_ngcontent-%COMP%]   mat-chip[_ngcontent-%COMP%] {\n  background: #35243d;\n  color: #f3a5dc;\n  font-weight: 650;\n}\n.hero-content[_ngcontent-%COMP%]    > mat-chip-set[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: var(--famify-magenta);\n}\n.hero-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin-bottom: 1.15rem;\n  font-size: clamp(2.8rem, 7vw, 5.5rem);\n  font-weight: 800;\n  line-height: 1.15;\n  letter-spacing: -0.025em;\n  overflow: visible;\n}\n.hero-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding-bottom: 0.08em;\n  color: var(--famify-magenta);\n  background:\n    linear-gradient(\n      95deg,\n      #f079c8,\n      #ad97ff);\n  background-clip: text;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n.subtitle[_ngcontent-%COMP%] {\n  max-width: 650px;\n  margin: 0 auto 2rem;\n  color: var(--famify-muted);\n  font-size: clamp(1rem, 2vw, 1.15rem);\n  line-height: 1.7;\n}\n.search-bar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.8rem;\n  max-width: 760px;\n  margin: 0 auto 3.5rem;\n  padding: 0.55rem;\n  border: 1px solid rgba(173, 151, 255, 0.2);\n  border-radius: 20px;\n  background: var(--famify-surface-raised);\n  box-shadow: 0 18px 50px rgba(0, 0, 0, 0.28);\n}\n.search-field[_ngcontent-%COMP%] {\n  flex: 1;\n  --mdc-outlined-text-field-container-shape: 16px;\n  --mdc-filled-text-field-container-shape: 16px;\n  --mat-form-field-subscript-text-size: 0px;\n}\n  .search-field .mat-mdc-text-field-wrapper {\n  border-radius: 16px !important;\n}\n  .search-field .mdc-notched-outline__leading {\n  border-radius: 16px 0 0 16px !important;\n  border-right: none !important;\n}\n  .search-field .mdc-notched-outline__trailing {\n  border-radius: 0 16px 16px 0 !important;\n  border-left: none !important;\n}\n  .search-field .mat-mdc-form-field-subscript-wrapper {\n  display: none !important;\n}\n.search-submit[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  height: 56px;\n  min-height: 56px;\n  flex-shrink: 0;\n  padding: 0 1.35rem;\n  border-radius: 20px;\n  box-shadow: none;\n  line-height: 1;\n}\n.search-submit[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  margin-left: 0.35rem;\n  width: 20px;\n  height: 20px;\n  font-size: 20px;\n}\n.hero-glow[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 0;\n  width: 280px;\n  height: 280px;\n  border-radius: 50%;\n  filter: blur(80px);\n  opacity: 0.14;\n  pointer-events: none;\n}\n.hero-glow-um[_ngcontent-%COMP%] {\n  top: 18%;\n  left: -9rem;\n  background: var(--famify-magenta);\n}\n.hero-glow-dois[_ngcontent-%COMP%] {\n  top: 30%;\n  right: -9rem;\n  background: var(--famify-violet);\n}\n.metrics-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  gap: 1rem;\n  text-align: left;\n}\n.metric-card[_ngcontent-%COMP%], \n.game-card[_ngcontent-%COMP%], \n.step-card[_ngcontent-%COMP%] {\n  border-color: var(--famify-border);\n  border-radius: 18px;\n  background: rgba(37, 32, 45, 0.96);\n}\n.metric-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.45rem;\n  padding: 1.2rem;\n}\n.metric-label[_ngcontent-%COMP%] {\n  color: var(--famify-muted);\n  font-size: 0.82rem;\n  font-weight: 550;\n}\n.metric-value[_ngcontent-%COMP%] {\n  color: var(--famify-magenta);\n  font-size: clamp(1.45rem, 3vw, 2rem);\n  font-weight: 800;\n  letter-spacing: -0.05em;\n}\n.trending-section[_ngcontent-%COMP%], \n.info-section[_ngcontent-%COMP%] {\n  width: min(1200px, 90%);\n  margin: 4.5rem auto 0;\n}\n.section-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-end;\n  gap: 1rem;\n  margin-bottom: 1.5rem;\n}\n.section-eyebrow[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 0.35rem;\n  color: #e48acb;\n  font-size: 0.75rem;\n  font-weight: 750;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n}\n.section-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \n.rules-banner[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: clamp(1.55rem, 3vw, 2rem);\n  font-weight: 780;\n  letter-spacing: -0.045em;\n}\n.section-header[_ngcontent-%COMP%]   mat-chip[_ngcontent-%COMP%] {\n  background: #34283f;\n  color: #d3b9ff;\n  font-size: 0.78rem;\n  font-weight: 650;\n}\n.games-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 1.1rem;\n}\n.game-card[_ngcontent-%COMP%] {\n  overflow: hidden;\n  transition: transform 180ms ease, box-shadow 180ms ease;\n}\n.game-card[_ngcontent-%COMP%]:hover, \n.step-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 14px 32px rgba(0, 0, 0, 0.28);\n}\n.game-cover[_ngcontent-%COMP%] {\n  position: relative;\n  height: 170px;\n  overflow: hidden;\n  background: #17131d;\n}\n.game-cover[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transition: transform 250ms ease;\n}\n.game-card[_ngcontent-%COMP%]:hover   .game-cover[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  transform: scale(1.04);\n}\n.growth-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0.75rem;\n  right: 0.75rem;\n  background: rgba(37, 32, 45, 0.96);\n  color: #f0a3dc;\n  font-size: 0.76rem;\n  font-weight: 750;\n}\n.growth-badge[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: var(--famify-magenta);\n}\n.game-info[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1rem 1.1rem;\n}\n.game-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 750;\n}\n.game-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.25rem;\n  margin-top: 0.4rem;\n  color: var(--famify-muted);\n  font-size: 0.78rem;\n}\n.game-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  font-size: 16px;\n}\n.steps-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 1rem;\n}\n.step-card[_ngcontent-%COMP%] {\n  transition: transform 180ms ease, box-shadow 180ms ease;\n}\n.step-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%] {\n  position: relative;\n  min-height: 200px;\n  padding: 1.35rem;\n}\n.step-icon[_ngcontent-%COMP%], \n.rules-icon[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  display: grid;\n  place-items: center;\n  margin-bottom: 1.2rem;\n  border-radius: 15px;\n  background: #35243d;\n  color: #e9a1d6;\n}\n.step-number[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 1.4rem;\n  right: 1.4rem;\n  color: #8d7e98;\n  font-size: 0.8rem;\n  font-weight: 750;\n}\n.step-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-bottom: 0.55rem;\n  font-size: 1rem;\n}\n.step-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.rules-banner[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--famify-muted);\n  font-size: 0.88rem;\n  line-height: 1.65;\n}\n.rules-banner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1.3rem;\n  width: min(1200px, 90%);\n  margin: 3rem auto 0;\n  padding: 1.65rem;\n  border: 1px solid #46344f;\n  border-radius: 22px;\n  background:\n    linear-gradient(\n      110deg,\n      #271d30,\n      #211d30);\n}\n.rules-icon[_ngcontent-%COMP%] {\n  width: 58px;\n  height: 58px;\n  flex-shrink: 0;\n  margin: 0;\n  color: #d5baff;\n  background: #3a2b47;\n}\n.rules-banner[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin-bottom: 0.4rem;\n  font-size: 1.25rem;\n}\n.rules-arrow[_ngcontent-%COMP%] {\n  margin-left: auto;\n  color: var(--famify-violet);\n}\n@media (max-width: 760px) {\n  .metrics-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .games-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .steps-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .step-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%] {\n    min-height: 0;\n  }\n}\n@media (max-width: 540px) {\n  .hero-section[_ngcontent-%COMP%] {\n    padding: 3rem 1rem 2rem;\n  }\n  .hero-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: clamp(2.55rem, 12vw, 3.6rem);\n  }\n  .search-bar[_ngcontent-%COMP%] {\n    flex-direction: column;\n    padding: 0.8rem;\n    border-radius: 16px;\n  }\n  .search-field[_ngcontent-%COMP%], \n   .search-submit[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .search-submit[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n  .metrics-grid[_ngcontent-%COMP%] {\n    gap: 0.65rem;\n  }\n  .metric-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%] {\n    padding: 0.9rem;\n  }\n  .metric-label[_ngcontent-%COMP%] {\n    min-height: 2rem;\n    font-size: 0.74rem;\n  }\n  .trending-section[_ngcontent-%COMP%], \n   .info-section[_ngcontent-%COMP%], \n   .rules-banner[_ngcontent-%COMP%] {\n    width: calc(100% - 2rem);\n    margin-top: 3rem;\n  }\n  .games-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .game-cover[_ngcontent-%COMP%] {\n    height: 190px;\n  }\n  .rules-banner[_ngcontent-%COMP%] {\n    align-items: flex-start;\n    padding: 1.2rem;\n  }\n  .rules-arrow[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=inicio.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InicioComponent, [{
    type: Component,
    args: [{ selector: "app-inicio", imports: [
      CommonModule,
      FormsModule,
      RouterModule,
      MatButtonModule,
      MatCardModule,
      MatFormFieldModule,
      MatIconModule,
      MatInputModule,
      MatChipsModule
    ], template: `<div class="famify-home">
  <div class="alerta-erro" role="alert" *ngIf="mensagemErro">{{ mensagemErro }}</div>
  <div class="carregando" *ngIf="carregando">Calculando indicadores locais...</div>
  <main class="hero-section">
    <div class="hero-glow hero-glow-um"></div>
    <div class="hero-glow hero-glow-dois"></div>

    <div class="hero-content">

      <h1><span>Famify</span></h1>
      <p class="subtitle">
        Encontre uma fam\xEDlia Steam com os mesmos interesses e descubra novos jogos
        para jogar \u2014 tudo em um s\xF3 lugar.
      </p>

      <form class="search-bar" (ngSubmit)="buscarFamilia()">
        <mat-form-field appearance="outline" class="search-field">
          <mat-label>Busque por jogo ou fam\xEDlia</mat-label>
          <mat-icon matPrefix>search</mat-icon>
          <input
            matInput
            type="search"
            [(ngModel)]="termoBusca"
            name="termoBusca"
            placeholder="Ex.: Elden Ring, RPG, Pixel Squad"
          />
        </mat-form-field>
        <button mat-flat-button color="primary" type="submit" class="search-submit">
          <span>Encontrar fam\xEDlia</span>
          <mat-icon>arrow_forward</mat-icon>
        </button>
      </form>

      <div class="metrics-grid" aria-label="Famify em n\xFAmeros">
        <mat-card class="metric-card" appearance="outlined" *ngFor="let metrica of metricas">
          <mat-card-content>
            <span class="metric-label">{{ metrica.titulo }}</span>
            <strong class="metric-value">{{ metrica.valor }}</strong>
          </mat-card-content>
        </mat-card>
      </div>
    </div>
  </main>

  <section class="trending-section" aria-labelledby="trending-title">
    <div class="section-header">
      <div>
        <h2 id="trending-title">Em alta na Steam</h2>
      </div>
      <mat-chip-set aria-label="Per\xEDodo"><mat-chip>\xDAltimos 7 dias</mat-chip></mat-chip-set>
    </div>

    <div class="games-grid">
      <mat-card
        class="game-card"
        appearance="outlined"
        *ngFor="let jogo of jogosMaisProcurados"
      >
        <div class="game-cover">
          <img [src]="jogo.imagemUrl" [alt]="'Capa de ' + jogo.titulo" />
          <mat-chip class="growth-badge">
            <mat-icon matChipAvatar>trending_up</mat-icon>{{ jogo.crescimento }}
          </mat-chip>
        </div>
        <mat-card-content class="game-info">
          <div>
            <h3>{{ jogo.titulo }}</h3>
            <p><mat-icon>search</mat-icon>{{ jogo.buscasSemana }}</p>
          </div>
          <button
            mat-icon-button
            color="primary"
            type="button"
            [attr.aria-label]="'Buscar fam\xEDlias para ' + jogo.titulo"
            (click)="filtrarPorJogo(jogo.titulo)"
          >
            <mat-icon>arrow_outward</mat-icon>
          </button>
        </mat-card-content>
      </mat-card>
    </div>
  </section>

  <section id="como-funciona" class="info-section" aria-labelledby="como-title">
    <div class="section-header">
      <div>
        <h2 id="como-title">Como funciona</h2>
      </div>
    </div>
    <div class="steps-grid">
      <mat-card class="step-card" appearance="outlined">
        <mat-card-content>
          <span class="step-icon"><mat-icon>person_search</mat-icon></span>
          <span class="step-number">01</span>
          <h3>Encontre seu grupo</h3>
          <p>Explore fam\xEDlias e filtre por jogos e g\xEAneros que combinam com voc\xEA.</p>
        </mat-card-content>
      </mat-card>
      <mat-card class="step-card" appearance="outlined">
        <mat-card-content>
          <span class="step-icon"><mat-icon>send</mat-icon></span>
          <span class="step-number">02</span>
          <h3>Envie uma solicita\xE7\xE3o</h3>
          <p>Conhe\xE7a os grupos dispon\xEDveis e pe\xE7a para fazer parte da comunidade.</p>
        </mat-card-content>
      </mat-card>
      <mat-card class="step-card" appearance="outlined">
        <mat-card-content>
          <span class="step-icon"><mat-icon>sports_esports</mat-icon></span>
          <span class="step-number">03</span>
          <h3>Jogue em fam\xEDlia</h3>
          <p>Conecte-se com pessoas novas e aproveite mais momentos de jogo.</p>
        </mat-card-content>
      </mat-card>
    </div>
  </section>

  <section id="regras-steam" class="rules-banner" aria-labelledby="rules-title">
    <span class="rules-icon"><mat-icon>verified_user</mat-icon></span>
    <div>
      <span class="section-eyebrow">Jogar com tranquilidade</span>
      <h2 id="rules-title">Feito para respeitar as regras da Steam</h2>
      <p>
        Fam\xEDlias Steam t\xEAm limite de at\xE9 6 membros e cada conta pode participar
        de uma fam\xEDlia por vez. Confira sempre as regras oficiais antes de entrar.
      </p>
    </div>
    <mat-icon class="rules-arrow" aria-hidden="true">arrow_downward</mat-icon>
  </section>
</div>`, styles: ["/* src/app/pages/inicio/inicio.component.css */\n:host {\n  display: block;\n}\n.famify-home {\n  padding-bottom: 5rem;\n}\n.hero-section {\n  position: relative;\n  isolation: isolate;\n  overflow: hidden;\n  padding: clamp(4rem, 8vw, 7.5rem) 5% 3.5rem;\n  background:\n    radial-gradient(\n      ellipse at 50% 0%,\n      rgba(233, 113, 199, 0.16),\n      transparent 52%),\n    linear-gradient(\n      180deg,\n      #1d1824 0%,\n      #17131d 100%);\n  text-align: center;\n}\n.hero-content {\n  position: relative;\n  z-index: 1;\n  max-width: 1120px;\n  margin: 0 auto;\n}\n.hero-content > mat-chip-set mat-chip {\n  background: #35243d;\n  color: #f3a5dc;\n  font-weight: 650;\n}\n.hero-content > mat-chip-set mat-icon {\n  color: var(--famify-magenta);\n}\n.hero-content h1 {\n  margin-bottom: 1.15rem;\n  font-size: clamp(2.8rem, 7vw, 5.5rem);\n  font-weight: 800;\n  line-height: 1.15;\n  letter-spacing: -0.025em;\n  overflow: visible;\n}\n.hero-content h1 span {\n  display: inline-block;\n  padding-bottom: 0.08em;\n  color: var(--famify-magenta);\n  background:\n    linear-gradient(\n      95deg,\n      #f079c8,\n      #ad97ff);\n  background-clip: text;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n.subtitle {\n  max-width: 650px;\n  margin: 0 auto 2rem;\n  color: var(--famify-muted);\n  font-size: clamp(1rem, 2vw, 1.15rem);\n  line-height: 1.7;\n}\n.search-bar {\n  display: flex;\n  align-items: center;\n  gap: 0.8rem;\n  max-width: 760px;\n  margin: 0 auto 3.5rem;\n  padding: 0.55rem;\n  border: 1px solid rgba(173, 151, 255, 0.2);\n  border-radius: 20px;\n  background: var(--famify-surface-raised);\n  box-shadow: 0 18px 50px rgba(0, 0, 0, 0.28);\n}\n.search-field {\n  flex: 1;\n  --mdc-outlined-text-field-container-shape: 16px;\n  --mdc-filled-text-field-container-shape: 16px;\n  --mat-form-field-subscript-text-size: 0px;\n}\n::ng-deep .search-field .mat-mdc-text-field-wrapper {\n  border-radius: 16px !important;\n}\n::ng-deep .search-field .mdc-notched-outline__leading {\n  border-radius: 16px 0 0 16px !important;\n  border-right: none !important;\n}\n::ng-deep .search-field .mdc-notched-outline__trailing {\n  border-radius: 0 16px 16px 0 !important;\n  border-left: none !important;\n}\n::ng-deep .search-field .mat-mdc-form-field-subscript-wrapper {\n  display: none !important;\n}\n.search-submit {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  height: 56px;\n  min-height: 56px;\n  flex-shrink: 0;\n  padding: 0 1.35rem;\n  border-radius: 20px;\n  box-shadow: none;\n  line-height: 1;\n}\n.search-submit mat-icon {\n  margin-left: 0.35rem;\n  width: 20px;\n  height: 20px;\n  font-size: 20px;\n}\n.hero-glow {\n  position: absolute;\n  z-index: 0;\n  width: 280px;\n  height: 280px;\n  border-radius: 50%;\n  filter: blur(80px);\n  opacity: 0.14;\n  pointer-events: none;\n}\n.hero-glow-um {\n  top: 18%;\n  left: -9rem;\n  background: var(--famify-magenta);\n}\n.hero-glow-dois {\n  top: 30%;\n  right: -9rem;\n  background: var(--famify-violet);\n}\n.metrics-grid {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  gap: 1rem;\n  text-align: left;\n}\n.metric-card,\n.game-card,\n.step-card {\n  border-color: var(--famify-border);\n  border-radius: 18px;\n  background: rgba(37, 32, 45, 0.96);\n}\n.metric-card mat-card-content {\n  display: flex;\n  flex-direction: column;\n  gap: 0.45rem;\n  padding: 1.2rem;\n}\n.metric-label {\n  color: var(--famify-muted);\n  font-size: 0.82rem;\n  font-weight: 550;\n}\n.metric-value {\n  color: var(--famify-magenta);\n  font-size: clamp(1.45rem, 3vw, 2rem);\n  font-weight: 800;\n  letter-spacing: -0.05em;\n}\n.trending-section,\n.info-section {\n  width: min(1200px, 90%);\n  margin: 4.5rem auto 0;\n}\n.section-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-end;\n  gap: 1rem;\n  margin-bottom: 1.5rem;\n}\n.section-eyebrow {\n  display: block;\n  margin-bottom: 0.35rem;\n  color: #e48acb;\n  font-size: 0.75rem;\n  font-weight: 750;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n}\n.section-header h2,\n.rules-banner h2 {\n  font-size: clamp(1.55rem, 3vw, 2rem);\n  font-weight: 780;\n  letter-spacing: -0.045em;\n}\n.section-header mat-chip {\n  background: #34283f;\n  color: #d3b9ff;\n  font-size: 0.78rem;\n  font-weight: 650;\n}\n.games-grid {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 1.1rem;\n}\n.game-card {\n  overflow: hidden;\n  transition: transform 180ms ease, box-shadow 180ms ease;\n}\n.game-card:hover,\n.step-card:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 14px 32px rgba(0, 0, 0, 0.28);\n}\n.game-cover {\n  position: relative;\n  height: 170px;\n  overflow: hidden;\n  background: #17131d;\n}\n.game-cover img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transition: transform 250ms ease;\n}\n.game-card:hover .game-cover img {\n  transform: scale(1.04);\n}\n.growth-badge {\n  position: absolute;\n  top: 0.75rem;\n  right: 0.75rem;\n  background: rgba(37, 32, 45, 0.96);\n  color: #f0a3dc;\n  font-size: 0.76rem;\n  font-weight: 750;\n}\n.growth-badge mat-icon {\n  color: var(--famify-magenta);\n}\n.game-info {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1rem 1.1rem;\n}\n.game-info h3 {\n  font-size: 1rem;\n  font-weight: 750;\n}\n.game-info p {\n  display: flex;\n  align-items: center;\n  gap: 0.25rem;\n  margin-top: 0.4rem;\n  color: var(--famify-muted);\n  font-size: 0.78rem;\n}\n.game-info p mat-icon {\n  width: 16px;\n  height: 16px;\n  font-size: 16px;\n}\n.steps-grid {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 1rem;\n}\n.step-card {\n  transition: transform 180ms ease, box-shadow 180ms ease;\n}\n.step-card mat-card-content {\n  position: relative;\n  min-height: 200px;\n  padding: 1.35rem;\n}\n.step-icon,\n.rules-icon {\n  width: 48px;\n  height: 48px;\n  display: grid;\n  place-items: center;\n  margin-bottom: 1.2rem;\n  border-radius: 15px;\n  background: #35243d;\n  color: #e9a1d6;\n}\n.step-number {\n  position: absolute;\n  top: 1.4rem;\n  right: 1.4rem;\n  color: #8d7e98;\n  font-size: 0.8rem;\n  font-weight: 750;\n}\n.step-card h3 {\n  margin-bottom: 0.55rem;\n  font-size: 1rem;\n}\n.step-card p,\n.rules-banner p {\n  color: var(--famify-muted);\n  font-size: 0.88rem;\n  line-height: 1.65;\n}\n.rules-banner {\n  display: flex;\n  align-items: center;\n  gap: 1.3rem;\n  width: min(1200px, 90%);\n  margin: 3rem auto 0;\n  padding: 1.65rem;\n  border: 1px solid #46344f;\n  border-radius: 22px;\n  background:\n    linear-gradient(\n      110deg,\n      #271d30,\n      #211d30);\n}\n.rules-icon {\n  width: 58px;\n  height: 58px;\n  flex-shrink: 0;\n  margin: 0;\n  color: #d5baff;\n  background: #3a2b47;\n}\n.rules-banner h2 {\n  margin-bottom: 0.4rem;\n  font-size: 1.25rem;\n}\n.rules-arrow {\n  margin-left: auto;\n  color: var(--famify-violet);\n}\n@media (max-width: 760px) {\n  .metrics-grid {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .games-grid {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .steps-grid {\n    grid-template-columns: 1fr;\n  }\n  .step-card mat-card-content {\n    min-height: 0;\n  }\n}\n@media (max-width: 540px) {\n  .hero-section {\n    padding: 3rem 1rem 2rem;\n  }\n  .hero-content h1 {\n    font-size: clamp(2.55rem, 12vw, 3.6rem);\n  }\n  .search-bar {\n    flex-direction: column;\n    padding: 0.8rem;\n    border-radius: 16px;\n  }\n  .search-field,\n  .search-submit {\n    width: 100%;\n  }\n  .search-submit {\n    justify-content: center;\n  }\n  .metrics-grid {\n    gap: 0.65rem;\n  }\n  .metric-card mat-card-content {\n    padding: 0.9rem;\n  }\n  .metric-label {\n    min-height: 2rem;\n    font-size: 0.74rem;\n  }\n  .trending-section,\n  .info-section,\n  .rules-banner {\n    width: calc(100% - 2rem);\n    margin-top: 3rem;\n  }\n  .games-grid {\n    grid-template-columns: 1fr;\n  }\n  .game-cover {\n    height: 190px;\n  }\n  .rules-banner {\n    align-items: flex-start;\n    padding: 1.2rem;\n  }\n  .rules-arrow {\n    display: none;\n  }\n}\n/*# sourceMappingURL=inicio.component.css.map */\n"] }]
  }], () => [{ type: Router }, { type: FamiliaService }, { type: JogoService }, { type: UsuarioService }, { type: SolicitacaoService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InicioComponent, { className: "InicioComponent", filePath: "src/app/pages/inicio/inicio.component.ts", lineNumber: 37 });
})();

// src/app/pages/inicio/inicio.module.ts
var InicioModule = class _InicioModule {
  static \u0275fac = function InicioModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InicioModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _InicioModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
    CommonModule,
    FormsModule,
    InicioComponent,
    RouterModule.forChild([
      { path: "", component: InicioComponent }
    ])
  ] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InicioModule, [{
    type: NgModule,
    args: [{
      declarations: [],
      imports: [
        CommonModule,
        FormsModule,
        InicioComponent,
        RouterModule.forChild([
          { path: "", component: InicioComponent }
        ])
      ]
    }]
  }], null, null);
})();
export {
  InicioModule
};
//# sourceMappingURL=chunk-DCOTCHP2.js.map
