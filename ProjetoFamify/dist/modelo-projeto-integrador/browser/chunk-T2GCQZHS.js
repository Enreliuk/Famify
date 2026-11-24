import {
  MatChip,
  MatChipListbox,
  MatChipOption,
  MatChipSet,
  MatChipsModule
} from "./chunk-V2CYPURQ.js";
import {
  AuthService
} from "./chunk-ONZXE3S3.js";
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardModule,
  MatFormField,
  MatFormFieldModule,
  MatInput,
  MatInputModule,
  MatLabel,
  MatPrefix,
  MatSuffix
} from "./chunk-47P3QVWC.js";
import {
  MatButton,
  MatButtonModule,
  MatCommonModule,
  MatIcon,
  MatIconButton,
  MatIconModule,
  _getAnimationsState
} from "./chunk-Q2D5DFCU.js";
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
  ActivatedRoute,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  CommonModule,
  Component,
  DOCUMENT,
  DefaultValueAccessor,
  ElementRef,
  EventEmitter,
  FormsModule,
  InjectionToken,
  Input,
  NgControlStatus,
  NgForOf,
  NgIf,
  NgModel,
  NgModule,
  NgZone,
  Output,
  Renderer2,
  RouterModule,
  ViewEncapsulation,
  __spreadProps,
  __spreadValues,
  inject,
  numberAttribute,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-2SBXNMGV.js";

