import {
  JogoService
} from "./chunk-4DMVE4D3.js";
import {
  SolicitacaoService
} from "./chunk-75QV7JOJ.js";
import {
  GeneroService
} from "./chunk-3CC45KK5.js";
import {
  FamiliaService
} from "./chunk-UMLRIWJD.js";
import {
  CommonModule,
  Component,
  DatePipe,
  DefaultValueAccessor,
  FormsModule,
  MaxValidator,
  MinValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NgForOf,
  NgForm,
  NgIf,
  NgModel,
  NgModule,
  NumberValueAccessor,
  RequiredValidator,
  RouterModule,
  UsuarioService,
  __spreadProps,
  __spreadValues,
  setClassMetadata,
  ɵNgNoValidate,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-2SBXNMGV.js";

// src/app/pages/admin/admin.component.ts
function AdminComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.mensagemErro);
  }
}
function AdminComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.mensagemSucesso);
  }
}
function AdminComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275text(1, "Carregando dados locais...");
    \u0275\u0275elementEnd();
  }
}
function AdminComponent_div_19_ng_container_1_article_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "article")(1, "div")(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 22)(7, "button", 6);
    \u0275\u0275listener("click", function AdminComponent_div_19_ng_container_1_article_12_Template_button_click_7_listener() {
      const usuario_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.editarUsuario(usuario_r4));
    });
    \u0275\u0275text(8, "Editar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 23);
    \u0275\u0275listener("click", function AdminComponent_div_19_ng_container_1_article_12_Template_button_click_9_listener() {
      const usuario_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.excluirUsuario(usuario_r4.id));
    });
    \u0275\u0275text(10, "Excluir");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const usuario_r4 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(usuario_r4.nome);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", usuario_r4.email, " \xB7 ", usuario_r4.jogosImportados, " jogos");
  }
}
function AdminComponent_div_19_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "h2");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "form", 13);
    \u0275\u0275listener("ngSubmit", function AdminComponent_div_19_ng_container_1_Template_form_ngSubmit_3_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.salvarUsuario());
    });
    \u0275\u0275elementStart(4, "input", 14);
    \u0275\u0275twoWayListener("ngModelChange", function AdminComponent_div_19_ng_container_1_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.usuarioForm.nome, $event) || (ctx_r0.usuarioForm.nome = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "input", 15);
    \u0275\u0275twoWayListener("ngModelChange", function AdminComponent_div_19_ng_container_1_Template_input_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.usuarioForm.email, $event) || (ctx_r0.usuarioForm.email = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "input", 16);
    \u0275\u0275twoWayListener("ngModelChange", function AdminComponent_div_19_ng_container_1_Template_input_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.usuarioForm.senha, $event) || (ctx_r0.usuarioForm.senha = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "input", 17);
    \u0275\u0275twoWayListener("ngModelChange", function AdminComponent_div_19_ng_container_1_Template_input_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.usuarioForm.steamId, $event) || (ctx_r0.usuarioForm.steamId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "input", 18);
    \u0275\u0275twoWayListener("ngModelChange", function AdminComponent_div_19_ng_container_1_Template_input_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.usuarioForm.jogosImportados, $event) || (ctx_r0.usuarioForm.jogosImportados = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 19);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 20);
    \u0275\u0275template(12, AdminComponent_div_19_ng_container_1_article_12_Template, 11, 3, "article", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.usuarioEditando ? "Editar usu\xE1rio" : "Novo usu\xE1rio");
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.usuarioForm.nome);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.usuarioForm.email);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.usuarioForm.senha);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.usuarioForm.steamId);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.usuarioForm.jogosImportados);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.usuarioEditando ? "Atualizar usu\xE1rio" : "Cadastrar usu\xE1rio");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r0.usuarios);
  }
}
function AdminComponent_div_19_ng_container_2_article_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "article")(1, "div")(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 22)(7, "button", 6);
    \u0275\u0275listener("click", function AdminComponent_div_19_ng_container_2_article_13_Template_button_click_7_listener() {
      const familia_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.editarFamilia(familia_r7));
    });
    \u0275\u0275text(8, "Editar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 23);
    \u0275\u0275listener("click", function AdminComponent_div_19_ng_container_2_article_13_Template_button_click_9_listener() {
      const familia_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.excluirFamilia(familia_r7.id));
    });
    \u0275\u0275text(10, "Excluir");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const familia_r7 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(familia_r7.nome);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3("", familia_r7.membrosAtuais, "/", familia_r7.limiteMembros, " membros \xB7 ", familia_r7.generos.join(", "));
  }
}
function AdminComponent_div_19_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "h2");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "form", 13);
    \u0275\u0275listener("ngSubmit", function AdminComponent_div_19_ng_container_2_Template_form_ngSubmit_3_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.salvarFamilia());
    });
    \u0275\u0275elementStart(4, "input", 24);
    \u0275\u0275twoWayListener("ngModelChange", function AdminComponent_div_19_ng_container_2_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.familiaForm.nome, $event) || (ctx_r0.familiaForm.nome = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "input", 25);
    \u0275\u0275twoWayListener("ngModelChange", function AdminComponent_div_19_ng_container_2_Template_input_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.familiaForm.descricao, $event) || (ctx_r0.familiaForm.descricao = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "input", 26);
    \u0275\u0275twoWayListener("ngModelChange", function AdminComponent_div_19_ng_container_2_Template_input_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.familiaForm.membrosAtuais, $event) || (ctx_r0.familiaForm.membrosAtuais = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "input", 27);
    \u0275\u0275twoWayListener("ngModelChange", function AdminComponent_div_19_ng_container_2_Template_input_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.familiaForm.limiteMembros, $event) || (ctx_r0.familiaForm.limiteMembros = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "input", 28);
    \u0275\u0275twoWayListener("ngModelChange", function AdminComponent_div_19_ng_container_2_Template_input_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.familiaForm.totalJogos, $event) || (ctx_r0.familiaForm.totalJogos = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "input", 29);
    \u0275\u0275twoWayListener("ngModelChange", function AdminComponent_div_19_ng_container_2_Template_input_ngModelChange_9_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.generosFamilia, $event) || (ctx_r0.generosFamilia = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 19);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 20);
    \u0275\u0275template(13, AdminComponent_div_19_ng_container_2_article_13_Template, 11, 4, "article", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.familiaEditando ? "Editar fam\xEDlia" : "Nova fam\xEDlia");
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.familiaForm.nome);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.familiaForm.descricao);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.familiaForm.membrosAtuais);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.familiaForm.limiteMembros);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.familiaForm.totalJogos);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.generosFamilia);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.familiaEditando ? "Atualizar fam\xEDlia" : "Cadastrar fam\xEDlia");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r0.familias);
  }
}
function AdminComponent_div_19_ng_container_3_article_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "article")(1, "div")(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 22)(7, "button", 6);
    \u0275\u0275listener("click", function AdminComponent_div_19_ng_container_3_article_11_Template_button_click_7_listener() {
      const jogo_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.editarJogo(jogo_r10));
    });
    \u0275\u0275text(8, "Editar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 23);
    \u0275\u0275listener("click", function AdminComponent_div_19_ng_container_3_article_11_Template_button_click_9_listener() {
      const jogo_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.excluirJogo(jogo_r10.id));
    });
    \u0275\u0275text(10, "Excluir");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const jogo_r10 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(jogo_r10.titulo);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(jogo_r10.buscasSemana || "Sem m\xE9tricas simuladas");
  }
}
function AdminComponent_div_19_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "h2");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "form", 13);
    \u0275\u0275listener("ngSubmit", function AdminComponent_div_19_ng_container_3_Template_form_ngSubmit_3_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.salvarJogo());
    });
    \u0275\u0275elementStart(4, "input", 30);
    \u0275\u0275twoWayListener("ngModelChange", function AdminComponent_div_19_ng_container_3_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.jogoForm.titulo, $event) || (ctx_r0.jogoForm.titulo = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "input", 31);
    \u0275\u0275twoWayListener("ngModelChange", function AdminComponent_div_19_ng_container_3_Template_input_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.jogoForm.imagemUrl, $event) || (ctx_r0.jogoForm.imagemUrl = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "input", 32);
    \u0275\u0275twoWayListener("ngModelChange", function AdminComponent_div_19_ng_container_3_Template_input_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.jogoForm.crescimento, $event) || (ctx_r0.jogoForm.crescimento = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "input", 33);
    \u0275\u0275twoWayListener("ngModelChange", function AdminComponent_div_19_ng_container_3_Template_input_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.jogoForm.buscasSemana, $event) || (ctx_r0.jogoForm.buscasSemana = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 19);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 20);
    \u0275\u0275template(11, AdminComponent_div_19_ng_container_3_article_11_Template, 11, 2, "article", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.jogoEditando ? "Editar jogo" : "Novo jogo");
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.jogoForm.titulo);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.jogoForm.imagemUrl);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.jogoForm.crescimento);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.jogoForm.buscasSemana);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.jogoEditando ? "Atualizar jogo" : "Cadastrar jogo");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r0.jogos);
  }
}
function AdminComponent_div_19_ng_container_4_article_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "article")(1, "div")(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 22)(5, "button", 35);
    \u0275\u0275listener("click", function AdminComponent_div_19_ng_container_4_article_8_Template_button_click_5_listener() {
      const genero_r13 = \u0275\u0275restoreView(_r12).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.excluirGenero(genero_r13));
    });
    \u0275\u0275text(6, "Excluir");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const genero_r13 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(genero_r13);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", genero_r13 === "Todos");
  }
}
function AdminComponent_div_19_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "h2");
    \u0275\u0275text(2, "G\xEAneros");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "form", 13);
    \u0275\u0275listener("ngSubmit", function AdminComponent_div_19_ng_container_4_Template_form_ngSubmit_3_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.salvarGenero());
    });
    \u0275\u0275elementStart(4, "input", 34);
    \u0275\u0275twoWayListener("ngModelChange", function AdminComponent_div_19_ng_container_4_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.generoForm, $event) || (ctx_r0.generoForm = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 19);
    \u0275\u0275text(6, "Cadastrar g\xEAnero");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 20);
    \u0275\u0275template(8, AdminComponent_div_19_ng_container_4_article_8_Template, 7, 2, "article", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.generoForm);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r0.generos);
  }
}
function AdminComponent_div_19_ng_container_5_article_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "article")(1, "div")(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 22)(8, "button", 36);
    \u0275\u0275listener("click", function AdminComponent_div_19_ng_container_5_article_4_Template_button_click_8_listener() {
      const solicitacao_r15 = \u0275\u0275restoreView(_r14).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.alterarSolicitacao(solicitacao_r15, "aprovada"));
    });
    \u0275\u0275text(9, "Aprovar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 36);
    \u0275\u0275listener("click", function AdminComponent_div_19_ng_container_5_article_4_Template_button_click_10_listener() {
      const solicitacao_r15 = \u0275\u0275restoreView(_r14).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.alterarSolicitacao(solicitacao_r15, "rejeitada"));
    });
    \u0275\u0275text(11, "Rejeitar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 23);
    \u0275\u0275listener("click", function AdminComponent_div_19_ng_container_5_article_4_Template_button_click_12_listener() {
      const solicitacao_r15 = \u0275\u0275restoreView(_r14).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.excluirSolicitacao(solicitacao_r15.id));
    });
    \u0275\u0275text(13, "Excluir");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const solicitacao_r15 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("Usu\xE1rio ", solicitacao_r15.usuarioId, " \xB7 Fam\xEDlia ", solicitacao_r15.familiaId);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", solicitacao_r15.status, " \xB7 ", \u0275\u0275pipeBind2(6, 6, solicitacao_r15.criadaEm, "short"));
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", solicitacao_r15.status !== "pendente");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", solicitacao_r15.status !== "pendente");
  }
}
function AdminComponent_div_19_ng_container_5_p_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1, "Nenhuma solicita\xE7\xE3o cadastrada.");
    \u0275\u0275elementEnd();
  }
}
function AdminComponent_div_19_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "h2");
    \u0275\u0275text(2, "Solicita\xE7\xF5es");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 20);
    \u0275\u0275template(4, AdminComponent_div_19_ng_container_5_article_4_Template, 14, 9, "article", 21)(5, AdminComponent_div_19_ng_container_5_p_5_Template, 2, 0, "p", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r0.solicitacoes);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.solicitacoes.length === 0);
  }
}
function AdminComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275template(1, AdminComponent_div_19_ng_container_1_Template, 13, 8, "ng-container", 12)(2, AdminComponent_div_19_ng_container_2_Template, 14, 9, "ng-container", 12)(3, AdminComponent_div_19_ng_container_3_Template, 12, 7, "ng-container", 12)(4, AdminComponent_div_19_ng_container_4_Template, 9, 2, "ng-container", 12)(5, AdminComponent_div_19_ng_container_5_Template, 6, 2, "ng-container", 12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.abaAtiva === "usuarios");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.abaAtiva === "familias");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.abaAtiva === "jogos");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.abaAtiva === "generos");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.abaAtiva === "solicitacoes");
  }
}
var AdminComponent = class _AdminComponent {
  usuarioService;
  familiaService;
  jogoService;
  generoService;
  solicitacaoService;
  abaAtiva = "usuarios";
  carregando = true;
  mensagemErro = "";
  mensagemSucesso = "";
  usuarios = [];
  usuarioEditando = null;
  usuarioForm = {
    nome: "",
    email: "",
    senha: "",
    steamId: "",
    jogosImportados: 0,
    jogosDesejados: ""
  };
  familias = [];
  familiaEditando = null;
  familiaForm = {
    nome: "",
    descricao: "",
    vagasDisponiveis: 1,
    membrosAtuais: 1,
    limiteMembros: 6,
    totalJogos: 0,
    generos: [],
    avataresMembros: [],
    jogosDestaque: []
  };
  generosFamilia = "";
  jogos = [];
  jogoEditando = null;
  jogoForm = { titulo: "", imagemUrl: "", crescimento: "", buscasSemana: "" };
  generos = [];
  generoForm = "";
  solicitacoes = [];
  constructor(usuarioService, familiaService, jogoService, generoService, solicitacaoService) {
    this.usuarioService = usuarioService;
    this.familiaService = familiaService;
    this.jogoService = jogoService;
    this.generoService = generoService;
    this.solicitacaoService = solicitacaoService;
  }
  ngOnInit() {
    window.setTimeout(() => {
      try {
        this.carregarDados();
      } catch (erro) {
        this.mensagemErro = erro instanceof Error ? erro.message : "N\xE3o foi poss\xEDvel carregar os dados locais.";
      } finally {
        this.carregando = false;
      }
    }, 250);
  }
  carregarDados() {
    this.usuarios = this.usuarioService.listar();
    this.familias = this.familiaService.listar();
    this.jogos = this.jogoService.listar();
    this.generos = this.generoService.listar();
    this.solicitacoes = this.solicitacaoService.listar();
  }
  selecionarAba(aba) {
    this.abaAtiva = aba;
    this.limparMensagens();
  }
  salvarUsuario() {
    try {
      if (!this.usuarioForm.nome.trim() || !this.usuarioForm.email.trim()) {
        throw new Error("Informe nome e e-mail do usu\xE1rio.");
      }
      if (this.usuarioEditando) {
        this.usuarioService.atualizar(__spreadValues(__spreadValues({}, this.usuarioEditando), this.usuarioForm));
      } else {
        if (this.usuarioService.buscarPorEmail(this.usuarioForm.email)) {
          throw new Error("J\xE1 existe um usu\xE1rio com este e-mail.");
        }
        this.usuarioService.criar(this.usuarioForm);
      }
      this.usuarioEditando = null;
      this.usuarioForm = { nome: "", email: "", senha: "", steamId: "", jogosImportados: 0, jogosDesejados: "" };
      this.finalizarAcao("Usu\xE1rio salvo com sucesso.");
    } catch (erro) {
      this.mensagemErro = erro instanceof Error ? erro.message : "N\xE3o foi poss\xEDvel salvar o usu\xE1rio.";
    }
  }
  editarUsuario(usuario) {
    this.usuarioEditando = usuario;
    this.usuarioForm = {
      nome: usuario.nome,
      email: usuario.email,
      senha: usuario.senha ?? "",
      steamId: usuario.steamId,
      jogosImportados: usuario.jogosImportados,
      jogosDesejados: usuario.jogosDesejados ?? ""
    };
  }
  excluirUsuario(id) {
    this.usuarioService.excluir(id);
    this.finalizarAcao("Usu\xE1rio exclu\xEDdo.");
  }
  salvarFamilia() {
    try {
      if (!this.familiaForm.nome.trim()) {
        throw new Error("Informe o nome da fam\xEDlia.");
      }
      const dados = __spreadProps(__spreadValues({}, this.familiaForm), {
        generos: this.generosFamilia.split(",").map((item) => item.trim()).filter(Boolean),
        vagasDisponiveis: this.familiaForm.limiteMembros - this.familiaForm.membrosAtuais
      });
      if (this.familiaEditando) {
        this.familiaService.atualizar(__spreadProps(__spreadValues({}, dados), { id: this.familiaEditando.id }));
      } else {
        this.familiaService.criar(dados);
      }
      this.familiaEditando = null;
      this.generosFamilia = "";
      this.familiaForm = {
        nome: "",
        descricao: "",
        vagasDisponiveis: 1,
        membrosAtuais: 1,
        limiteMembros: 6,
        totalJogos: 0,
        generos: [],
        avataresMembros: [],
        jogosDestaque: []
      };
      this.finalizarAcao("Fam\xEDlia salva com sucesso.");
    } catch (erro) {
      this.mensagemErro = erro instanceof Error ? erro.message : "N\xE3o foi poss\xEDvel salvar a fam\xEDlia.";
    }
  }
  editarFamilia(familia) {
    this.familiaEditando = familia;
    this.familiaForm = __spreadValues({}, familia);
    this.generosFamilia = familia.generos.join(", ");
  }
  excluirFamilia(id) {
    this.familiaService.excluir(id);
    this.finalizarAcao("Fam\xEDlia exclu\xEDda.");
  }
  salvarJogo() {
    try {
      if (!this.jogoForm.titulo.trim()) {
        throw new Error("Informe o t\xEDtulo do jogo.");
      }
      if (this.jogoEditando) {
        this.jogoService.atualizar(__spreadValues(__spreadValues({}, this.jogoEditando), this.jogoForm));
      } else {
        this.jogoService.criar(this.jogoForm);
      }
      this.jogoEditando = null;
      this.jogoForm = { titulo: "", imagemUrl: "", crescimento: "", buscasSemana: "" };
      this.finalizarAcao("Jogo salvo com sucesso.");
    } catch (erro) {
      this.mensagemErro = erro instanceof Error ? erro.message : "N\xE3o foi poss\xEDvel salvar o jogo.";
    }
  }
  editarJogo(jogo) {
    this.jogoEditando = jogo;
    this.jogoForm = {
      titulo: jogo.titulo,
      imagemUrl: jogo.imagemUrl,
      crescimento: jogo.crescimento ?? "",
      buscasSemana: jogo.buscasSemana ?? ""
    };
  }
  excluirJogo(id) {
    this.jogoService.excluir(id);
    this.finalizarAcao("Jogo exclu\xEDdo.");
  }
  salvarGenero() {
    try {
      if (!this.generoForm.trim()) {
        throw new Error("Informe o nome do g\xEAnero.");
      }
      this.generoService.criar(this.generoForm);
      this.generoForm = "";
      this.finalizarAcao("G\xEAnero salvo com sucesso.");
    } catch (erro) {
      this.mensagemErro = erro instanceof Error ? erro.message : "N\xE3o foi poss\xEDvel salvar o g\xEAnero.";
    }
  }
  excluirGenero(genero) {
    if (genero !== "Todos") {
      this.generoService.excluir(genero);
      this.finalizarAcao("G\xEAnero exclu\xEDdo.");
    }
  }
  alterarSolicitacao(solicitacao, status) {
    try {
      this.solicitacaoService.atualizarStatus(solicitacao.id, status);
      this.finalizarAcao(`Solicita\xE7\xE3o ${status}.`);
    } catch (erro) {
      this.mensagemErro = erro instanceof Error ? erro.message : "N\xE3o foi poss\xEDvel alterar a solicita\xE7\xE3o.";
    }
  }
  excluirSolicitacao(id) {
    this.solicitacaoService.excluir(id);
    this.finalizarAcao("Solicita\xE7\xE3o exclu\xEDda.");
  }
  finalizarAcao(mensagem) {
    this.mensagemErro = "";
    this.mensagemSucesso = mensagem;
    this.carregarDados();
  }
  limparMensagens() {
    this.mensagemErro = "";
    this.mensagemSucesso = "";
  }
  static \u0275fac = function AdminComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminComponent)(\u0275\u0275directiveInject(UsuarioService), \u0275\u0275directiveInject(FamiliaService), \u0275\u0275directiveInject(JogoService), \u0275\u0275directiveInject(GeneroService), \u0275\u0275directiveInject(SolicitacaoService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminComponent, selectors: [["app-admin"]], standalone: false, decls: 20, vars: 14, consts: [[1, "admin-page"], [1, "eyebrow"], ["class", "alerta erro", 4, "ngIf"], ["class", "alerta sucesso", 4, "ngIf"], ["class", "carregando", 4, "ngIf"], ["aria-label", "Entidades", 1, "abas"], ["type", "button", 3, "click"], ["class", "painel", 4, "ngIf"], [1, "alerta", "erro"], [1, "alerta", "sucesso"], [1, "carregando"], [1, "painel"], [4, "ngIf"], [1, "formulario", 3, "ngSubmit"], ["name", "nomeUsuario", "placeholder", "Nome", "required", "", 3, "ngModelChange", "ngModel"], ["name", "emailUsuario", "type", "email", "placeholder", "E-mail", "required", "", 3, "ngModelChange", "ngModel"], ["name", "senhaUsuario", "type", "password", "placeholder", "Senha", 3, "ngModelChange", "ngModel"], ["name", "steamUsuario", "placeholder", "Steam ID", 3, "ngModelChange", "ngModel"], ["name", "jogosUsuario", "type", "number", "min", "0", "placeholder", "Jogos importados", 3, "ngModelChange", "ngModel"], ["type", "submit"], [1, "lista"], [4, "ngFor", "ngForOf"], [1, "acoes"], ["type", "button", 1, "perigo", 3, "click"], ["name", "nomeFamilia", "placeholder", "Nome", "required", "", 3, "ngModelChange", "ngModel"], ["name", "descricaoFamilia", "placeholder", "Descri\xE7\xE3o", 3, "ngModelChange", "ngModel"], ["name", "membrosFamilia", "type", "number", "min", "0", "max", "6", 3, "ngModelChange", "ngModel"], ["name", "limiteFamilia", "type", "number", "min", "1", "max", "6", 3, "ngModelChange", "ngModel"], ["name", "jogosFamilia", "type", "number", "min", "0", 3, "ngModelChange", "ngModel"], ["name", "generosFamilia", "placeholder", "G\xEAneros separados por v\xEDrgula", 3, "ngModelChange", "ngModel"], ["name", "tituloJogo", "placeholder", "T\xEDtulo", "required", "", 3, "ngModelChange", "ngModel"], ["name", "imagemJogo", "placeholder", "URL da imagem", 3, "ngModelChange", "ngModel"], ["name", "crescimentoJogo", "placeholder", "Crescimento", 3, "ngModelChange", "ngModel"], ["name", "buscasJogo", "placeholder", "Buscas na semana", 3, "ngModelChange", "ngModel"], ["name", "nomeGenero", "placeholder", "Novo g\xEAnero", 3, "ngModelChange", "ngModel"], ["type", "button", 1, "perigo", 3, "click", "disabled"], ["type", "button", 3, "click", "disabled"]], template: function AdminComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "header")(2, "div")(3, "span", 1);
      \u0275\u0275text(4, "\xC1rea operacional");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(5, AdminComponent_div_5_Template, 2, 1, "div", 2)(6, AdminComponent_div_6_Template, 2, 1, "div", 3)(7, AdminComponent_div_7_Template, 2, 0, "div", 4);
      \u0275\u0275elementStart(8, "nav", 5)(9, "button", 6);
      \u0275\u0275listener("click", function AdminComponent_Template_button_click_9_listener() {
        return ctx.selecionarAba("usuarios");
      });
      \u0275\u0275text(10, "Usu\xE1rios");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "button", 6);
      \u0275\u0275listener("click", function AdminComponent_Template_button_click_11_listener() {
        return ctx.selecionarAba("familias");
      });
      \u0275\u0275text(12, "Fam\xEDlias");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "button", 6);
      \u0275\u0275listener("click", function AdminComponent_Template_button_click_13_listener() {
        return ctx.selecionarAba("jogos");
      });
      \u0275\u0275text(14, "Jogos");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "button", 6);
      \u0275\u0275listener("click", function AdminComponent_Template_button_click_15_listener() {
        return ctx.selecionarAba("generos");
      });
      \u0275\u0275text(16, "G\xEAneros");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "button", 6);
      \u0275\u0275listener("click", function AdminComponent_Template_button_click_17_listener() {
        return ctx.selecionarAba("solicitacoes");
      });
      \u0275\u0275text(18, "Solicita\xE7\xF5es");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(19, AdminComponent_div_19_Template, 6, 5, "div", 7);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275property("ngIf", ctx.mensagemErro);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.mensagemSucesso);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.carregando);
      \u0275\u0275advance(2);
      \u0275\u0275classProp("ativa", ctx.abaAtiva === "usuarios");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("ativa", ctx.abaAtiva === "familias");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("ativa", ctx.abaAtiva === "jogos");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("ativa", ctx.abaAtiva === "generos");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("ativa", ctx.abaAtiva === "solicitacoes");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", !ctx.carregando);
    }
  }, dependencies: [NgForOf, NgIf, \u0275NgNoValidate, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MinValidator, MaxValidator, NgModel, NgForm, DatePipe], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.admin-page[_ngcontent-%COMP%] {\n  max-width: 1180px;\n  margin: 0 auto;\n  padding: 2.5rem clamp(1rem, 4vw, 3rem) 4rem;\n}\nheader[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: .25rem 0 .35rem;\n}\nheader[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--famify-muted);\n}\n.eyebrow[_ngcontent-%COMP%] {\n  color: var(--famify-magenta);\n  text-transform: uppercase;\n  font-size: .75rem;\n  font-weight: 800;\n  letter-spacing: .12em;\n}\n.alerta[_ngcontent-%COMP%] {\n  margin: 1rem 0;\n  padding: .8rem 1rem;\n  border-radius: 10px;\n}\n.erro[_ngcontent-%COMP%] {\n  background: var(--famify-danger-surface);\n  color: var(--famify-danger);\n}\n.sucesso[_ngcontent-%COMP%] {\n  background: var(--famify-positive-surface);\n  color: var(--famify-positive);\n}\n.carregando[_ngcontent-%COMP%] {\n  margin: 2rem 0;\n  color: var(--famify-muted);\n}\n.abas[_ngcontent-%COMP%] {\n  display: flex;\n  gap: .5rem;\n  overflow-x: auto;\n  border-bottom: 1px solid var(--famify-border);\n}\n.abas[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border: 0;\n  border-bottom: 3px solid transparent;\n  background: transparent;\n  color: var(--famify-muted);\n  padding: .8rem 1rem;\n  white-space: nowrap;\n  cursor: pointer;\n}\n.abas[_ngcontent-%COMP%]   button.ativa[_ngcontent-%COMP%] {\n  color: var(--famify-magenta);\n  border-bottom-color: var(--famify-magenta);\n}\n.painel[_ngcontent-%COMP%] {\n  padding-top: 1.5rem;\n}\n.painel[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin-top: 0;\n}\n.formulario[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: .75rem;\n  margin-bottom: 1.5rem;\n}\n.formulario[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  min-width: 0;\n  width: 100%;\n  border: 1px solid var(--famify-border);\n  border-radius: 10px;\n  background: var(--famify-surface);\n  color: var(--famify-ink);\n  padding: .8rem;\n}\n.formulario[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], \n.acoes[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border: 0;\n  border-radius: 9px;\n  padding: .65rem .9rem;\n  background: var(--famify-violet);\n  color: #17131d;\n  font-weight: 800;\n  cursor: pointer;\n}\n.lista[_ngcontent-%COMP%] {\n  display: grid;\n  gap: .65rem;\n}\n.lista[_ngcontent-%COMP%]   article[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 1rem;\n  border: 1px solid var(--famify-border);\n  border-radius: 12px;\n  background: var(--famify-surface);\n  padding: .85rem 1rem;\n}\n.lista[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:first-child {\n  display: grid;\n  gap: .2rem;\n}\n.lista[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--famify-muted);\n  font-size: .82rem;\n}\n.acoes[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: .45rem;\n}\n.acoes[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background: var(--famify-surface-high);\n  color: var(--famify-ink);\n}\n.acoes[_ngcontent-%COMP%]   button.perigo[_ngcontent-%COMP%] {\n  background: var(--famify-danger-surface);\n  color: var(--famify-danger);\n}\n.acoes[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled {\n  opacity: .45;\n  cursor: not-allowed;\n}\n@media (max-width: 650px) {\n  .formulario[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .lista[_ngcontent-%COMP%]   article[_ngcontent-%COMP%] {\n    align-items: flex-start;\n    flex-direction: column;\n  }\n  .admin-page[_ngcontent-%COMP%] {\n    padding-top: 1.5rem;\n  }\n}\n/*# sourceMappingURL=admin.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminComponent, [{
    type: Component,
    args: [{ selector: "app-admin", standalone: false, template: `<section class="admin-page">
  <header>
    <div>
      <span class="eyebrow">\xC1rea operacional</span>
    </div>
  </header>

  <div class="alerta erro" *ngIf="mensagemErro">{{ mensagemErro }}</div>
  <div class="alerta sucesso" *ngIf="mensagemSucesso">{{ mensagemSucesso }}</div>
  <div class="carregando" *ngIf="carregando">Carregando dados locais...</div>

  <nav class="abas" aria-label="Entidades">
    <button type="button" [class.ativa]="abaAtiva === 'usuarios'" (click)="selecionarAba('usuarios')">Usu\xE1rios</button>
    <button type="button" [class.ativa]="abaAtiva === 'familias'" (click)="selecionarAba('familias')">Fam\xEDlias</button>
    <button type="button" [class.ativa]="abaAtiva === 'jogos'" (click)="selecionarAba('jogos')">Jogos</button>
    <button type="button" [class.ativa]="abaAtiva === 'generos'" (click)="selecionarAba('generos')">G\xEAneros</button>
    <button type="button" [class.ativa]="abaAtiva === 'solicitacoes'" (click)="selecionarAba('solicitacoes')">Solicita\xE7\xF5es</button>
  </nav>

  <div class="painel" *ngIf="!carregando">
    <ng-container *ngIf="abaAtiva === 'usuarios'">
      <h2>{{ usuarioEditando ? 'Editar usu\xE1rio' : 'Novo usu\xE1rio' }}</h2>
      <form class="formulario" (ngSubmit)="salvarUsuario()">
        <input [(ngModel)]="usuarioForm.nome" name="nomeUsuario" placeholder="Nome" required />
        <input [(ngModel)]="usuarioForm.email" name="emailUsuario" type="email" placeholder="E-mail" required />
        <input [(ngModel)]="usuarioForm.senha" name="senhaUsuario" type="password" placeholder="Senha" />
        <input [(ngModel)]="usuarioForm.steamId" name="steamUsuario" placeholder="Steam ID" />
        <input [(ngModel)]="usuarioForm.jogosImportados" name="jogosUsuario" type="number" min="0" placeholder="Jogos importados" />
        <button type="submit">{{ usuarioEditando ? 'Atualizar usu\xE1rio' : 'Cadastrar usu\xE1rio' }}</button>
      </form>
      <div class="lista">
        <article *ngFor="let usuario of usuarios">
          <div><strong>{{ usuario.nome }}</strong><span>{{ usuario.email }} \xB7 {{ usuario.jogosImportados }} jogos</span></div>
          <div class="acoes"><button type="button" (click)="editarUsuario(usuario)">Editar</button><button type="button" class="perigo" (click)="excluirUsuario(usuario.id)">Excluir</button></div>
        </article>
      </div>
    </ng-container>

    <ng-container *ngIf="abaAtiva === 'familias'">
      <h2>{{ familiaEditando ? 'Editar fam\xEDlia' : 'Nova fam\xEDlia' }}</h2>
      <form class="formulario" (ngSubmit)="salvarFamilia()">
        <input [(ngModel)]="familiaForm.nome" name="nomeFamilia" placeholder="Nome" required />
        <input [(ngModel)]="familiaForm.descricao" name="descricaoFamilia" placeholder="Descri\xE7\xE3o" />
        <input [(ngModel)]="familiaForm.membrosAtuais" name="membrosFamilia" type="number" min="0" max="6" />
        <input [(ngModel)]="familiaForm.limiteMembros" name="limiteFamilia" type="number" min="1" max="6" />
        <input [(ngModel)]="familiaForm.totalJogos" name="jogosFamilia" type="number" min="0" />
        <input [(ngModel)]="generosFamilia" name="generosFamilia" placeholder="G\xEAneros separados por v\xEDrgula" />
        <button type="submit">{{ familiaEditando ? 'Atualizar fam\xEDlia' : 'Cadastrar fam\xEDlia' }}</button>
      </form>
      <div class="lista">
        <article *ngFor="let familia of familias">
          <div><strong>{{ familia.nome }}</strong><span>{{ familia.membrosAtuais }}/{{ familia.limiteMembros }} membros \xB7 {{ familia.generos.join(', ') }}</span></div>
          <div class="acoes"><button type="button" (click)="editarFamilia(familia)">Editar</button><button type="button" class="perigo" (click)="excluirFamilia(familia.id)">Excluir</button></div>
        </article>
      </div>
    </ng-container>

    <ng-container *ngIf="abaAtiva === 'jogos'">
      <h2>{{ jogoEditando ? 'Editar jogo' : 'Novo jogo' }}</h2>
      <form class="formulario" (ngSubmit)="salvarJogo()">
        <input [(ngModel)]="jogoForm.titulo" name="tituloJogo" placeholder="T\xEDtulo" required />
        <input [(ngModel)]="jogoForm.imagemUrl" name="imagemJogo" placeholder="URL da imagem" />
        <input [(ngModel)]="jogoForm.crescimento" name="crescimentoJogo" placeholder="Crescimento" />
        <input [(ngModel)]="jogoForm.buscasSemana" name="buscasJogo" placeholder="Buscas na semana" />
        <button type="submit">{{ jogoEditando ? 'Atualizar jogo' : 'Cadastrar jogo' }}</button>
      </form>
      <div class="lista">
        <article *ngFor="let jogo of jogos">
          <div><strong>{{ jogo.titulo }}</strong><span>{{ jogo.buscasSemana || 'Sem m\xE9tricas simuladas' }}</span></div>
          <div class="acoes"><button type="button" (click)="editarJogo(jogo)">Editar</button><button type="button" class="perigo" (click)="excluirJogo(jogo.id)">Excluir</button></div>
        </article>
      </div>
    </ng-container>

    <ng-container *ngIf="abaAtiva === 'generos'">
      <h2>G\xEAneros</h2>
      <form class="formulario" (ngSubmit)="salvarGenero()">
        <input [(ngModel)]="generoForm" name="nomeGenero" placeholder="Novo g\xEAnero" />
        <button type="submit">Cadastrar g\xEAnero</button>
      </form>
      <div class="lista">
        <article *ngFor="let genero of generos">
          <div><strong>{{ genero }}</strong></div>
          <div class="acoes"><button type="button" class="perigo" [disabled]="genero === 'Todos'" (click)="excluirGenero(genero)">Excluir</button></div>
        </article>
      </div>
    </ng-container>

    <ng-container *ngIf="abaAtiva === 'solicitacoes'">
      <h2>Solicita\xE7\xF5es</h2>
      <div class="lista">
        <article *ngFor="let solicitacao of solicitacoes">
          <div><strong>Usu\xE1rio {{ solicitacao.usuarioId }} \xB7 Fam\xEDlia {{ solicitacao.familiaId }}</strong><span>{{ solicitacao.status }} \xB7 {{ solicitacao.criadaEm | date:'short' }}</span></div>
          <div class="acoes">
            <button type="button" [disabled]="solicitacao.status !== 'pendente'" (click)="alterarSolicitacao(solicitacao, 'aprovada')">Aprovar</button>
            <button type="button" [disabled]="solicitacao.status !== 'pendente'" (click)="alterarSolicitacao(solicitacao, 'rejeitada')">Rejeitar</button>
            <button type="button" class="perigo" (click)="excluirSolicitacao(solicitacao.id)">Excluir</button>
          </div>
        </article>
        <p *ngIf="solicitacoes.length === 0">Nenhuma solicita\xE7\xE3o cadastrada.</p>
      </div>
    </ng-container>
  </div>
</section>
`, styles: ["/* src/app/pages/admin/admin.component.css */\n:host {\n  display: block;\n}\n.admin-page {\n  max-width: 1180px;\n  margin: 0 auto;\n  padding: 2.5rem clamp(1rem, 4vw, 3rem) 4rem;\n}\nheader h1 {\n  margin: .25rem 0 .35rem;\n}\nheader p {\n  color: var(--famify-muted);\n}\n.eyebrow {\n  color: var(--famify-magenta);\n  text-transform: uppercase;\n  font-size: .75rem;\n  font-weight: 800;\n  letter-spacing: .12em;\n}\n.alerta {\n  margin: 1rem 0;\n  padding: .8rem 1rem;\n  border-radius: 10px;\n}\n.erro {\n  background: var(--famify-danger-surface);\n  color: var(--famify-danger);\n}\n.sucesso {\n  background: var(--famify-positive-surface);\n  color: var(--famify-positive);\n}\n.carregando {\n  margin: 2rem 0;\n  color: var(--famify-muted);\n}\n.abas {\n  display: flex;\n  gap: .5rem;\n  overflow-x: auto;\n  border-bottom: 1px solid var(--famify-border);\n}\n.abas button {\n  border: 0;\n  border-bottom: 3px solid transparent;\n  background: transparent;\n  color: var(--famify-muted);\n  padding: .8rem 1rem;\n  white-space: nowrap;\n  cursor: pointer;\n}\n.abas button.ativa {\n  color: var(--famify-magenta);\n  border-bottom-color: var(--famify-magenta);\n}\n.painel {\n  padding-top: 1.5rem;\n}\n.painel h2 {\n  margin-top: 0;\n}\n.formulario {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: .75rem;\n  margin-bottom: 1.5rem;\n}\n.formulario input {\n  min-width: 0;\n  width: 100%;\n  border: 1px solid var(--famify-border);\n  border-radius: 10px;\n  background: var(--famify-surface);\n  color: var(--famify-ink);\n  padding: .8rem;\n}\n.formulario button,\n.acoes button {\n  border: 0;\n  border-radius: 9px;\n  padding: .65rem .9rem;\n  background: var(--famify-violet);\n  color: #17131d;\n  font-weight: 800;\n  cursor: pointer;\n}\n.lista {\n  display: grid;\n  gap: .65rem;\n}\n.lista article {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 1rem;\n  border: 1px solid var(--famify-border);\n  border-radius: 12px;\n  background: var(--famify-surface);\n  padding: .85rem 1rem;\n}\n.lista article div:first-child {\n  display: grid;\n  gap: .2rem;\n}\n.lista article span {\n  color: var(--famify-muted);\n  font-size: .82rem;\n}\n.acoes {\n  display: flex;\n  flex-wrap: wrap;\n  gap: .45rem;\n}\n.acoes button {\n  background: var(--famify-surface-high);\n  color: var(--famify-ink);\n}\n.acoes button.perigo {\n  background: var(--famify-danger-surface);\n  color: var(--famify-danger);\n}\n.acoes button:disabled {\n  opacity: .45;\n  cursor: not-allowed;\n}\n@media (max-width: 650px) {\n  .formulario {\n    grid-template-columns: 1fr;\n  }\n  .lista article {\n    align-items: flex-start;\n    flex-direction: column;\n  }\n  .admin-page {\n    padding-top: 1.5rem;\n  }\n}\n/*# sourceMappingURL=admin.component.css.map */\n"] }]
  }], () => [{ type: UsuarioService }, { type: FamiliaService }, { type: JogoService }, { type: GeneroService }, { type: SolicitacaoService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminComponent, { className: "AdminComponent", filePath: "src/app/pages/admin/admin.component.ts", lineNumber: 14 });
})();

// src/app/pages/admin/admin.module.ts
var AdminModule = class _AdminModule {
  static \u0275fac = function AdminModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _AdminModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: "", component: AdminComponent }])
  ] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminModule, [{
    type: NgModule,
    args: [{
      declarations: [AdminComponent],
      imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild([{ path: "", component: AdminComponent }])
      ]
    }]
  }], null, null);
})();
export {
  AdminModule
};
//# sourceMappingURL=chunk-VL3VGJAJ.js.map