// node_modules/@angular/material/fesm2022/progress-bar.mjs
function MatProgressBar_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElement(0, "div", 2);
  }
}
var MAT_PROGRESS_BAR_DEFAULT_OPTIONS = new InjectionToken("MAT_PROGRESS_BAR_DEFAULT_OPTIONS");
var MAT_PROGRESS_BAR_LOCATION = new InjectionToken("mat-progress-bar-location", {
  providedIn: "root",
  factory: MAT_PROGRESS_BAR_LOCATION_FACTORY
});
function MAT_PROGRESS_BAR_LOCATION_FACTORY() {
  const _document = inject(DOCUMENT);
  const _location = _document ? _document.location : null;
  return {
    // Note that this needs to be a function, rather than a property, because Angular
    // will only resolve it once, but we want the current path on each call.
    getPathname: () => _location ? _location.pathname + _location.search : ""
  };
}
var MatProgressBar = class _MatProgressBar {
  _elementRef = inject(ElementRef);
  _ngZone = inject(NgZone);
  _changeDetectorRef = inject(ChangeDetectorRef);
  _renderer = inject(Renderer2);
  _cleanupTransitionEnd;
  constructor() {
    const animationsState = _getAnimationsState();
    const defaults = inject(MAT_PROGRESS_BAR_DEFAULT_OPTIONS, {
      optional: true
    });
    this._isNoopAnimation = animationsState === "di-disabled";
    if (animationsState === "reduced-motion") {
      this._elementRef.nativeElement.classList.add("mat-progress-bar-reduced-motion");
    }
    if (defaults) {
      if (defaults.color) {
        this.color = this._defaultColor = defaults.color;
      }
      this.mode = defaults.mode || this.mode;
    }
  }
  /** Flag that indicates whether NoopAnimations mode is set to true. */
  _isNoopAnimation;
  // TODO: should be typed as `ThemePalette` but internal apps pass in arbitrary strings.
  /**
   * Theme color of the progress bar. This API is supported in M2 themes only, it
   * has no effect in M3 themes. For color customization in M3, see https://material.angular.dev/components/progress-bar/styling.
   *
   * For information on applying color variants in M3, see
   * https://material.angular.dev/guide/material-2-theming#optional-add-backwards-compatibility-styles-for-color-variants
   */
  get color() {
    return this._color || this._defaultColor;
  }
  set color(value) {
    this._color = value;
  }
  _color;
  _defaultColor = "primary";
  /** Value of the progress bar. Defaults to zero. Mirrored to aria-valuenow. */
  get value() {
    return this._value;
  }
  set value(v) {
    this._value = clamp(v || 0);
    this._changeDetectorRef.markForCheck();
  }
  _value = 0;
  /** Buffer value of the progress bar. Defaults to zero. */
  get bufferValue() {
    return this._bufferValue || 0;
  }
  set bufferValue(v) {
    this._bufferValue = clamp(v || 0);
    this._changeDetectorRef.markForCheck();
  }
  _bufferValue = 0;
  /**
   * Event emitted when animation of the primary progress bar completes. This event will not
   * be emitted when animations are disabled, nor will it be emitted for modes with continuous
   * animations (indeterminate and query).
   */
  animationEnd = new EventEmitter();
  /**
   * Mode of the progress bar.
   *
   * Input must be one of these values: determinate, indeterminate, buffer, query, defaults to
   * 'determinate'.
   * Mirrored to mode attribute.
   */
  get mode() {
    return this._mode;
  }
  set mode(value) {
    this._mode = value;
    this._changeDetectorRef.markForCheck();
  }
  _mode = "determinate";
  ngAfterViewInit() {
    this._ngZone.runOutsideAngular(() => {
      this._cleanupTransitionEnd = this._renderer.listen(this._elementRef.nativeElement, "transitionend", this._transitionendHandler);
    });
  }
  ngOnDestroy() {
    this._cleanupTransitionEnd?.();
  }
  /** Gets the transform style that should be applied to the primary bar. */
  _getPrimaryBarTransform() {
    return `scaleX(${this._isIndeterminate() ? 1 : this.value / 100})`;
  }
  /** Gets the `flex-basis` value that should be applied to the buffer bar. */
  _getBufferBarFlexBasis() {
    return `${this.mode === "buffer" ? this.bufferValue : 100}%`;
  }
  /** Returns whether the progress bar is indeterminate. */
  _isIndeterminate() {
    return this.mode === "indeterminate" || this.mode === "query";
  }
  /** Event handler for `transitionend` events. */
  _transitionendHandler = (event) => {
    if (this.animationEnd.observers.length === 0 || !event.target || !event.target.classList.contains("mdc-linear-progress__primary-bar")) {
      return;
    }
    if (this.mode === "determinate" || this.mode === "buffer") {
      this._ngZone.run(() => this.animationEnd.next({
        value: this.value
      }));
    }
  };
  static \u0275fac = function MatProgressBar_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatProgressBar)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatProgressBar,
    selectors: [["mat-progress-bar"]],
    hostAttrs: ["role", "progressbar", "aria-valuemin", "0", "aria-valuemax", "100", "tabindex", "-1", 1, "mat-mdc-progress-bar", "mdc-linear-progress"],
    hostVars: 10,
    hostBindings: function MatProgressBar_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("aria-valuenow", ctx._isIndeterminate() ? null : ctx.value)("mode", ctx.mode);
        \u0275\u0275classMap("mat-" + ctx.color);
        \u0275\u0275classProp("_mat-animation-noopable", ctx._isNoopAnimation)("mdc-linear-progress--animation-ready", !ctx._isNoopAnimation)("mdc-linear-progress--indeterminate", ctx._isIndeterminate());
      }
    },
    inputs: {
      color: "color",
      value: [2, "value", "value", numberAttribute],
      bufferValue: [2, "bufferValue", "bufferValue", numberAttribute],
      mode: "mode"
    },
    outputs: {
      animationEnd: "animationEnd"
    },
    exportAs: ["matProgressBar"],
    decls: 7,
    vars: 5,
    consts: [["aria-hidden", "true", 1, "mdc-linear-progress__buffer"], [1, "mdc-linear-progress__buffer-bar"], [1, "mdc-linear-progress__buffer-dots"], ["aria-hidden", "true", 1, "mdc-linear-progress__bar", "mdc-linear-progress__primary-bar"], [1, "mdc-linear-progress__bar-inner"], ["aria-hidden", "true", 1, "mdc-linear-progress__bar", "mdc-linear-progress__secondary-bar"]],
    template: function MatProgressBar_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275domElementStart(0, "div", 0);
        \u0275\u0275domElement(1, "div", 1);
        \u0275\u0275conditionalCreate(2, MatProgressBar_Conditional_2_Template, 1, 0, "div", 2);
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(3, "div", 3);
        \u0275\u0275domElement(4, "span", 4);
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(5, "div", 5);
        \u0275\u0275domElement(6, "span", 4);
        \u0275\u0275domElementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275styleProp("flex-basis", ctx._getBufferBarFlexBasis());
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.mode === "buffer" ? 2 : -1);
        \u0275\u0275advance();
        \u0275\u0275styleProp("transform", ctx._getPrimaryBarTransform());
      }
    },
    styles: [".mat-mdc-progress-bar{--mat-progress-bar-animation-multiplier: 1;display:block;text-align:start}.mat-mdc-progress-bar[mode=query]{transform:scaleX(-1)}.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__buffer-dots,.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__primary-bar,.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__secondary-bar,.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__bar-inner.mdc-linear-progress__bar-inner{animation:none}.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__primary-bar,.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__buffer-bar{transition:transform 1ms}.mat-progress-bar-reduced-motion{--mat-progress-bar-animation-multiplier: 2}.mdc-linear-progress{position:relative;width:100%;transform:translateZ(0);outline:1px solid rgba(0,0,0,0);overflow-x:hidden;transition:opacity 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);height:max(var(--mat-progress-bar-track-height, 4px),var(--mat-progress-bar-active-indicator-height, 4px))}@media(forced-colors: active){.mdc-linear-progress{outline-color:CanvasText}}.mdc-linear-progress__bar{position:absolute;top:0;bottom:0;margin:auto 0;width:100%;animation:none;transform-origin:top left;transition:transform 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);height:var(--mat-progress-bar-active-indicator-height, 4px)}.mdc-linear-progress--indeterminate .mdc-linear-progress__bar{transition:none}[dir=rtl] .mdc-linear-progress__bar{right:0;transform-origin:center right}.mdc-linear-progress__bar-inner{display:inline-block;position:absolute;width:100%;animation:none;border-top-style:solid;border-color:var(--mat-progress-bar-active-indicator-color, var(--mat-sys-primary));border-top-width:var(--mat-progress-bar-active-indicator-height, 4px)}.mdc-linear-progress__buffer{display:flex;position:absolute;top:0;bottom:0;margin:auto 0;width:100%;overflow:hidden;height:var(--mat-progress-bar-track-height, 4px);border-radius:var(--mat-progress-bar-track-shape, var(--mat-sys-corner-none))}.mdc-linear-progress__buffer-dots{background-image:radial-gradient(circle, var(--mat-progress-bar-track-color, var(--mat-sys-surface-variant)) calc(var(--mat-progress-bar-track-height, 4px) / 2), transparent 0);background-repeat:repeat-x;background-size:calc(calc(var(--mat-progress-bar-track-height, 4px) / 2)*5);background-position:left;flex:auto;transform:rotate(180deg);animation:mdc-linear-progress-buffering calc(250ms*var(--mat-progress-bar-animation-multiplier)) infinite linear}@media(forced-colors: active){.mdc-linear-progress__buffer-dots{background-color:ButtonBorder}}[dir=rtl] .mdc-linear-progress__buffer-dots{animation:mdc-linear-progress-buffering-reverse calc(250ms*var(--mat-progress-bar-animation-multiplier)) infinite linear;transform:rotate(0)}.mdc-linear-progress__buffer-bar{flex:0 1 100%;transition:flex-basis 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);background-color:var(--mat-progress-bar-track-color, var(--mat-sys-surface-variant))}.mdc-linear-progress__primary-bar{transform:scaleX(0)}.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar{left:-145.166611%}.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar{animation:mdc-linear-progress-primary-indeterminate-translate calc(2s*var(--mat-progress-bar-animation-multiplier)) infinite linear}.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar>.mdc-linear-progress__bar-inner{animation:mdc-linear-progress-primary-indeterminate-scale calc(2s*var(--mat-progress-bar-animation-multiplier)) infinite linear}[dir=rtl] .mdc-linear-progress.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar{animation-name:mdc-linear-progress-primary-indeterminate-translate-reverse}[dir=rtl] .mdc-linear-progress.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar{right:-145.166611%;left:auto}.mdc-linear-progress__secondary-bar{display:none}.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar{left:-54.888891%;display:block}.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar{animation:mdc-linear-progress-secondary-indeterminate-translate calc(2s*var(--mat-progress-bar-animation-multiplier)) infinite linear}.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar>.mdc-linear-progress__bar-inner{animation:mdc-linear-progress-secondary-indeterminate-scale calc(2s*var(--mat-progress-bar-animation-multiplier)) infinite linear}[dir=rtl] .mdc-linear-progress.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar{animation-name:mdc-linear-progress-secondary-indeterminate-translate-reverse}[dir=rtl] .mdc-linear-progress.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar{right:-54.888891%;left:auto}@keyframes mdc-linear-progress-buffering{from{transform:rotate(180deg) translateX(calc(var(--mat-progress-bar-track-height, 4px) * -2.5))}}@keyframes mdc-linear-progress-primary-indeterminate-translate{0%{transform:translateX(0)}20%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(0)}59.15%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(83.67142%)}100%{transform:translateX(200.611057%)}}@keyframes mdc-linear-progress-primary-indeterminate-scale{0%{transform:scaleX(0.08)}36.65%{animation-timing-function:cubic-bezier(0.334731, 0.12482, 0.785844, 1);transform:scaleX(0.08)}69.15%{animation-timing-function:cubic-bezier(0.06, 0.11, 0.6, 1);transform:scaleX(0.661479)}100%{transform:scaleX(0.08)}}@keyframes mdc-linear-progress-secondary-indeterminate-translate{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);transform:translateX(0)}25%{animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);transform:translateX(37.651913%)}48.35%{animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);transform:translateX(84.386165%)}100%{transform:translateX(160.277782%)}}@keyframes mdc-linear-progress-secondary-indeterminate-scale{0%{animation-timing-function:cubic-bezier(0.205028, 0.057051, 0.57661, 0.453971);transform:scaleX(0.08)}19.15%{animation-timing-function:cubic-bezier(0.152313, 0.196432, 0.648374, 1.004315);transform:scaleX(0.457104)}44.15%{animation-timing-function:cubic-bezier(0.257759, -0.003163, 0.211762, 1.38179);transform:scaleX(0.72796)}100%{transform:scaleX(0.08)}}@keyframes mdc-linear-progress-primary-indeterminate-translate-reverse{0%{transform:translateX(0)}20%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(0)}59.15%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(-83.67142%)}100%{transform:translateX(-200.611057%)}}@keyframes mdc-linear-progress-secondary-indeterminate-translate-reverse{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);transform:translateX(0)}25%{animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);transform:translateX(-37.651913%)}48.35%{animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);transform:translateX(-84.386165%)}100%{transform:translateX(-160.277782%)}}@keyframes mdc-linear-progress-buffering-reverse{from{transform:translateX(-10px)}}\n"],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatProgressBar, [{
    type: Component,
    args: [{
      selector: "mat-progress-bar",
      exportAs: "matProgressBar",
      host: {
        "role": "progressbar",
        "aria-valuemin": "0",
        "aria-valuemax": "100",
        // set tab index to -1 so screen readers will read the aria-label
        // Note: there is a known issue with JAWS that does not read progressbar aria labels on FireFox
        "tabindex": "-1",
        "[attr.aria-valuenow]": "_isIndeterminate() ? null : value",
        "[attr.mode]": "mode",
        "class": "mat-mdc-progress-bar mdc-linear-progress",
        "[class]": '"mat-" + color',
        "[class._mat-animation-noopable]": "_isNoopAnimation",
        "[class.mdc-linear-progress--animation-ready]": "!_isNoopAnimation",
        "[class.mdc-linear-progress--indeterminate]": "_isIndeterminate()"
      },
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      template: `<!--
  All children need to be hidden for screen readers in order to support ChromeVox.
  More context in the issue: https://github.com/angular/components/issues/22165.
-->
<div class="mdc-linear-progress__buffer" aria-hidden="true">
  <div
    class="mdc-linear-progress__buffer-bar"
    [style.flex-basis]="_getBufferBarFlexBasis()"></div>
  <!-- Remove the dots outside of buffer mode since they can cause CSP issues (see #28938) -->
  @if (mode === 'buffer') {
    <div class="mdc-linear-progress__buffer-dots"></div>
  }
</div>
<div
  class="mdc-linear-progress__bar mdc-linear-progress__primary-bar"
  aria-hidden="true"
  [style.transform]="_getPrimaryBarTransform()">
  <span class="mdc-linear-progress__bar-inner"></span>
</div>
<div class="mdc-linear-progress__bar mdc-linear-progress__secondary-bar" aria-hidden="true">
  <span class="mdc-linear-progress__bar-inner"></span>
</div>
`,
      styles: [".mat-mdc-progress-bar{--mat-progress-bar-animation-multiplier: 1;display:block;text-align:start}.mat-mdc-progress-bar[mode=query]{transform:scaleX(-1)}.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__buffer-dots,.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__primary-bar,.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__secondary-bar,.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__bar-inner.mdc-linear-progress__bar-inner{animation:none}.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__primary-bar,.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__buffer-bar{transition:transform 1ms}.mat-progress-bar-reduced-motion{--mat-progress-bar-animation-multiplier: 2}.mdc-linear-progress{position:relative;width:100%;transform:translateZ(0);outline:1px solid rgba(0,0,0,0);overflow-x:hidden;transition:opacity 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);height:max(var(--mat-progress-bar-track-height, 4px),var(--mat-progress-bar-active-indicator-height, 4px))}@media(forced-colors: active){.mdc-linear-progress{outline-color:CanvasText}}.mdc-linear-progress__bar{position:absolute;top:0;bottom:0;margin:auto 0;width:100%;animation:none;transform-origin:top left;transition:transform 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);height:var(--mat-progress-bar-active-indicator-height, 4px)}.mdc-linear-progress--indeterminate .mdc-linear-progress__bar{transition:none}[dir=rtl] .mdc-linear-progress__bar{right:0;transform-origin:center right}.mdc-linear-progress__bar-inner{display:inline-block;position:absolute;width:100%;animation:none;border-top-style:solid;border-color:var(--mat-progress-bar-active-indicator-color, var(--mat-sys-primary));border-top-width:var(--mat-progress-bar-active-indicator-height, 4px)}.mdc-linear-progress__buffer{display:flex;position:absolute;top:0;bottom:0;margin:auto 0;width:100%;overflow:hidden;height:var(--mat-progress-bar-track-height, 4px);border-radius:var(--mat-progress-bar-track-shape, var(--mat-sys-corner-none))}.mdc-linear-progress__buffer-dots{background-image:radial-gradient(circle, var(--mat-progress-bar-track-color, var(--mat-sys-surface-variant)) calc(var(--mat-progress-bar-track-height, 4px) / 2), transparent 0);background-repeat:repeat-x;background-size:calc(calc(var(--mat-progress-bar-track-height, 4px) / 2)*5);background-position:left;flex:auto;transform:rotate(180deg);animation:mdc-linear-progress-buffering calc(250ms*var(--mat-progress-bar-animation-multiplier)) infinite linear}@media(forced-colors: active){.mdc-linear-progress__buffer-dots{background-color:ButtonBorder}}[dir=rtl] .mdc-linear-progress__buffer-dots{animation:mdc-linear-progress-buffering-reverse calc(250ms*var(--mat-progress-bar-animation-multiplier)) infinite linear;transform:rotate(0)}.mdc-linear-progress__buffer-bar{flex:0 1 100%;transition:flex-basis 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);background-color:var(--mat-progress-bar-track-color, var(--mat-sys-surface-variant))}.mdc-linear-progress__primary-bar{transform:scaleX(0)}.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar{left:-145.166611%}.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar{animation:mdc-linear-progress-primary-indeterminate-translate calc(2s*var(--mat-progress-bar-animation-multiplier)) infinite linear}.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar>.mdc-linear-progress__bar-inner{animation:mdc-linear-progress-primary-indeterminate-scale calc(2s*var(--mat-progress-bar-animation-multiplier)) infinite linear}[dir=rtl] .mdc-linear-progress.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar{animation-name:mdc-linear-progress-primary-indeterminate-translate-reverse}[dir=rtl] .mdc-linear-progress.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar{right:-145.166611%;left:auto}.mdc-linear-progress__secondary-bar{display:none}.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar{left:-54.888891%;display:block}.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar{animation:mdc-linear-progress-secondary-indeterminate-translate calc(2s*var(--mat-progress-bar-animation-multiplier)) infinite linear}.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar>.mdc-linear-progress__bar-inner{animation:mdc-linear-progress-secondary-indeterminate-scale calc(2s*var(--mat-progress-bar-animation-multiplier)) infinite linear}[dir=rtl] .mdc-linear-progress.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar{animation-name:mdc-linear-progress-secondary-indeterminate-translate-reverse}[dir=rtl] .mdc-linear-progress.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar{right:-54.888891%;left:auto}@keyframes mdc-linear-progress-buffering{from{transform:rotate(180deg) translateX(calc(var(--mat-progress-bar-track-height, 4px) * -2.5))}}@keyframes mdc-linear-progress-primary-indeterminate-translate{0%{transform:translateX(0)}20%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(0)}59.15%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(83.67142%)}100%{transform:translateX(200.611057%)}}@keyframes mdc-linear-progress-primary-indeterminate-scale{0%{transform:scaleX(0.08)}36.65%{animation-timing-function:cubic-bezier(0.334731, 0.12482, 0.785844, 1);transform:scaleX(0.08)}69.15%{animation-timing-function:cubic-bezier(0.06, 0.11, 0.6, 1);transform:scaleX(0.661479)}100%{transform:scaleX(0.08)}}@keyframes mdc-linear-progress-secondary-indeterminate-translate{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);transform:translateX(0)}25%{animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);transform:translateX(37.651913%)}48.35%{animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);transform:translateX(84.386165%)}100%{transform:translateX(160.277782%)}}@keyframes mdc-linear-progress-secondary-indeterminate-scale{0%{animation-timing-function:cubic-bezier(0.205028, 0.057051, 0.57661, 0.453971);transform:scaleX(0.08)}19.15%{animation-timing-function:cubic-bezier(0.152313, 0.196432, 0.648374, 1.004315);transform:scaleX(0.457104)}44.15%{animation-timing-function:cubic-bezier(0.257759, -0.003163, 0.211762, 1.38179);transform:scaleX(0.72796)}100%{transform:scaleX(0.08)}}@keyframes mdc-linear-progress-primary-indeterminate-translate-reverse{0%{transform:translateX(0)}20%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(0)}59.15%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(-83.67142%)}100%{transform:translateX(-200.611057%)}}@keyframes mdc-linear-progress-secondary-indeterminate-translate-reverse{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);transform:translateX(0)}25%{animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);transform:translateX(-37.651913%)}48.35%{animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);transform:translateX(-84.386165%)}100%{transform:translateX(-160.277782%)}}@keyframes mdc-linear-progress-buffering-reverse{from{transform:translateX(-10px)}}\n"]
    }]
  }], () => [], {
    color: [{
      type: Input
    }],
    value: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    bufferValue: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    animationEnd: [{
      type: Output
    }],
    mode: [{
      type: Input
    }]
  });
})();
function clamp(v, min = 0, max = 100) {
  return Math.max(min, Math.min(max, v));
}
var MatProgressBarModule = class _MatProgressBarModule {
  static \u0275fac = function MatProgressBarModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatProgressBarModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _MatProgressBarModule,
    imports: [MatProgressBar],
    exports: [MatProgressBar, MatCommonModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [MatCommonModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatProgressBarModule, [{
    type: NgModule,
    args: [{
      imports: [MatProgressBar],
      exports: [MatProgressBar, MatCommonModule]
    }]
  }], null, null);
})();

// src/app/pages/match/match.component.ts
function MatchComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.mensagemErro);
  }
}
function MatchComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275text(1, "Carregando fam\xEDlias...");
    \u0275\u0275elementEnd();
  }
}
function MatchComponent_button_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 18);
    \u0275\u0275listener("click", function MatchComponent_button_13_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.termoFiltro = "");
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd()();
  }
}
function MatchComponent_mat_chip_option_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-chip-option", 19);
    \u0275\u0275listener("click", function MatchComponent_mat_chip_option_21_Template_mat_chip_option_click_0_listener() {
      const genero_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.selecionarGenero(genero_r5));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const genero_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("selected", ctx_r1.generoSelecionado === genero_r5);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", genero_r5, " ");
  }
}
function MatchComponent_section_27_mat_card_1_span_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 43);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const sigla_r7 = ctx.$implicit;
    \u0275\u0275attribute("aria-label", "Membro " + sigla_r7);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", sigla_r7, " ");
  }
}
function MatchComponent_section_27_mat_card_1_mat_chip_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-chip");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const genero_r8 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(genero_r8);
  }
}
function MatchComponent_section_27_mat_card_1_div_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44);
    \u0275\u0275element(1, "img", 45);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const jogo_r9 = ctx.$implicit;
    \u0275\u0275property("title", jogo_r9.titulo);
    \u0275\u0275advance();
    \u0275\u0275property("src", jogo_r9.capaUrl, \u0275\u0275sanitizeUrl)("alt", "Capa de " + jogo_r9.titulo);
  }
}
function MatchComponent_section_27_mat_card_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-card", 22)(1, "mat-card-content")(2, "div", 23)(3, "div", 24)(4, "span", 25)(5, "mat-icon");
    \u0275\u0275text(6, "groups");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div")(8, "h3");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p", 26);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "mat-chip", 27);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 28)(15, "div", 29);
    \u0275\u0275template(16, MatchComponent_section_27_mat_card_1_span_16_Template, 2, 2, "span", 30);
    \u0275\u0275elementStart(17, "span", 31);
    \u0275\u0275text(18, "+");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "span", 32)(20, "mat-icon");
    \u0275\u0275text(21, "group");
    \u0275\u0275elementEnd();
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 33)(24, "div", 34)(25, "span");
    \u0275\u0275text(26, "Ocupa\xE7\xE3o da fam\xEDlia");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "strong");
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(29, "mat-progress-bar", 35);
    \u0275\u0275elementStart(30, "div", 36)(31, "span")(32, "mat-icon");
    \u0275\u0275text(33, "sports_esports");
    \u0275\u0275elementEnd();
    \u0275\u0275text(34, " Biblioteca compartilhada");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "strong");
    \u0275\u0275text(36);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(37, "div", 37)(38, "span");
    \u0275\u0275text(39, "Jogos em destaque");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "mat-chip-set", 38);
    \u0275\u0275template(41, MatchComponent_section_27_mat_card_1_mat_chip_41_Template, 2, 1, "mat-chip", 39);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "div", 40);
    \u0275\u0275template(43, MatchComponent_section_27_mat_card_1_div_43_Template, 2, 3, "div", 41);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(44, "mat-card-actions")(45, "button", 42);
    \u0275\u0275listener("click", function MatchComponent_section_27_mat_card_1_Template_button_click_45_listener() {
      const familia_r10 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.solicitarEntrada(familia_r10));
    });
    \u0275\u0275elementStart(46, "mat-icon");
    \u0275\u0275text(47);
    \u0275\u0275elementEnd();
    \u0275\u0275text(48);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const familia_r10 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(familia_r10.nome);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(familia_r10.descricao);
    \u0275\u0275advance();
    \u0275\u0275classProp("ultima-vaga", familia_r10.vagasDisponiveis === 1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", familia_r10.vagasDisponiveis === 1 ? "\xDAltima vaga" : familia_r10.vagasDisponiveis + " vagas", " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", familia_r10.avataresMembros);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate2(" ", familia_r10.membrosAtuais, "/", familia_r10.limiteMembros, " membros ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate2("", familia_r10.membrosAtuais, "/", familia_r10.limiteMembros);
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r1.calcularPorcentagemOcupacao(familia_r10));
    \u0275\u0275attribute("aria-label", "Ocupa\xE7\xE3o: " + ctx_r1.calcularPorcentagemOcupacao(familia_r10) + "%");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("", familia_r10.totalJogos, " jogos");
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", familia_r10.generos);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", familia_r10.jogosDestaque);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("solicitado", familia_r10.solicitado);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(familia_r10.solicitado ? "check_circle" : "person_add");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", familia_r10.solicitado ? "Solicita\xE7\xE3o enviada" : "Solicitar entrada", " ");
  }
}
function MatchComponent_section_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 20);
    \u0275\u0275template(1, MatchComponent_section_27_mat_card_1_Template, 49, 19, "mat-card", 21);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.familiasFiltradas);
  }
}
function MatchComponent_ng_template_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-card", 46)(1, "mat-card-content")(2, "span", 47)(3, "mat-icon");
    \u0275\u0275text(4, "search_off");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "h3");
    \u0275\u0275text(6, "Nenhuma fam\xEDlia compat\xEDvel encontrada");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p");
    \u0275\u0275text(8, "Tente remover os filtros de g\xEAnero ou pesquisar por outro t\xEDtulo.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 48);
    \u0275\u0275listener("click", function MatchComponent_ng_template_28_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.generoSelecionado = "Todos";
      return \u0275\u0275resetView(ctx_r1.termoFiltro = "");
    });
    \u0275\u0275elementStart(10, "mat-icon");
    \u0275\u0275text(11, "filter_alt_off");
    \u0275\u0275elementEnd();
    \u0275\u0275text(12, " Limpar filtros ");
    \u0275\u0275elementEnd()()();
  }
}
var MatchComponent = class _MatchComponent {
  route;
  familiaService;
  generoService;
  solicitacaoService;
  authService;
  termoFiltro = "";
  generoSelecionado = "Todos";
  carregando = true;
  mensagemErro = "";
  generosDisponiveis = [];
  familias = [];
  usuarioId = null;
  constructor(route, familiaService, generoService, solicitacaoService, authService) {
    this.route = route;
    this.familiaService = familiaService;
    this.generoService = generoService;
    this.solicitacaoService = solicitacaoService;
    this.authService = authService;
  }
  ngOnInit() {
    window.setTimeout(() => {
      try {
        this.familias = this.familiaService.listar();
        this.generosDisponiveis = this.generoService.listar();
        this.familiaService.familias$.subscribe((familias) => this.familias = familias);
        this.authService.usuarioAtual$.subscribe((usuario) => {
          this.usuarioId = usuario?.id ?? null;
        });
        this.sincronizarSolicitacoes();
        this.route.queryParams.subscribe((params) => {
          if (params["q"]) {
            this.termoFiltro = params["q"];
          }
        });
      } catch (erro) {
        this.mensagemErro = erro instanceof Error ? erro.message : "N\xE3o foi poss\xEDvel carregar fam\xEDlias.";
      } finally {
        this.carregando = false;
      }
    }, 200);
  }
  selecionarGenero(genero) {
    this.generoSelecionado = genero;
  }
  get familiasFiltradas() {
    return this.familias.filter((familia) => {
      if (familia.membrosAtuais >= 6 || familia.vagasDisponiveis <= 0) {
        return false;
      }
      const bateGenero = this.generoSelecionado === "Todos" || familia.generos.includes(this.generoSelecionado);
      const termo = this.termoFiltro.trim().toLowerCase();
      const bateTexto = !termo || familia.nome.toLowerCase().includes(termo) || familia.descricao.toLowerCase().includes(termo) || familia.generos.some((g) => g.toLowerCase().includes(termo)) || familia.jogosDestaque.some((j) => j.titulo.toLowerCase().includes(termo));
      return bateGenero && bateTexto;
    });
  }
  solicitarEntrada(familia) {
    try {
      if (!this.usuarioId) {
        throw new Error("Entre ou crie uma conta antes de solicitar entrada em uma fam\xEDlia.");
      }
      familia.solicitado = !familia.solicitado;
      if (familia.solicitado) {
        this.solicitacaoService.solicitar(this.usuarioId, familia.id);
      } else {
        const pendente = this.solicitacaoService.listar().find((solicitacao) => solicitacao.usuarioId === this.usuarioId && solicitacao.familiaId === familia.id && solicitacao.status === "pendente");
        if (pendente) {
          this.solicitacaoService.cancelar(pendente.id);
        }
      }
      this.mensagemErro = "";
    } catch (erro) {
      familia.solicitado = false;
      this.mensagemErro = erro instanceof Error ? erro.message : "N\xE3o foi poss\xEDvel enviar a solicita\xE7\xE3o.";
    }
  }
  sincronizarSolicitacoes() {
    if (!this.usuarioId) {
      return;
    }
    const pendentes = this.solicitacaoService.listarPorUsuario(this.usuarioId).filter((solicitacao) => solicitacao.status === "pendente");
    this.familias = this.familias.map((familia) => __spreadProps(__spreadValues({}, familia), {
      solicitado: pendentes.some((solicitacao) => solicitacao.familiaId === familia.id)
    }));
  }
  calcularPorcentagemOcupacao(familia) {
    return familia.membrosAtuais / familia.limiteMembros * 100;
  }
  static \u0275fac = function MatchComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatchComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(FamiliaService), \u0275\u0275directiveInject(GeneroService), \u0275\u0275directiveInject(SolicitacaoService), \u0275\u0275directiveInject(AuthService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MatchComponent, selectors: [["app-match"]], decls: 30, vars: 8, consts: [["semResultados", ""], [1, "match-page"], ["class", "alerta-erro", "role", "alert", 4, "ngIf"], ["class", "carregando", 4, "ngIf"], [1, "match-header"], [1, "header-text"], ["appearance", "outline", 1, "search-box"], ["matPrefix", ""], ["matInput", "", "type", "search", "placeholder", "Ex.: Elden Ring, Pixel Squad", 3, "ngModelChange", "ngModel"], ["mat-icon-button", "", "matSuffix", "", "type", "button", "aria-label", "Limpar busca", 3, "click", 4, "ngIf"], ["aria-label", "Filtros por g\xEAnero", 1, "filters-section"], [1, "filter-heading"], ["aria-label", "Filtrar por g\xEAnero"], [3, "selected", "click", 4, "ngFor", "ngForOf"], [1, "results-heading"], ["class", "families-grid", 4, "ngIf", "ngIfElse"], ["role", "alert", 1, "alerta-erro"], [1, "carregando"], ["mat-icon-button", "", "matSuffix", "", "type", "button", "aria-label", "Limpar busca", 3, "click"], [3, "click", "selected"], [1, "families-grid"], ["class", "family-card", "appearance", "outlined", 4, "ngFor", "ngForOf"], ["appearance", "outlined", 1, "family-card"], [1, "card-top"], [1, "family-title"], [1, "family-avatar"], [1, "family-desc"], [1, "vagas-badge"], [1, "members-row"], ["aria-label", "Membros atuais", 1, "avatars-group"], ["class", "member-avatar", 4, "ngFor", "ngForOf"], ["title", "Vaga dispon\xEDvel", 1, "member-avatar", "vaga-livre"], [1, "members-count"], [1, "library-stats"], [1, "stats-labels"], ["mode", "determinate", 3, "value"], [1, "library-total"], [1, "games-heading"], ["aria-label", "G\xEAneros da fam\xEDlia"], [4, "ngFor", "ngForOf"], [1, "aaa-showcase"], ["class", "aaa-thumb", 3, "title", 4, "ngFor", "ngForOf"], ["mat-flat-button", "", "color", "primary", "type", "button", 1, "btn-solicitar", 3, "click"], [1, "member-avatar"], [1, "aaa-thumb", 3, "title"], [3, "src", "alt"], ["appearance", "outlined", 1, "empty-state"], [1, "empty-icon"], ["mat-stroked-button", "", "color", "primary", "type", "button", 3, "click"]], template: function MatchComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 1);
      \u0275\u0275template(1, MatchComponent_div_1_Template, 2, 1, "div", 2)(2, MatchComponent_div_2_Template, 2, 0, "div", 3);
      \u0275\u0275elementStart(3, "header", 4)(4, "div", 5)(5, "h1");
      \u0275\u0275text(6, "Encontre sua pr\xF3xima fam\xEDlia");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "mat-form-field", 6)(8, "mat-label");
      \u0275\u0275text(9, "Buscar fam\xEDlias ou jogos");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "mat-icon", 7);
      \u0275\u0275text(11, "search");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "input", 8);
      \u0275\u0275twoWayListener("ngModelChange", function MatchComponent_Template_input_ngModelChange_12_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.termoFiltro, $event) || (ctx.termoFiltro = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(13, MatchComponent_button_13_Template, 3, 0, "button", 9);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(14, "section", 10)(15, "div", 11)(16, "mat-icon");
      \u0275\u0275text(17, "tune");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "span");
      \u0275\u0275text(19, "Explore por afinidade");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(20, "mat-chip-listbox", 12);
      \u0275\u0275template(21, MatchComponent_mat_chip_option_21_Template, 2, 2, "mat-chip-option", 13);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(22, "div", 14)(23, "h2");
      \u0275\u0275text(24, "Fam\xEDlias dispon\xEDveis");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "span");
      \u0275\u0275text(26);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(27, MatchComponent_section_27_Template, 2, 1, "section", 15)(28, MatchComponent_ng_template_28_Template, 13, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      const semResultados_r12 = \u0275\u0275reference(29);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.mensagemErro);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.carregando);
      \u0275\u0275advance(10);
      \u0275\u0275twoWayProperty("ngModel", ctx.termoFiltro);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.termoFiltro);
      \u0275\u0275advance(8);
      \u0275\u0275property("ngForOf", ctx.generosDisponiveis);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1("", ctx.familiasFiltradas.length, " resultados");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.familiasFiltradas.length > 0)("ngIfElse", semResultados_r12);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, MatButtonModule, MatButton, MatIconButton, MatCardModule, MatCard, MatCardActions, MatCardContent, MatChipsModule, MatChip, MatChipListbox, MatChipOption, MatChipSet, MatFormFieldModule, MatFormField, MatLabel, MatPrefix, MatSuffix, MatIconModule, MatIcon, MatInputModule, MatInput, MatProgressBarModule, MatProgressBar], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.match-page[_ngcontent-%COMP%] {\n  width: min(1200px, 90%);\n  margin: 0 auto;\n  padding: 3.2rem 0 5rem;\n}\n.match-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-end;\n  gap: 2rem;\n  margin-bottom: 1.8rem;\n}\n.header-text[_ngcontent-%COMP%] {\n  max-width: 650px;\n}\n.header-text[_ngcontent-%COMP%]   mat-chip-set[_ngcontent-%COMP%] {\n  margin-bottom: 0.9rem;\n}\n.header-text[_ngcontent-%COMP%]   mat-chip[_ngcontent-%COMP%] {\n  background: #35243d;\n  color: #f3a5dc;\n  font-size: 0.76rem;\n  font-weight: 700;\n}\n.header-text[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: var(--famify-magenta);\n}\n.header-text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin-bottom: 0.55rem;\n  font-size: clamp(2rem, 4vw, 3rem);\n  font-weight: 800;\n  line-height: 1.1;\n  letter-spacing: -0.06em;\n}\n.search-box[_ngcontent-%COMP%] {\n  flex: 0 1 400px;\n}\n.filters-section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.8rem;\n  margin-bottom: 2.2rem;\n  padding: 1rem 1.2rem;\n  border: 1px solid var(--famify-border);\n  border-radius: 18px;\n  background: rgba(37, 32, 45, 0.78);\n}\n.filter-heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.45rem;\n  color: #dfc7ec;\n  font-size: 0.84rem;\n  font-weight: 700;\n}\n.filter-heading[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  font-size: 18px;\n}\n.filters-section[_ngcontent-%COMP%]   mat-chip-listbox[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.4rem;\n}\n.filters-section[_ngcontent-%COMP%]   mat-chip-option[_ngcontent-%COMP%] {\n  --mdc-chip-elevated-container-color: #30283a;\n  --mdc-chip-label-text-color: #ded3e4;\n  --mdc-chip-outline-color: #51425c;\n  font-size: 0.8rem;\n  font-weight: 600;\n}\n.results-heading[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1rem;\n}\n.results-heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  font-weight: 750;\n  letter-spacing: -0.03em;\n}\n.results-heading[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--famify-muted);\n  font-size: 0.8rem;\n}\n.families-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 1.15rem;\n}\n.family-card[_ngcontent-%COMP%] {\n  border-color: var(--famify-border);\n  border-radius: 20px;\n  background: var(--famify-surface-raised);\n  transition:\n    transform 180ms ease,\n    box-shadow 180ms ease,\n    border-color 180ms ease;\n}\n.family-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-3px);\n  border-color: #74518a;\n  box-shadow: 0 14px 36px rgba(0, 0, 0, 0.3);\n}\n.family-card[_ngcontent-%COMP%]    > mat-card-content[_ngcontent-%COMP%] {\n  padding: 1.25rem 1.25rem 0.75rem;\n}\n.card-top[_ngcontent-%COMP%], \n.family-title[_ngcontent-%COMP%], \n.members-row[_ngcontent-%COMP%], \n.members-count[_ngcontent-%COMP%], \n.stats-labels[_ngcontent-%COMP%], \n.library-total[_ngcontent-%COMP%], \n.games-heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.card-top[_ngcontent-%COMP%] {\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 0.8rem;\n  margin-bottom: 1.2rem;\n}\n.family-title[_ngcontent-%COMP%] {\n  gap: 0.75rem;\n  min-width: 0;\n}\n.family-avatar[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  display: grid;\n  place-items: center;\n  flex-shrink: 0;\n  border-radius: 15px;\n  color: #f0a3dc;\n  background:\n    linear-gradient(\n      140deg,\n      #40283c,\n      #30283f);\n}\n.family-title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-bottom: 0.2rem;\n  font-size: 1rem;\n  font-weight: 750;\n}\n.family-desc[_ngcontent-%COMP%] {\n  color: var(--famify-muted);\n  font-size: 0.78rem;\n}\n.vagas-badge[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  background: var(--famify-positive-surface);\n  color: var(--famify-positive);\n  font-size: 0.73rem;\n  font-weight: 700;\n}\n.vagas-badge.ultima-vaga[_ngcontent-%COMP%] {\n  background: var(--famify-warning-surface);\n  color: var(--famify-warning);\n}\n.members-row[_ngcontent-%COMP%] {\n  justify-content: space-between;\n  gap: 0.7rem;\n  margin-bottom: 1.15rem;\n}\n.avatars-group[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding-left: 0.25rem;\n}\n.member-avatar[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  display: grid;\n  place-items: center;\n  margin-left: -0.25rem;\n  border: 2px solid var(--famify-surface-raised);\n  border-radius: 50%;\n  background: #3a3042;\n  color: #e3c9f0;\n  font-size: 0.6rem;\n  font-weight: 750;\n}\n.member-avatar.vaga-livre[_ngcontent-%COMP%] {\n  border: 1px dashed #a783bc;\n  background: #2b2233;\n  color: #dda1d2;\n  font-size: 1rem;\n}\n.members-count[_ngcontent-%COMP%] {\n  gap: 0.35rem;\n  color: #c1b5c9;\n  font-size: 0.76rem;\n  font-weight: 650;\n  white-space: nowrap;\n}\n.members-count[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], \n.library-total[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  width: 17px;\n  height: 17px;\n  font-size: 17px;\n}\n.library-stats[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.55rem;\n  padding: 0.9rem 0;\n  border-top: 1px solid #3b3045;\n  border-bottom: 1px solid #3b3045;\n}\n.stats-labels[_ngcontent-%COMP%], \n.library-total[_ngcontent-%COMP%] {\n  justify-content: space-between;\n  gap: 0.5rem;\n  color: var(--famify-muted);\n  font-size: 0.75rem;\n}\n.stats-labels[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], \n.library-total[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--famify-ink);\n  font-weight: 700;\n}\n.family-card[_ngcontent-%COMP%]   mat-progress-bar[_ngcontent-%COMP%] {\n  --mdc-linear-progress-active-indicator-color: var(--famify-magenta);\n  --mdc-linear-progress-track-color: #48354e;\n  border-radius: 99px;\n}\n.library-total[_ngcontent-%COMP%] {\n  margin-top: 0.1rem;\n}\n.library-total[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.35rem;\n}\n.library-total[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: var(--famify-violet);\n}\n.games-heading[_ngcontent-%COMP%] {\n  justify-content: space-between;\n  gap: 0.6rem;\n  margin: 0.95rem 0 0.6rem;\n  color: var(--famify-muted);\n  font-size: 0.76rem;\n  font-weight: 650;\n}\n.games-heading[_ngcontent-%COMP%]   mat-chip-set[_ngcontent-%COMP%] {\n  max-width: 70%;\n}\n.games-heading[_ngcontent-%COMP%]   mat-chip[_ngcontent-%COMP%] {\n  min-height: 24px;\n  background: #34283f;\n  color: #d3b9ff;\n  font-size: 0.68rem;\n}\n.aaa-showcase[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  gap: 0.45rem;\n}\n.aaa-thumb[_ngcontent-%COMP%] {\n  height: 67px;\n  overflow: hidden;\n  border-radius: 9px;\n  background: #17131d;\n}\n.aaa-thumb[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transition: transform 180ms ease;\n}\n.aaa-thumb[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\n  transform: scale(1.06);\n}\n.family-card[_ngcontent-%COMP%]   mat-card-actions[_ngcontent-%COMP%] {\n  padding: 0 1.25rem 1.2rem;\n}\n.btn-solicitar[_ngcontent-%COMP%] {\n  width: 100%;\n  min-height: 42px;\n  border-radius: 12px;\n  box-shadow: none;\n}\n.btn-solicitar.solicitado[_ngcontent-%COMP%] {\n  --mdc-filled-button-container-color: var(--famify-positive-surface);\n  --mdc-filled-button-label-text-color: var(--famify-positive);\n}\n.empty-state[_ngcontent-%COMP%] {\n  border: 1px dashed #5b4568;\n  border-radius: 20px;\n  background: var(--famify-surface-raised);\n  text-align: center;\n}\n.empty-state[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%] {\n  padding: 3rem 1rem;\n}\n.empty-icon[_ngcontent-%COMP%] {\n  width: 58px;\n  height: 58px;\n  display: grid;\n  place-items: center;\n  margin: 0 auto 1rem;\n  border-radius: 20px;\n  background: #35243d;\n  color: #f0a3dc;\n}\n.empty-state[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-bottom: 0.45rem;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 1.2rem;\n  color: var(--famify-muted);\n  font-size: 0.88rem;\n}\n@media (max-width: 800px) {\n  .match-header[_ngcontent-%COMP%] {\n    align-items: stretch;\n    flex-direction: column;\n    gap: 1rem;\n  }\n  .search-box[_ngcontent-%COMP%] {\n    flex: auto;\n  }\n}\n@media (max-width: 680px) {\n  .match-page[_ngcontent-%COMP%] {\n    width: calc(100% - 2rem);\n    padding-top: 2.2rem;\n  }\n  .families-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .card-top[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n  }\n}\n/*# sourceMappingURL=match.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatchComponent, [{
    type: Component,
    args: [{ selector: "app-match", imports: [
      CommonModule,
      FormsModule,
      MatButtonModule,
      MatCardModule,
      MatChipsModule,
      MatFormFieldModule,
      MatIconModule,
      MatInputModule,
      MatProgressBarModule
    ], template: `<div class="match-page">
  <div class="alerta-erro" role="alert" *ngIf="mensagemErro">{{ mensagemErro }}</div>
  <div class="carregando" *ngIf="carregando">Carregando fam\xEDlias...</div>
  <header class="match-header">
    <div class="header-text">
      <h1>Encontre sua pr\xF3xima fam\xEDlia</h1>
    </div>

    <mat-form-field appearance="outline" class="search-box">
      <mat-label>Buscar fam\xEDlias ou jogos</mat-label>
      <mat-icon matPrefix>search</mat-icon>
      <input
        matInput
        type="search"
        [(ngModel)]="termoFiltro"
        placeholder="Ex.: Elden Ring, Pixel Squad"
      />
      <button
        *ngIf="termoFiltro"
        mat-icon-button
        matSuffix
        type="button"
        aria-label="Limpar busca"
        (click)="termoFiltro = ''"
      >
        <mat-icon>close</mat-icon>
      </button>
    </mat-form-field>
  </header>

  <section class="filters-section" aria-label="Filtros por g\xEAnero">
    <div class="filter-heading">
      <mat-icon>tune</mat-icon>
      <span>Explore por afinidade</span>
    </div>
    <mat-chip-listbox aria-label="Filtrar por g\xEAnero">
      <mat-chip-option
        *ngFor="let genero of generosDisponiveis"
        [selected]="generoSelecionado === genero"
        (click)="selecionarGenero(genero)"
      >
        {{ genero }}
      </mat-chip-option>
    </mat-chip-listbox>
  </section>

  <div class="results-heading">
    <h2>Fam\xEDlias dispon\xEDveis</h2>
    <span>{{ familiasFiltradas.length }} resultados</span>
  </div>

  <section class="families-grid" *ngIf="familiasFiltradas.length > 0; else semResultados">
    <mat-card class="family-card" appearance="outlined" *ngFor="let familia of familiasFiltradas">
      <mat-card-content>
        <div class="card-top">
          <div class="family-title">
            <span class="family-avatar"><mat-icon>groups</mat-icon></span>
            <div>
              <h3>{{ familia.nome }}</h3>
              <p class="family-desc">{{ familia.descricao }}</p>
            </div>
          </div>
          <mat-chip
            class="vagas-badge"
            [class.ultima-vaga]="familia.vagasDisponiveis === 1"
          >
            {{
              familia.vagasDisponiveis === 1
                ? '\xDAltima vaga'
                : familia.vagasDisponiveis + ' vagas'
            }}
          </mat-chip>
        </div>

        <div class="members-row">
          <div class="avatars-group" aria-label="Membros atuais">
            <span
              class="member-avatar"
              *ngFor="let sigla of familia.avataresMembros"
              [attr.aria-label]="'Membro ' + sigla"
            >
              {{ sigla }}
            </span>
            <span class="member-avatar vaga-livre" title="Vaga dispon\xEDvel">+</span>
          </div>
          <span class="members-count">
            <mat-icon>group</mat-icon>
            {{ familia.membrosAtuais }}/{{ familia.limiteMembros }} membros
          </span>
        </div>

        <div class="library-stats">
          <div class="stats-labels">
            <span>Ocupa\xE7\xE3o da fam\xEDlia</span>
            <strong>{{ familia.membrosAtuais }}/{{ familia.limiteMembros }}</strong>
          </div>
          <mat-progress-bar
            mode="determinate"
            [value]="calcularPorcentagemOcupacao(familia)"
            [attr.aria-label]="'Ocupa\xE7\xE3o: ' + calcularPorcentagemOcupacao(familia) + '%'"
          ></mat-progress-bar>
          <div class="library-total">
            <span><mat-icon>sports_esports</mat-icon> Biblioteca compartilhada</span>
            <strong>{{ familia.totalJogos }} jogos</strong>
          </div>
        </div>

        <div class="games-heading">
          <span>Jogos em destaque</span>
          <mat-chip-set aria-label="G\xEAneros da fam\xEDlia">
            <mat-chip *ngFor="let genero of familia.generos">{{ genero }}</mat-chip>
          </mat-chip-set>
        </div>
        <div class="aaa-showcase">
          <div
            class="aaa-thumb"
            *ngFor="let jogo of familia.jogosDestaque"
            [title]="jogo.titulo"
          >
            <img [src]="jogo.capaUrl" [alt]="'Capa de ' + jogo.titulo" />
          </div>
        </div>
      </mat-card-content>

      <mat-card-actions>
        <button
          mat-flat-button
          color="primary"
          type="button"
          class="btn-solicitar"
          [class.solicitado]="familia.solicitado"
          (click)="solicitarEntrada(familia)"
        >
          <mat-icon>{{ familia.solicitado ? 'check_circle' : 'person_add' }}</mat-icon>
          {{ familia.solicitado ? 'Solicita\xE7\xE3o enviada' : 'Solicitar entrada' }}
        </button>
      </mat-card-actions>
    </mat-card>
  </section>

  <ng-template #semResultados>
    <mat-card class="empty-state" appearance="outlined">
      <mat-card-content>
        <span class="empty-icon"><mat-icon>search_off</mat-icon></span>
        <h3>Nenhuma fam\xEDlia compat\xEDvel encontrada</h3>
        <p>Tente remover os filtros de g\xEAnero ou pesquisar por outro t\xEDtulo.</p>
        <button
          mat-stroked-button
          color="primary"
          type="button"
          (click)="generoSelecionado = 'Todos'; termoFiltro = ''"
        >
          <mat-icon>filter_alt_off</mat-icon>
          Limpar filtros
        </button>
      </mat-card-content>
    </mat-card>
  </ng-template>
</div>
`, styles: ["/* src/app/pages/match/match.component.css */\n:host {\n  display: block;\n}\n.match-page {\n  width: min(1200px, 90%);\n  margin: 0 auto;\n  padding: 3.2rem 0 5rem;\n}\n.match-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-end;\n  gap: 2rem;\n  margin-bottom: 1.8rem;\n}\n.header-text {\n  max-width: 650px;\n}\n.header-text mat-chip-set {\n  margin-bottom: 0.9rem;\n}\n.header-text mat-chip {\n  background: #35243d;\n  color: #f3a5dc;\n  font-size: 0.76rem;\n  font-weight: 700;\n}\n.header-text mat-icon {\n  color: var(--famify-magenta);\n}\n.header-text h1 {\n  margin-bottom: 0.55rem;\n  font-size: clamp(2rem, 4vw, 3rem);\n  font-weight: 800;\n  line-height: 1.1;\n  letter-spacing: -0.06em;\n}\n.search-box {\n  flex: 0 1 400px;\n}\n.filters-section {\n  display: flex;\n  flex-direction: column;\n  gap: 0.8rem;\n  margin-bottom: 2.2rem;\n  padding: 1rem 1.2rem;\n  border: 1px solid var(--famify-border);\n  border-radius: 18px;\n  background: rgba(37, 32, 45, 0.78);\n}\n.filter-heading {\n  display: flex;\n  align-items: center;\n  gap: 0.45rem;\n  color: #dfc7ec;\n  font-size: 0.84rem;\n  font-weight: 700;\n}\n.filter-heading mat-icon {\n  width: 18px;\n  height: 18px;\n  font-size: 18px;\n}\n.filters-section mat-chip-listbox {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.4rem;\n}\n.filters-section mat-chip-option {\n  --mdc-chip-elevated-container-color: #30283a;\n  --mdc-chip-label-text-color: #ded3e4;\n  --mdc-chip-outline-color: #51425c;\n  font-size: 0.8rem;\n  font-weight: 600;\n}\n.results-heading {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1rem;\n}\n.results-heading h2 {\n  font-size: 1.2rem;\n  font-weight: 750;\n  letter-spacing: -0.03em;\n}\n.results-heading span {\n  color: var(--famify-muted);\n  font-size: 0.8rem;\n}\n.families-grid {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 1.15rem;\n}\n.family-card {\n  border-color: var(--famify-border);\n  border-radius: 20px;\n  background: var(--famify-surface-raised);\n  transition:\n    transform 180ms ease,\n    box-shadow 180ms ease,\n    border-color 180ms ease;\n}\n.family-card:hover {\n  transform: translateY(-3px);\n  border-color: #74518a;\n  box-shadow: 0 14px 36px rgba(0, 0, 0, 0.3);\n}\n.family-card > mat-card-content {\n  padding: 1.25rem 1.25rem 0.75rem;\n}\n.card-top,\n.family-title,\n.members-row,\n.members-count,\n.stats-labels,\n.library-total,\n.games-heading {\n  display: flex;\n  align-items: center;\n}\n.card-top {\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 0.8rem;\n  margin-bottom: 1.2rem;\n}\n.family-title {\n  gap: 0.75rem;\n  min-width: 0;\n}\n.family-avatar {\n  width: 44px;\n  height: 44px;\n  display: grid;\n  place-items: center;\n  flex-shrink: 0;\n  border-radius: 15px;\n  color: #f0a3dc;\n  background:\n    linear-gradient(\n      140deg,\n      #40283c,\n      #30283f);\n}\n.family-title h3 {\n  margin-bottom: 0.2rem;\n  font-size: 1rem;\n  font-weight: 750;\n}\n.family-desc {\n  color: var(--famify-muted);\n  font-size: 0.78rem;\n}\n.vagas-badge {\n  flex-shrink: 0;\n  background: var(--famify-positive-surface);\n  color: var(--famify-positive);\n  font-size: 0.73rem;\n  font-weight: 700;\n}\n.vagas-badge.ultima-vaga {\n  background: var(--famify-warning-surface);\n  color: var(--famify-warning);\n}\n.members-row {\n  justify-content: space-between;\n  gap: 0.7rem;\n  margin-bottom: 1.15rem;\n}\n.avatars-group {\n  display: flex;\n  align-items: center;\n  padding-left: 0.25rem;\n}\n.member-avatar {\n  width: 30px;\n  height: 30px;\n  display: grid;\n  place-items: center;\n  margin-left: -0.25rem;\n  border: 2px solid var(--famify-surface-raised);\n  border-radius: 50%;\n  background: #3a3042;\n  color: #e3c9f0;\n  font-size: 0.6rem;\n  font-weight: 750;\n}\n.member-avatar.vaga-livre {\n  border: 1px dashed #a783bc;\n  background: #2b2233;\n  color: #dda1d2;\n  font-size: 1rem;\n}\n.members-count {\n  gap: 0.35rem;\n  color: #c1b5c9;\n  font-size: 0.76rem;\n  font-weight: 650;\n  white-space: nowrap;\n}\n.members-count mat-icon,\n.library-total mat-icon {\n  width: 17px;\n  height: 17px;\n  font-size: 17px;\n}\n.library-stats {\n  display: flex;\n  flex-direction: column;\n  gap: 0.55rem;\n  padding: 0.9rem 0;\n  border-top: 1px solid #3b3045;\n  border-bottom: 1px solid #3b3045;\n}\n.stats-labels,\n.library-total {\n  justify-content: space-between;\n  gap: 0.5rem;\n  color: var(--famify-muted);\n  font-size: 0.75rem;\n}\n.stats-labels strong,\n.library-total strong {\n  color: var(--famify-ink);\n  font-weight: 700;\n}\n.family-card mat-progress-bar {\n  --mdc-linear-progress-active-indicator-color: var(--famify-magenta);\n  --mdc-linear-progress-track-color: #48354e;\n  border-radius: 99px;\n}\n.library-total {\n  margin-top: 0.1rem;\n}\n.library-total span {\n  display: flex;\n  align-items: center;\n  gap: 0.35rem;\n}\n.library-total mat-icon {\n  color: var(--famify-violet);\n}\n.games-heading {\n  justify-content: space-between;\n  gap: 0.6rem;\n  margin: 0.95rem 0 0.6rem;\n  color: var(--famify-muted);\n  font-size: 0.76rem;\n  font-weight: 650;\n}\n.games-heading mat-chip-set {\n  max-width: 70%;\n}\n.games-heading mat-chip {\n  min-height: 24px;\n  background: #34283f;\n  color: #d3b9ff;\n  font-size: 0.68rem;\n}\n.aaa-showcase {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  gap: 0.45rem;\n}\n.aaa-thumb {\n  height: 67px;\n  overflow: hidden;\n  border-radius: 9px;\n  background: #17131d;\n}\n.aaa-thumb img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transition: transform 180ms ease;\n}\n.aaa-thumb:hover img {\n  transform: scale(1.06);\n}\n.family-card mat-card-actions {\n  padding: 0 1.25rem 1.2rem;\n}\n.btn-solicitar {\n  width: 100%;\n  min-height: 42px;\n  border-radius: 12px;\n  box-shadow: none;\n}\n.btn-solicitar.solicitado {\n  --mdc-filled-button-container-color: var(--famify-positive-surface);\n  --mdc-filled-button-label-text-color: var(--famify-positive);\n}\n.empty-state {\n  border: 1px dashed #5b4568;\n  border-radius: 20px;\n  background: var(--famify-surface-raised);\n  text-align: center;\n}\n.empty-state mat-card-content {\n  padding: 3rem 1rem;\n}\n.empty-icon {\n  width: 58px;\n  height: 58px;\n  display: grid;\n  place-items: center;\n  margin: 0 auto 1rem;\n  border-radius: 20px;\n  background: #35243d;\n  color: #f0a3dc;\n}\n.empty-state h3 {\n  margin-bottom: 0.45rem;\n}\n.empty-state p {\n  margin-bottom: 1.2rem;\n  color: var(--famify-muted);\n  font-size: 0.88rem;\n}\n@media (max-width: 800px) {\n  .match-header {\n    align-items: stretch;\n    flex-direction: column;\n    gap: 1rem;\n  }\n  .search-box {\n    flex: auto;\n  }\n}\n@media (max-width: 680px) {\n  .match-page {\n    width: calc(100% - 2rem);\n    padding-top: 2.2rem;\n  }\n  .families-grid {\n    grid-template-columns: 1fr;\n  }\n  .card-top {\n    flex-wrap: wrap;\n  }\n}\n/*# sourceMappingURL=match.component.css.map */\n"] }]
  }], () => [{ type: ActivatedRoute }, { type: FamiliaService }, { type: GeneroService }, { type: SolicitacaoService }, { type: AuthService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MatchComponent, { className: "MatchComponent", filePath: "src/app/pages/match/match.component.ts", lineNumber: 33 });
})();

// src/app/pages/match/match.module.ts
var MatchModule = class _MatchModule {
  static \u0275fac = function MatchModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatchModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _MatchModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
    CommonModule,
    FormsModule,
    MatchComponent,
    RouterModule.forChild([
      { path: "", component: MatchComponent }
    ])
  ] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatchModule, [{
    type: NgModule,
    args: [{
      declarations: [],
      imports: [
        CommonModule,
        FormsModule,
        MatchComponent,
        RouterModule.forChild([
          { path: "", component: MatchComponent }
        ])
      ]
    }]
  }], null, null);
})();
export {
  MatchModule
};
//# sourceMappingURL=chunk-T2GCQZHS.js.map
