import {
  MatDivider,
  MatDividerModule
} from "./chunk-75RUDZUI.js";
import {
  MatPseudoCheckbox,
  SelectionModel
} from "./chunk-XEIE3JKS.js";
import {
  AuthService
} from "./chunk-ONZXE3S3.js";
import {
  MatCard,
  MatCardContent,
  MatCardModule,
  MatFormField,
  MatFormFieldModule,
  MatHint,
  MatInput,
  MatInputModule,
  MatLabel,
  MatPrefix
} from "./chunk-47P3QVWC.js";
import {
  DOWN_ARROW,
  Directionality,
  ENTER,
  FocusMonitor,
  LEFT_ARROW,
  MatButton,
  MatButtonModule,
  MatCommonModule,
  MatIcon,
  MatIconModule,
  MatRipple,
  MatRippleModule,
  RIGHT_ARROW,
  SPACE,
  UP_ARROW,
  _CdkPrivateStyleLoader,
  _IdGenerator,
  _StructuralStylesLoader,
  _animationsDisabled,
  hasModifierKey
} from "./chunk-Q2D5DFCU.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  CommonModule,
  Component,
  ContentChildren,
  DefaultValueAccessor,
  Directive,
  ElementRef,
  EventEmitter,
  FormsModule,
  HostAttributeToken,
  InjectionToken,
  Input,
  NG_VALUE_ACCESSOR,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgIf,
  NgModel,
  NgModule,
  Output,
  Router,
  RouterLink,
  RouterModule,
  ViewChild,
  ViewEncapsulation,
  booleanAttribute,
  forwardRef,
  inject,
  setClassMetadata,
  signal,
  ɵNgNoValidate,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-2SBXNMGV.js";

// node_modules/@angular/material/fesm2022/button-toggle.mjs
var _c0 = ["button"];
var _c1 = ["*"];
function MatButtonToggle_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275element(1, "mat-pseudo-checkbox", 6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.disabled);
  }
}
var MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS = new InjectionToken("MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS", {
  providedIn: "root",
  factory: MAT_BUTTON_TOGGLE_GROUP_DEFAULT_OPTIONS_FACTORY
});
function MAT_BUTTON_TOGGLE_GROUP_DEFAULT_OPTIONS_FACTORY() {
  return {
    hideSingleSelectionIndicator: false,
    hideMultipleSelectionIndicator: false,
    disabledInteractive: false
  };
}
var MAT_BUTTON_TOGGLE_GROUP = new InjectionToken("MatButtonToggleGroup");
var MAT_BUTTON_TOGGLE_GROUP_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => MatButtonToggleGroup),
  multi: true
};
var MatButtonToggleChange = class {
  source;
  value;
  constructor(source, value) {
    this.source = source;
    this.value = value;
  }
};
var MatButtonToggleGroup = class _MatButtonToggleGroup {
  _changeDetector = inject(ChangeDetectorRef);
  _dir = inject(Directionality, {
    optional: true
  });
  _multiple = false;
  _disabled = false;
  _disabledInteractive = false;
  _selectionModel;
  /**
   * Reference to the raw value that the consumer tried to assign. The real
   * value will exclude any values from this one that don't correspond to a
   * toggle. Useful for the cases where the value is assigned before the toggles
   * have been initialized or at the same that they're being swapped out.
   */
  _rawValue;
  /**
   * The method to be called in order to update ngModel.
   * Now `ngModel` binding is not supported in multiple selection mode.
   */
  _controlValueAccessorChangeFn = () => {
  };
  /** onTouch function registered via registerOnTouch (ControlValueAccessor). */
  _onTouched = () => {
  };
  /** Child button toggle buttons. */
  _buttonToggles;
  /** The appearance for all the buttons in the group. */
  appearance;
  /** `name` attribute for the underlying `input` element. */
  get name() {
    return this._name;
  }
  set name(value) {
    this._name = value;
    this._markButtonsForCheck();
  }
  _name = inject(_IdGenerator).getId("mat-button-toggle-group-");
  /** Whether the toggle group is vertical. */
  vertical;
  /** Value of the toggle group. */
  get value() {
    const selected = this._selectionModel ? this._selectionModel.selected : [];
    if (this.multiple) {
      return selected.map((toggle) => toggle.value);
    }
    return selected[0] ? selected[0].value : void 0;
  }
  set value(newValue) {
    this._setSelectionByValue(newValue);
    this.valueChange.emit(this.value);
  }
  /**
   * Event that emits whenever the value of the group changes.
   * Used to facilitate two-way data binding.
   * @docs-private
   */
  valueChange = new EventEmitter();
  /** Selected button toggles in the group. */
  get selected() {
    const selected = this._selectionModel ? this._selectionModel.selected : [];
    return this.multiple ? selected : selected[0] || null;
  }
  /** Whether multiple button toggles can be selected. */
  get multiple() {
    return this._multiple;
  }
  set multiple(value) {
    this._multiple = value;
    this._markButtonsForCheck();
  }
  /** Whether multiple button toggle group is disabled. */
  get disabled() {
    return this._disabled;
  }
  set disabled(value) {
    this._disabled = value;
    this._markButtonsForCheck();
  }
  /** Whether buttons in the group should be interactive while they're disabled. */
  get disabledInteractive() {
    return this._disabledInteractive;
  }
  set disabledInteractive(value) {
    this._disabledInteractive = value;
    this._markButtonsForCheck();
  }
  /** The layout direction of the toggle button group. */
  get dir() {
    return this._dir && this._dir.value === "rtl" ? "rtl" : "ltr";
  }
  /** Event emitted when the group's value changes. */
  change = new EventEmitter();
  /** Whether checkmark indicator for single-selection button toggle groups is hidden. */
  get hideSingleSelectionIndicator() {
    return this._hideSingleSelectionIndicator;
  }
  set hideSingleSelectionIndicator(value) {
    this._hideSingleSelectionIndicator = value;
    this._markButtonsForCheck();
  }
  _hideSingleSelectionIndicator;
  /** Whether checkmark indicator for multiple-selection button toggle groups is hidden. */
  get hideMultipleSelectionIndicator() {
    return this._hideMultipleSelectionIndicator;
  }
  set hideMultipleSelectionIndicator(value) {
    this._hideMultipleSelectionIndicator = value;
    this._markButtonsForCheck();
  }
  _hideMultipleSelectionIndicator;
  constructor() {
    const defaultOptions = inject(MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS, {
      optional: true
    });
    this.appearance = defaultOptions && defaultOptions.appearance ? defaultOptions.appearance : "standard";
    this.hideSingleSelectionIndicator = defaultOptions?.hideSingleSelectionIndicator ?? false;
    this.hideMultipleSelectionIndicator = defaultOptions?.hideMultipleSelectionIndicator ?? false;
  }
  ngOnInit() {
    this._selectionModel = new SelectionModel(this.multiple, void 0, false);
  }
  ngAfterContentInit() {
    this._selectionModel.select(...this._buttonToggles.filter((toggle) => toggle.checked));
    if (!this.multiple) {
      this._initializeTabIndex();
    }
  }
  /**
   * Sets the model value. Implemented as part of ControlValueAccessor.
   * @param value Value to be set to the model.
   */
  writeValue(value) {
    this.value = value;
    this._changeDetector.markForCheck();
  }
  // Implemented as part of ControlValueAccessor.
  registerOnChange(fn) {
    this._controlValueAccessorChangeFn = fn;
  }
  // Implemented as part of ControlValueAccessor.
  registerOnTouched(fn) {
    this._onTouched = fn;
  }
  // Implemented as part of ControlValueAccessor.
  setDisabledState(isDisabled) {
    this.disabled = isDisabled;
  }
  /** Handle keydown event calling to single-select button toggle. */
  _keydown(event) {
    if (this.multiple || this.disabled || hasModifierKey(event)) {
      return;
    }
    const target = event.target;
    const buttonId = target.id;
    const index = this._buttonToggles.toArray().findIndex((toggle) => {
      return toggle.buttonId === buttonId;
    });
    let nextButton = null;
    switch (event.keyCode) {
      case SPACE:
      case ENTER:
        nextButton = this._buttonToggles.get(index) || null;
        break;
      case UP_ARROW:
        nextButton = this._getNextButton(index, -1);
        break;
      case LEFT_ARROW:
        nextButton = this._getNextButton(index, this.dir === "ltr" ? -1 : 1);
        break;
      case DOWN_ARROW:
        nextButton = this._getNextButton(index, 1);
        break;
      case RIGHT_ARROW:
        nextButton = this._getNextButton(index, this.dir === "ltr" ? 1 : -1);
        break;
      default:
        return;
    }
    if (nextButton) {
      event.preventDefault();
      nextButton._onButtonClick();
      nextButton.focus();
    }
  }
  /** Dispatch change event with current selection and group value. */
  _emitChangeEvent(toggle) {
    const event = new MatButtonToggleChange(toggle, this.value);
    this._rawValue = event.value;
    this._controlValueAccessorChangeFn(event.value);
    this.change.emit(event);
  }
  /**
   * Syncs a button toggle's selected state with the model value.
   * @param toggle Toggle to be synced.
   * @param select Whether the toggle should be selected.
   * @param isUserInput Whether the change was a result of a user interaction.
   * @param deferEvents Whether to defer emitting the change events.
   */
  _syncButtonToggle(toggle, select, isUserInput = false, deferEvents = false) {
    if (!this.multiple && this.selected && !toggle.checked) {
      this.selected.checked = false;
    }
    if (this._selectionModel) {
      if (select) {
        this._selectionModel.select(toggle);
      } else {
        this._selectionModel.deselect(toggle);
      }
    } else {
      deferEvents = true;
    }
    if (deferEvents) {
      Promise.resolve().then(() => this._updateModelValue(toggle, isUserInput));
    } else {
      this._updateModelValue(toggle, isUserInput);
    }
  }
  /** Checks whether a button toggle is selected. */
  _isSelected(toggle) {
    return this._selectionModel && this._selectionModel.isSelected(toggle);
  }
  /** Determines whether a button toggle should be checked on init. */
  _isPrechecked(toggle) {
    if (typeof this._rawValue === "undefined") {
      return false;
    }
    if (this.multiple && Array.isArray(this._rawValue)) {
      return this._rawValue.some((value) => toggle.value != null && value === toggle.value);
    }
    return toggle.value === this._rawValue;
  }
  /** Initializes the tabindex attribute using the radio pattern. */
  _initializeTabIndex() {
    this._buttonToggles.forEach((toggle) => {
      toggle.tabIndex = -1;
    });
    if (this.selected) {
      this.selected.tabIndex = 0;
    } else {
      for (let i = 0; i < this._buttonToggles.length; i++) {
        const toggle = this._buttonToggles.get(i);
        if (!toggle.disabled) {
          toggle.tabIndex = 0;
          break;
        }
      }
    }
  }
  /** Obtain the subsequent toggle to which the focus shifts. */
  _getNextButton(startIndex, offset) {
    const items = this._buttonToggles;
    for (let i = 1; i <= items.length; i++) {
      const index = (startIndex + offset * i + items.length) % items.length;
      const item = items.get(index);
      if (item && !item.disabled) {
        return item;
      }
    }
    return null;
  }
  /** Updates the selection state of the toggles in the group based on a value. */
  _setSelectionByValue(value) {
    this._rawValue = value;
    if (!this._buttonToggles) {
      return;
    }
    const toggles = this._buttonToggles.toArray();
    if (this.multiple && value) {
      if (!Array.isArray(value) && (typeof ngDevMode === "undefined" || ngDevMode)) {
        throw Error("Value must be an array in multiple-selection mode.");
      }
      this._clearSelection();
      value.forEach((currentValue) => this._selectValue(currentValue, toggles));
    } else {
      this._clearSelection();
      this._selectValue(value, toggles);
    }
    if (!this.multiple && toggles.every((toggle) => toggle.tabIndex === -1)) {
      for (const toggle of toggles) {
        if (!toggle.disabled) {
          toggle.tabIndex = 0;
          break;
        }
      }
    }
  }
  /** Clears the selected toggles. */
  _clearSelection() {
    this._selectionModel.clear();
    this._buttonToggles.forEach((toggle) => {
      toggle.checked = false;
      if (!this.multiple) {
        toggle.tabIndex = -1;
      }
    });
  }
  /** Selects a value if there's a toggle that corresponds to it. */
  _selectValue(value, toggles) {
    for (const toggle of toggles) {
      if (toggle.value === value) {
        toggle.checked = true;
        this._selectionModel.select(toggle);
        if (!this.multiple) {
          toggle.tabIndex = 0;
        }
        break;
      }
    }
  }
  /** Syncs up the group's value with the model and emits the change event. */
  _updateModelValue(toggle, isUserInput) {
    if (isUserInput) {
      this._emitChangeEvent(toggle);
    }
    this.valueChange.emit(this.value);
  }
  /** Marks all of the child button toggles to be checked. */
  _markButtonsForCheck() {
    this._buttonToggles?.forEach((toggle) => toggle._markForCheck());
  }
  static \u0275fac = function MatButtonToggleGroup_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatButtonToggleGroup)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatButtonToggleGroup,
    selectors: [["mat-button-toggle-group"]],
    contentQueries: function MatButtonToggleGroup_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, MatButtonToggle, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._buttonToggles = _t);
      }
    },
    hostAttrs: [1, "mat-button-toggle-group"],
    hostVars: 6,
    hostBindings: function MatButtonToggleGroup_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("keydown", function MatButtonToggleGroup_keydown_HostBindingHandler($event) {
          return ctx._keydown($event);
        });
      }
      if (rf & 2) {
        \u0275\u0275attribute("role", ctx.multiple ? "group" : "radiogroup")("aria-disabled", ctx.disabled);
        \u0275\u0275classProp("mat-button-toggle-vertical", ctx.vertical)("mat-button-toggle-group-appearance-standard", ctx.appearance === "standard");
      }
    },
    inputs: {
      appearance: "appearance",
      name: "name",
      vertical: [2, "vertical", "vertical", booleanAttribute],
      value: "value",
      multiple: [2, "multiple", "multiple", booleanAttribute],
      disabled: [2, "disabled", "disabled", booleanAttribute],
      disabledInteractive: [2, "disabledInteractive", "disabledInteractive", booleanAttribute],
      hideSingleSelectionIndicator: [2, "hideSingleSelectionIndicator", "hideSingleSelectionIndicator", booleanAttribute],
      hideMultipleSelectionIndicator: [2, "hideMultipleSelectionIndicator", "hideMultipleSelectionIndicator", booleanAttribute]
    },
    outputs: {
      valueChange: "valueChange",
      change: "change"
    },
    exportAs: ["matButtonToggleGroup"],
    features: [\u0275\u0275ProvidersFeature([MAT_BUTTON_TOGGLE_GROUP_VALUE_ACCESSOR, {
      provide: MAT_BUTTON_TOGGLE_GROUP,
      useExisting: _MatButtonToggleGroup
    }])]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatButtonToggleGroup, [{
    type: Directive,
    args: [{
      selector: "mat-button-toggle-group",
      providers: [MAT_BUTTON_TOGGLE_GROUP_VALUE_ACCESSOR, {
        provide: MAT_BUTTON_TOGGLE_GROUP,
        useExisting: MatButtonToggleGroup
      }],
      host: {
        "class": "mat-button-toggle-group",
        "(keydown)": "_keydown($event)",
        "[attr.role]": "multiple ? 'group' : 'radiogroup'",
        "[attr.aria-disabled]": "disabled",
        "[class.mat-button-toggle-vertical]": "vertical",
        "[class.mat-button-toggle-group-appearance-standard]": 'appearance === "standard"'
      },
      exportAs: "matButtonToggleGroup"
    }]
  }], () => [], {
    _buttonToggles: [{
      type: ContentChildren,
      args: [forwardRef(() => MatButtonToggle), {
        // Note that this would technically pick up toggles
        // from nested groups, but that's not a case that we support.
        descendants: true
      }]
    }],
    appearance: [{
      type: Input
    }],
    name: [{
      type: Input
    }],
    vertical: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    value: [{
      type: Input
    }],
    valueChange: [{
      type: Output
    }],
    multiple: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    disabledInteractive: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    change: [{
      type: Output
    }],
    hideSingleSelectionIndicator: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    hideMultipleSelectionIndicator: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  });
})();
var MatButtonToggle = class _MatButtonToggle {
  _changeDetectorRef = inject(ChangeDetectorRef);
  _elementRef = inject(ElementRef);
  _focusMonitor = inject(FocusMonitor);
  _idGenerator = inject(_IdGenerator);
  _animationDisabled = _animationsDisabled();
  _checked = false;
  /**
   * Attached to the aria-label attribute of the host element. In most cases, aria-labelledby will
   * take precedence so this may be omitted.
   */
  ariaLabel;
  /**
   * Users can specify the `aria-labelledby` attribute which will be forwarded to the input element
   */
  ariaLabelledby = null;
  /** Underlying native `button` element. */
  _buttonElement;
  /** The parent button toggle group (exclusive selection). Optional. */
  buttonToggleGroup;
  /** Unique ID for the underlying `button` element. */
  get buttonId() {
    return `${this.id}-button`;
  }
  /** The unique ID for this button toggle. */
  id;
  /** HTML's 'name' attribute used to group radios for unique selection. */
  name;
  /** MatButtonToggleGroup reads this to assign its own value. */
  value;
  /** Tabindex of the toggle. */
  get tabIndex() {
    return this._tabIndex();
  }
  set tabIndex(value) {
    this._tabIndex.set(value);
  }
  _tabIndex;
  /** Whether ripples are disabled on the button toggle. */
  disableRipple;
  /** The appearance style of the button. */
  get appearance() {
    return this.buttonToggleGroup ? this.buttonToggleGroup.appearance : this._appearance;
  }
  set appearance(value) {
    this._appearance = value;
  }
  _appearance;
  /** Whether the button is checked. */
  get checked() {
    return this.buttonToggleGroup ? this.buttonToggleGroup._isSelected(this) : this._checked;
  }
  set checked(value) {
    if (value !== this._checked) {
      this._checked = value;
      if (this.buttonToggleGroup) {
        this.buttonToggleGroup._syncButtonToggle(this, this._checked);
      }
      this._changeDetectorRef.markForCheck();
    }
  }
  /** Whether the button is disabled. */
  get disabled() {
    return this._disabled || this.buttonToggleGroup && this.buttonToggleGroup.disabled;
  }
  set disabled(value) {
    this._disabled = value;
  }
  _disabled = false;
  /** Whether the button should remain interactive when it is disabled. */
  get disabledInteractive() {
    return this._disabledInteractive || this.buttonToggleGroup !== null && this.buttonToggleGroup.disabledInteractive;
  }
  set disabledInteractive(value) {
    this._disabledInteractive = value;
  }
  _disabledInteractive;
  /** Event emitted when the group value changes. */
  change = new EventEmitter();
  constructor() {
    inject(_CdkPrivateStyleLoader).load(_StructuralStylesLoader);
    const toggleGroup = inject(MAT_BUTTON_TOGGLE_GROUP, {
      optional: true
    });
    const defaultTabIndex = inject(new HostAttributeToken("tabindex"), {
      optional: true
    }) || "";
    const defaultOptions = inject(MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS, {
      optional: true
    });
    this._tabIndex = signal(parseInt(defaultTabIndex) || 0, ...ngDevMode ? [{
      debugName: "_tabIndex"
    }] : []);
    this.buttonToggleGroup = toggleGroup;
    this.appearance = defaultOptions && defaultOptions.appearance ? defaultOptions.appearance : "standard";
    this.disabledInteractive = defaultOptions?.disabledInteractive ?? false;
  }
  ngOnInit() {
    const group = this.buttonToggleGroup;
    this.id = this.id || this._idGenerator.getId("mat-button-toggle-");
    if (group) {
      if (group._isPrechecked(this)) {
        this.checked = true;
      } else if (group._isSelected(this) !== this._checked) {
        group._syncButtonToggle(this, this._checked);
      }
    }
  }
  ngAfterViewInit() {
    if (!this._animationDisabled) {
      this._elementRef.nativeElement.classList.add("mat-button-toggle-animations-enabled");
    }
    this._focusMonitor.monitor(this._elementRef, true);
  }
  ngOnDestroy() {
    const group = this.buttonToggleGroup;
    this._focusMonitor.stopMonitoring(this._elementRef);
    if (group && group._isSelected(this)) {
      group._syncButtonToggle(this, false, false, true);
    }
  }
  /** Focuses the button. */
  focus(options) {
    this._buttonElement.nativeElement.focus(options);
  }
  /** Checks the button toggle due to an interaction with the underlying native button. */
  _onButtonClick() {
    if (this.disabled) {
      return;
    }
    const newChecked = this.isSingleSelector() ? true : !this._checked;
    if (newChecked !== this._checked) {
      this._checked = newChecked;
      if (this.buttonToggleGroup) {
        this.buttonToggleGroup._syncButtonToggle(this, this._checked, true);
        this.buttonToggleGroup._onTouched();
      }
    }
    if (this.isSingleSelector()) {
      const focusable = this.buttonToggleGroup._buttonToggles.find((toggle) => {
        return toggle.tabIndex === 0;
      });
      if (focusable) {
        focusable.tabIndex = -1;
      }
      this.tabIndex = 0;
    }
    this.change.emit(new MatButtonToggleChange(this, this.value));
  }
  /**
   * Marks the button toggle as needing checking for change detection.
   * This method is exposed because the parent button toggle group will directly
   * update bound properties of the radio button.
   */
  _markForCheck() {
    this._changeDetectorRef.markForCheck();
  }
  /** Gets the name that should be assigned to the inner DOM node. */
  _getButtonName() {
    if (this.isSingleSelector()) {
      return this.buttonToggleGroup.name;
    }
    return this.name || null;
  }
  /** Whether the toggle is in single selection mode. */
  isSingleSelector() {
    return this.buttonToggleGroup && !this.buttonToggleGroup.multiple;
  }
  static \u0275fac = function MatButtonToggle_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatButtonToggle)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatButtonToggle,
    selectors: [["mat-button-toggle"]],
    viewQuery: function MatButtonToggle_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._buttonElement = _t.first);
      }
    },
    hostAttrs: ["role", "presentation", 1, "mat-button-toggle"],
    hostVars: 14,
    hostBindings: function MatButtonToggle_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("focus", function MatButtonToggle_focus_HostBindingHandler() {
          return ctx.focus();
        });
      }
      if (rf & 2) {
        \u0275\u0275attribute("aria-label", null)("aria-labelledby", null)("id", ctx.id)("name", null);
        \u0275\u0275classProp("mat-button-toggle-standalone", !ctx.buttonToggleGroup)("mat-button-toggle-checked", ctx.checked)("mat-button-toggle-disabled", ctx.disabled)("mat-button-toggle-disabled-interactive", ctx.disabledInteractive)("mat-button-toggle-appearance-standard", ctx.appearance === "standard");
      }
    },
    inputs: {
      ariaLabel: [0, "aria-label", "ariaLabel"],
      ariaLabelledby: [0, "aria-labelledby", "ariaLabelledby"],
      id: "id",
      name: "name",
      value: "value",
      tabIndex: "tabIndex",
      disableRipple: [2, "disableRipple", "disableRipple", booleanAttribute],
      appearance: "appearance",
      checked: [2, "checked", "checked", booleanAttribute],
      disabled: [2, "disabled", "disabled", booleanAttribute],
      disabledInteractive: [2, "disabledInteractive", "disabledInteractive", booleanAttribute]
    },
    outputs: {
      change: "change"
    },
    exportAs: ["matButtonToggle"],
    ngContentSelectors: _c1,
    decls: 7,
    vars: 13,
    consts: [["button", ""], ["type", "button", 1, "mat-button-toggle-button", "mat-focus-indicator", 3, "click", "id", "disabled"], [1, "mat-button-toggle-checkbox-wrapper"], [1, "mat-button-toggle-label-content"], [1, "mat-button-toggle-focus-overlay"], ["matRipple", "", 1, "mat-button-toggle-ripple", 3, "matRippleTrigger", "matRippleDisabled"], ["state", "checked", "aria-hidden", "true", "appearance", "minimal", 3, "disabled"]],
    template: function MatButtonToggle_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275projectionDef();
        \u0275\u0275elementStart(0, "button", 1, 0);
        \u0275\u0275listener("click", function MatButtonToggle_Template_button_click_0_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx._onButtonClick());
        });
        \u0275\u0275conditionalCreate(2, MatButtonToggle_Conditional_2_Template, 2, 1, "div", 2);
        \u0275\u0275elementStart(3, "span", 3);
        \u0275\u0275projection(4);
        \u0275\u0275elementEnd()();
        \u0275\u0275element(5, "span", 4)(6, "span", 5);
      }
      if (rf & 2) {
        const button_r3 = \u0275\u0275reference(1);
        \u0275\u0275property("id", ctx.buttonId)("disabled", ctx.disabled && !ctx.disabledInteractive || null);
        \u0275\u0275attribute("role", ctx.isSingleSelector() ? "radio" : "button")("tabindex", ctx.disabled && !ctx.disabledInteractive ? -1 : ctx.tabIndex)("aria-pressed", !ctx.isSingleSelector() ? ctx.checked : null)("aria-checked", ctx.isSingleSelector() ? ctx.checked : null)("name", ctx._getButtonName())("aria-label", ctx.ariaLabel)("aria-labelledby", ctx.ariaLabelledby)("aria-disabled", ctx.disabled && ctx.disabledInteractive ? "true" : null);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.buttonToggleGroup && (!ctx.buttonToggleGroup.multiple && !ctx.buttonToggleGroup.hideSingleSelectionIndicator || ctx.buttonToggleGroup.multiple && !ctx.buttonToggleGroup.hideMultipleSelectionIndicator) ? 2 : -1);
        \u0275\u0275advance(4);
        \u0275\u0275property("matRippleTrigger", button_r3)("matRippleDisabled", ctx.disableRipple || ctx.disabled);
      }
    },
    dependencies: [MatRipple, MatPseudoCheckbox],
    styles: [".mat-button-toggle-standalone,.mat-button-toggle-group{position:relative;display:inline-flex;flex-direction:row;white-space:nowrap;overflow:hidden;-webkit-tap-highlight-color:rgba(0,0,0,0);border-radius:var(--mat-button-toggle-legacy-shape);transform:translateZ(0)}.mat-button-toggle-standalone:not([class*=mat-elevation-z]),.mat-button-toggle-group:not([class*=mat-elevation-z]){box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)}@media(forced-colors: active){.mat-button-toggle-standalone,.mat-button-toggle-group{outline:solid 1px}}.mat-button-toggle-standalone.mat-button-toggle-appearance-standard,.mat-button-toggle-group-appearance-standard{border-radius:var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));border:solid 1px var(--mat-button-toggle-divider-color, var(--mat-sys-outline))}.mat-button-toggle-standalone.mat-button-toggle-appearance-standard .mat-pseudo-checkbox,.mat-button-toggle-group-appearance-standard .mat-pseudo-checkbox{--mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--mat-button-toggle-selected-state-text-color, var(--mat-sys-on-secondary-container))}.mat-button-toggle-standalone.mat-button-toggle-appearance-standard:not([class*=mat-elevation-z]),.mat-button-toggle-group-appearance-standard:not([class*=mat-elevation-z]){box-shadow:none}@media(forced-colors: active){.mat-button-toggle-standalone.mat-button-toggle-appearance-standard,.mat-button-toggle-group-appearance-standard{outline:0}}.mat-button-toggle-vertical{flex-direction:column}.mat-button-toggle-vertical .mat-button-toggle-label-content{display:block}.mat-button-toggle{white-space:nowrap;position:relative;color:var(--mat-button-toggle-legacy-text-color);font-family:var(--mat-button-toggle-legacy-label-text-font);font-size:var(--mat-button-toggle-legacy-label-text-size);line-height:var(--mat-button-toggle-legacy-label-text-line-height);font-weight:var(--mat-button-toggle-legacy-label-text-weight);letter-spacing:var(--mat-button-toggle-legacy-label-text-tracking);--mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--mat-button-toggle-legacy-selected-state-text-color)}.mat-button-toggle.cdk-keyboard-focused .mat-button-toggle-focus-overlay{opacity:var(--mat-button-toggle-legacy-focus-state-layer-opacity)}.mat-button-toggle .mat-icon svg{vertical-align:top}.mat-button-toggle-checkbox-wrapper{display:inline-block;justify-content:flex-start;align-items:center;width:0;height:18px;line-height:18px;overflow:hidden;box-sizing:border-box;position:absolute;top:50%;left:16px;transform:translate3d(0, -50%, 0)}[dir=rtl] .mat-button-toggle-checkbox-wrapper{left:auto;right:16px}.mat-button-toggle-appearance-standard .mat-button-toggle-checkbox-wrapper{left:12px}[dir=rtl] .mat-button-toggle-appearance-standard .mat-button-toggle-checkbox-wrapper{left:auto;right:12px}.mat-button-toggle-checked .mat-button-toggle-checkbox-wrapper{width:18px}.mat-button-toggle-animations-enabled .mat-button-toggle-checkbox-wrapper{transition:width 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-button-toggle-vertical .mat-button-toggle-checkbox-wrapper{transition:none}.mat-button-toggle-checked{color:var(--mat-button-toggle-legacy-selected-state-text-color);background-color:var(--mat-button-toggle-legacy-selected-state-background-color)}.mat-button-toggle-disabled{pointer-events:none;color:var(--mat-button-toggle-legacy-disabled-state-text-color);background-color:var(--mat-button-toggle-legacy-disabled-state-background-color);--mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color: var(--mat-button-toggle-legacy-disabled-state-text-color)}.mat-button-toggle-disabled.mat-button-toggle-checked{background-color:var(--mat-button-toggle-legacy-disabled-selected-state-background-color)}.mat-button-toggle-disabled-interactive{pointer-events:auto}.mat-button-toggle-appearance-standard{color:var(--mat-button-toggle-text-color, var(--mat-sys-on-surface));background-color:var(--mat-button-toggle-background-color, transparent);font-family:var(--mat-button-toggle-label-text-font, var(--mat-sys-label-large-font));font-size:var(--mat-button-toggle-label-text-size, var(--mat-sys-label-large-size));line-height:var(--mat-button-toggle-label-text-line-height, var(--mat-sys-label-large-line-height));font-weight:var(--mat-button-toggle-label-text-weight, var(--mat-sys-label-large-weight));letter-spacing:var(--mat-button-toggle-label-text-tracking, var(--mat-sys-label-large-tracking))}.mat-button-toggle-group-appearance-standard .mat-button-toggle-appearance-standard+.mat-button-toggle-appearance-standard{border-left:solid 1px var(--mat-button-toggle-divider-color, var(--mat-sys-outline))}[dir=rtl] .mat-button-toggle-group-appearance-standard .mat-button-toggle-appearance-standard+.mat-button-toggle-appearance-standard{border-left:none;border-right:solid 1px var(--mat-button-toggle-divider-color, var(--mat-sys-outline))}.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical .mat-button-toggle-appearance-standard+.mat-button-toggle-appearance-standard{border-left:none;border-right:none;border-top:solid 1px var(--mat-button-toggle-divider-color, var(--mat-sys-outline))}.mat-button-toggle-appearance-standard.mat-button-toggle-checked{color:var(--mat-button-toggle-selected-state-text-color, var(--mat-sys-on-secondary-container));background-color:var(--mat-button-toggle-selected-state-background-color, var(--mat-sys-secondary-container))}.mat-button-toggle-appearance-standard.mat-button-toggle-disabled{color:var(--mat-button-toggle-disabled-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));background-color:var(--mat-button-toggle-disabled-state-background-color, transparent)}.mat-button-toggle-appearance-standard.mat-button-toggle-disabled .mat-pseudo-checkbox{--mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color: var(--mat-button-toggle-disabled-selected-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-button-toggle-appearance-standard.mat-button-toggle-disabled.mat-button-toggle-checked{color:var(--mat-button-toggle-disabled-selected-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));background-color:var(--mat-button-toggle-disabled-selected-state-background-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent))}.mat-button-toggle-appearance-standard .mat-button-toggle-focus-overlay{background-color:var(--mat-button-toggle-state-layer-color, var(--mat-sys-on-surface))}.mat-button-toggle-appearance-standard:hover .mat-button-toggle-focus-overlay{opacity:var(--mat-button-toggle-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity))}.mat-button-toggle-appearance-standard.cdk-keyboard-focused .mat-button-toggle-focus-overlay{opacity:var(--mat-button-toggle-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity))}@media(hover: none){.mat-button-toggle-appearance-standard:hover .mat-button-toggle-focus-overlay{display:none}}.mat-button-toggle-label-content{-webkit-user-select:none;user-select:none;display:inline-block;padding:0 16px;line-height:var(--mat-button-toggle-legacy-height);position:relative}.mat-button-toggle-appearance-standard .mat-button-toggle-label-content{padding:0 12px;line-height:var(--mat-button-toggle-height, 40px)}.mat-button-toggle-label-content>*{vertical-align:middle}.mat-button-toggle-focus-overlay{top:0;left:0;right:0;bottom:0;position:absolute;border-radius:inherit;pointer-events:none;opacity:0;background-color:var(--mat-button-toggle-legacy-state-layer-color)}@media(forced-colors: active){.mat-button-toggle-checked .mat-button-toggle-focus-overlay{border-bottom:solid 500px;opacity:.5;height:0}.mat-button-toggle-checked:hover .mat-button-toggle-focus-overlay{opacity:.6}.mat-button-toggle-checked.mat-button-toggle-appearance-standard .mat-button-toggle-focus-overlay{border-bottom:solid 500px}}.mat-button-toggle .mat-button-toggle-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-button-toggle-button{border:0;background:none;color:inherit;padding:0;margin:0;font:inherit;outline:none;width:100%;cursor:pointer}.mat-button-toggle-animations-enabled .mat-button-toggle-button{transition:padding 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-button-toggle-vertical .mat-button-toggle-button{transition:none}.mat-button-toggle-disabled .mat-button-toggle-button{cursor:default}.mat-button-toggle-button::-moz-focus-inner{border:0}.mat-button-toggle-checked .mat-button-toggle-button:has(.mat-button-toggle-checkbox-wrapper){padding-left:30px}[dir=rtl] .mat-button-toggle-checked .mat-button-toggle-button:has(.mat-button-toggle-checkbox-wrapper){padding-left:0;padding-right:30px}.mat-button-toggle-standalone.mat-button-toggle-appearance-standard{--mat-focus-indicator-border-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large))}.mat-button-toggle-group-appearance-standard:not(.mat-button-toggle-vertical) .mat-button-toggle:last-of-type .mat-button-toggle-button::before{border-top-right-radius:var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));border-bottom-right-radius:var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large))}.mat-button-toggle-group-appearance-standard:not(.mat-button-toggle-vertical) .mat-button-toggle:first-of-type .mat-button-toggle-button::before{border-top-left-radius:var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));border-bottom-left-radius:var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large))}.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical .mat-button-toggle:last-of-type .mat-button-toggle-button::before{border-bottom-right-radius:var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));border-bottom-left-radius:var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large))}.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical .mat-button-toggle:first-of-type .mat-button-toggle-button::before{border-top-right-radius:var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));border-top-left-radius:var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large))}\n"],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatButtonToggle, [{
    type: Component,
    args: [{
      selector: "mat-button-toggle",
      encapsulation: ViewEncapsulation.None,
      exportAs: "matButtonToggle",
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        "[class.mat-button-toggle-standalone]": "!buttonToggleGroup",
        "[class.mat-button-toggle-checked]": "checked",
        "[class.mat-button-toggle-disabled]": "disabled",
        "[class.mat-button-toggle-disabled-interactive]": "disabledInteractive",
        "[class.mat-button-toggle-appearance-standard]": 'appearance === "standard"',
        "class": "mat-button-toggle",
        "[attr.aria-label]": "null",
        "[attr.aria-labelledby]": "null",
        "[attr.id]": "id",
        "[attr.name]": "null",
        "(focus)": "focus()",
        "role": "presentation"
      },
      imports: [MatRipple, MatPseudoCheckbox],
      template: `<button #button class="mat-button-toggle-button mat-focus-indicator"
        type="button"
        [id]="buttonId"
        [attr.role]="isSingleSelector() ? 'radio' : 'button'"
        [attr.tabindex]="disabled && !disabledInteractive ? -1 : tabIndex"
        [attr.aria-pressed]="!isSingleSelector() ? checked : null"
        [attr.aria-checked]="isSingleSelector() ? checked : null"
        [disabled]="(disabled && !disabledInteractive) || null"
        [attr.name]="_getButtonName()"
        [attr.aria-label]="ariaLabel"
        [attr.aria-labelledby]="ariaLabelledby"
        [attr.aria-disabled]="disabled && disabledInteractive ? 'true' : null"
        (click)="_onButtonClick()">
  @if (buttonToggleGroup && (
    !buttonToggleGroup.multiple && !buttonToggleGroup.hideSingleSelectionIndicator ||
    buttonToggleGroup.multiple && !buttonToggleGroup.hideMultipleSelectionIndicator)
  ) {
    <div class="mat-button-toggle-checkbox-wrapper">
      <mat-pseudo-checkbox
        [disabled]="disabled"
        state="checked"
        aria-hidden="true"
        appearance="minimal"/>
    </div>
  }

  <span class="mat-button-toggle-label-content">
    <ng-content></ng-content>
  </span>
</button>

<span class="mat-button-toggle-focus-overlay"></span>
<span class="mat-button-toggle-ripple" matRipple
     [matRippleTrigger]="button"
     [matRippleDisabled]="disableRipple || disabled">
</span>
`,
      styles: [".mat-button-toggle-standalone,.mat-button-toggle-group{position:relative;display:inline-flex;flex-direction:row;white-space:nowrap;overflow:hidden;-webkit-tap-highlight-color:rgba(0,0,0,0);border-radius:var(--mat-button-toggle-legacy-shape);transform:translateZ(0)}.mat-button-toggle-standalone:not([class*=mat-elevation-z]),.mat-button-toggle-group:not([class*=mat-elevation-z]){box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)}@media(forced-colors: active){.mat-button-toggle-standalone,.mat-button-toggle-group{outline:solid 1px}}.mat-button-toggle-standalone.mat-button-toggle-appearance-standard,.mat-button-toggle-group-appearance-standard{border-radius:var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));border:solid 1px var(--mat-button-toggle-divider-color, var(--mat-sys-outline))}.mat-button-toggle-standalone.mat-button-toggle-appearance-standard .mat-pseudo-checkbox,.mat-button-toggle-group-appearance-standard .mat-pseudo-checkbox{--mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--mat-button-toggle-selected-state-text-color, var(--mat-sys-on-secondary-container))}.mat-button-toggle-standalone.mat-button-toggle-appearance-standard:not([class*=mat-elevation-z]),.mat-button-toggle-group-appearance-standard:not([class*=mat-elevation-z]){box-shadow:none}@media(forced-colors: active){.mat-button-toggle-standalone.mat-button-toggle-appearance-standard,.mat-button-toggle-group-appearance-standard{outline:0}}.mat-button-toggle-vertical{flex-direction:column}.mat-button-toggle-vertical .mat-button-toggle-label-content{display:block}.mat-button-toggle{white-space:nowrap;position:relative;color:var(--mat-button-toggle-legacy-text-color);font-family:var(--mat-button-toggle-legacy-label-text-font);font-size:var(--mat-button-toggle-legacy-label-text-size);line-height:var(--mat-button-toggle-legacy-label-text-line-height);font-weight:var(--mat-button-toggle-legacy-label-text-weight);letter-spacing:var(--mat-button-toggle-legacy-label-text-tracking);--mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--mat-button-toggle-legacy-selected-state-text-color)}.mat-button-toggle.cdk-keyboard-focused .mat-button-toggle-focus-overlay{opacity:var(--mat-button-toggle-legacy-focus-state-layer-opacity)}.mat-button-toggle .mat-icon svg{vertical-align:top}.mat-button-toggle-checkbox-wrapper{display:inline-block;justify-content:flex-start;align-items:center;width:0;height:18px;line-height:18px;overflow:hidden;box-sizing:border-box;position:absolute;top:50%;left:16px;transform:translate3d(0, -50%, 0)}[dir=rtl] .mat-button-toggle-checkbox-wrapper{left:auto;right:16px}.mat-button-toggle-appearance-standard .mat-button-toggle-checkbox-wrapper{left:12px}[dir=rtl] .mat-button-toggle-appearance-standard .mat-button-toggle-checkbox-wrapper{left:auto;right:12px}.mat-button-toggle-checked .mat-button-toggle-checkbox-wrapper{width:18px}.mat-button-toggle-animations-enabled .mat-button-toggle-checkbox-wrapper{transition:width 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-button-toggle-vertical .mat-button-toggle-checkbox-wrapper{transition:none}.mat-button-toggle-checked{color:var(--mat-button-toggle-legacy-selected-state-text-color);background-color:var(--mat-button-toggle-legacy-selected-state-background-color)}.mat-button-toggle-disabled{pointer-events:none;color:var(--mat-button-toggle-legacy-disabled-state-text-color);background-color:var(--mat-button-toggle-legacy-disabled-state-background-color);--mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color: var(--mat-button-toggle-legacy-disabled-state-text-color)}.mat-button-toggle-disabled.mat-button-toggle-checked{background-color:var(--mat-button-toggle-legacy-disabled-selected-state-background-color)}.mat-button-toggle-disabled-interactive{pointer-events:auto}.mat-button-toggle-appearance-standard{color:var(--mat-button-toggle-text-color, var(--mat-sys-on-surface));background-color:var(--mat-button-toggle-background-color, transparent);font-family:var(--mat-button-toggle-label-text-font, var(--mat-sys-label-large-font));font-size:var(--mat-button-toggle-label-text-size, var(--mat-sys-label-large-size));line-height:var(--mat-button-toggle-label-text-line-height, var(--mat-sys-label-large-line-height));font-weight:var(--mat-button-toggle-label-text-weight, var(--mat-sys-label-large-weight));letter-spacing:var(--mat-button-toggle-label-text-tracking, var(--mat-sys-label-large-tracking))}.mat-button-toggle-group-appearance-standard .mat-button-toggle-appearance-standard+.mat-button-toggle-appearance-standard{border-left:solid 1px var(--mat-button-toggle-divider-color, var(--mat-sys-outline))}[dir=rtl] .mat-button-toggle-group-appearance-standard .mat-button-toggle-appearance-standard+.mat-button-toggle-appearance-standard{border-left:none;border-right:solid 1px var(--mat-button-toggle-divider-color, var(--mat-sys-outline))}.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical .mat-button-toggle-appearance-standard+.mat-button-toggle-appearance-standard{border-left:none;border-right:none;border-top:solid 1px var(--mat-button-toggle-divider-color, var(--mat-sys-outline))}.mat-button-toggle-appearance-standard.mat-button-toggle-checked{color:var(--mat-button-toggle-selected-state-text-color, var(--mat-sys-on-secondary-container));background-color:var(--mat-button-toggle-selected-state-background-color, var(--mat-sys-secondary-container))}.mat-button-toggle-appearance-standard.mat-button-toggle-disabled{color:var(--mat-button-toggle-disabled-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));background-color:var(--mat-button-toggle-disabled-state-background-color, transparent)}.mat-button-toggle-appearance-standard.mat-button-toggle-disabled .mat-pseudo-checkbox{--mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color: var(--mat-button-toggle-disabled-selected-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-button-toggle-appearance-standard.mat-button-toggle-disabled.mat-button-toggle-checked{color:var(--mat-button-toggle-disabled-selected-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));background-color:var(--mat-button-toggle-disabled-selected-state-background-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent))}.mat-button-toggle-appearance-standard .mat-button-toggle-focus-overlay{background-color:var(--mat-button-toggle-state-layer-color, var(--mat-sys-on-surface))}.mat-button-toggle-appearance-standard:hover .mat-button-toggle-focus-overlay{opacity:var(--mat-button-toggle-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity))}.mat-button-toggle-appearance-standard.cdk-keyboard-focused .mat-button-toggle-focus-overlay{opacity:var(--mat-button-toggle-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity))}@media(hover: none){.mat-button-toggle-appearance-standard:hover .mat-button-toggle-focus-overlay{display:none}}.mat-button-toggle-label-content{-webkit-user-select:none;user-select:none;display:inline-block;padding:0 16px;line-height:var(--mat-button-toggle-legacy-height);position:relative}.mat-button-toggle-appearance-standard .mat-button-toggle-label-content{padding:0 12px;line-height:var(--mat-button-toggle-height, 40px)}.mat-button-toggle-label-content>*{vertical-align:middle}.mat-button-toggle-focus-overlay{top:0;left:0;right:0;bottom:0;position:absolute;border-radius:inherit;pointer-events:none;opacity:0;background-color:var(--mat-button-toggle-legacy-state-layer-color)}@media(forced-colors: active){.mat-button-toggle-checked .mat-button-toggle-focus-overlay{border-bottom:solid 500px;opacity:.5;height:0}.mat-button-toggle-checked:hover .mat-button-toggle-focus-overlay{opacity:.6}.mat-button-toggle-checked.mat-button-toggle-appearance-standard .mat-button-toggle-focus-overlay{border-bottom:solid 500px}}.mat-button-toggle .mat-button-toggle-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-button-toggle-button{border:0;background:none;color:inherit;padding:0;margin:0;font:inherit;outline:none;width:100%;cursor:pointer}.mat-button-toggle-animations-enabled .mat-button-toggle-button{transition:padding 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-button-toggle-vertical .mat-button-toggle-button{transition:none}.mat-button-toggle-disabled .mat-button-toggle-button{cursor:default}.mat-button-toggle-button::-moz-focus-inner{border:0}.mat-button-toggle-checked .mat-button-toggle-button:has(.mat-button-toggle-checkbox-wrapper){padding-left:30px}[dir=rtl] .mat-button-toggle-checked .mat-button-toggle-button:has(.mat-button-toggle-checkbox-wrapper){padding-left:0;padding-right:30px}.mat-button-toggle-standalone.mat-button-toggle-appearance-standard{--mat-focus-indicator-border-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large))}.mat-button-toggle-group-appearance-standard:not(.mat-button-toggle-vertical) .mat-button-toggle:last-of-type .mat-button-toggle-button::before{border-top-right-radius:var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));border-bottom-right-radius:var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large))}.mat-button-toggle-group-appearance-standard:not(.mat-button-toggle-vertical) .mat-button-toggle:first-of-type .mat-button-toggle-button::before{border-top-left-radius:var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));border-bottom-left-radius:var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large))}.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical .mat-button-toggle:last-of-type .mat-button-toggle-button::before{border-bottom-right-radius:var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));border-bottom-left-radius:var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large))}.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical .mat-button-toggle:first-of-type .mat-button-toggle-button::before{border-top-right-radius:var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));border-top-left-radius:var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large))}\n"]
    }]
  }], () => [], {
    ariaLabel: [{
      type: Input,
      args: ["aria-label"]
    }],
    ariaLabelledby: [{
      type: Input,
      args: ["aria-labelledby"]
    }],
    _buttonElement: [{
      type: ViewChild,
      args: ["button"]
    }],
    id: [{
      type: Input
    }],
    name: [{
      type: Input
    }],
    value: [{
      type: Input
    }],
    tabIndex: [{
      type: Input
    }],
    disableRipple: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    appearance: [{
      type: Input
    }],
    checked: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    disabledInteractive: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    change: [{
      type: Output
    }]
  });
})();
var MatButtonToggleModule = class _MatButtonToggleModule {
  static \u0275fac = function MatButtonToggleModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatButtonToggleModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _MatButtonToggleModule,
    imports: [MatCommonModule, MatRippleModule, MatButtonToggleGroup, MatButtonToggle],
    exports: [MatCommonModule, MatButtonToggleGroup, MatButtonToggle]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [MatCommonModule, MatRippleModule, MatButtonToggle, MatCommonModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatButtonToggleModule, [{
    type: NgModule,
    args: [{
      imports: [MatCommonModule, MatRippleModule, MatButtonToggleGroup, MatButtonToggle],
      exports: [MatCommonModule, MatButtonToggleGroup, MatButtonToggle]
    }]
  }], null, null);
})();

// src/app/pages/auth/auth.ts
function AuthComponent_div_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21)(1, "mat-icon");
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.erroMensagem);
  }
}
function AuthComponent_mat_form_field_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 14)(1, "mat-label");
    \u0275\u0275text(2, "Apelido ou nome de exibi\xE7\xE3o");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "mat-icon", 15);
    \u0275\u0275text(4, "person");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "input", 22);
    \u0275\u0275twoWayListener("ngModelChange", function AuthComponent_mat_form_field_34_Template_input_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.nome, $event) || (ctx_r0.nome = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.nome);
  }
}
function AuthComponent_ng_container_47_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "mat-form-field", 14)(2, "mat-label");
    \u0275\u0275text(3, "SteamID ou URL do perfil p\xFAblico");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-icon", 15);
    \u0275\u0275text(5, "link");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "input", 23);
    \u0275\u0275twoWayListener("ngModelChange", function AuthComponent_ng_container_47_Template_input_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.steamProfileUrl, $event) || (ctx_r0.steamProfileUrl = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "mat-hint");
    \u0275\u0275text(8, "Usado para validar os jogos da biblioteca.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "mat-form-field", 14)(10, "mat-label");
    \u0275\u0275text(11, "Jogos que deseja (opcional)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "mat-icon", 15);
    \u0275\u0275text(13, "sports_esports");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "input", 24);
    \u0275\u0275twoWayListener("ngModelChange", function AuthComponent_ng_container_47_Template_input_ngModelChange_14_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.jogosDesejados, $event) || (ctx_r0.jogosDesejados = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.steamProfileUrl);
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.jogosDesejados);
  }
}
var AuthComponent = class _AuthComponent {
  authService;
  router;
  modoCadastro = false;
  nome = "";
  email = "";
  senha = "";
  steamProfileUrl = "";
  jogosDesejados = "";
  erroMensagem = "";
  constructor(authService, router) {
    this.authService = authService;
    this.router = router;
  }
  alternarModo(cadastro) {
    this.modoCadastro = cadastro;
    this.erroMensagem = "";
  }
  enviarFormulario() {
    if (!this.email.trim() || !this.senha.trim()) {
      this.erroMensagem = "Preencha seu e-mail e senha para continuar.";
      return;
    }
    if (this.modoCadastro) {
      if (!this.nome.trim()) {
        this.erroMensagem = "Informe seu apelido ou nome de exibi\xE7\xE3o.";
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
        this.erroMensagem = resultado.mensagem || "Erro ao criar conta.";
        return;
      }
      this.router.navigate(["/match"]);
    } else {
      const resultado = this.authService.login(this.email, this.senha);
      if (!resultado.sucesso) {
        this.erroMensagem = resultado.mensagem || "E-mail ou senha inv\xE1lidos.";
        return;
      }
      this.router.navigate(["/match"]);
    }
  }
  entrarComSteam() {
    this.authService.loginComSteam();
    this.router.navigate(["/match"]);
  }
  static \u0275fac = function AuthComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AuthComponent)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AuthComponent, selectors: [["app-auth"]], standalone: false, decls: 57, vars: 10, consts: [[1, "auth-container"], ["appearance", "outlined", 1, "auth-card"], [1, "auth-voltar"], ["mat-button", "", "routerLink", "/inicio", 1, "btn-voltar-inicio"], [1, "auth-header"], [1, "auth-mark"], ["mat-flat-button", "", "type", "button", 1, "btn-steam-oauth", 3, "click"], [1, "btn-arrow"], [1, "divisor"], ["aria-label", "Modo de acesso", 1, "auth-tabs", 3, "change", "value"], [3, "value"], ["class", "alerta-erro", "role", "alert", 4, "ngIf"], [1, "auth-form", 3, "ngSubmit"], ["appearance", "outline", 4, "ngIf"], ["appearance", "outline"], ["matPrefix", ""], ["matInput", "", "id", "email", "type", "email", "name", "email", "placeholder", "voce@exemplo.com", "autocomplete", "email", 3, "ngModelChange", "ngModel"], ["matInput", "", "id", "senha", "type", "password", "name", "senha", "placeholder", "Sua senha", "autocomplete", "current-password", 3, "ngModelChange", "ngModel"], [4, "ngIf"], ["mat-flat-button", "", "color", "primary", "type", "submit", 1, "btn-submit"], [1, "aviso-seguranca"], ["role", "alert", 1, "alerta-erro"], ["matInput", "", "id", "nome", "type", "text", "name", "nome", "placeholder", "Ex.: PlayerOne", "autocomplete", "nickname", 3, "ngModelChange", "ngModel"], ["matInput", "", "id", "steamUrl", "type", "text", "name", "steamProfileUrl", "placeholder", "steamcommunity.com/id/seuperfil", 3, "ngModelChange", "ngModel"], ["matInput", "", "id", "interesses", "type", "text", "name", "jogosDesejados", "placeholder", "Ex.: Elden Ring, Baldur's Gate 3", 3, "ngModelChange", "ngModel"]], template: function AuthComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "mat-card", 1)(2, "mat-card-content")(3, "div", 2)(4, "a", 3)(5, "mat-icon");
      \u0275\u0275text(6, "arrow_back");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "span");
      \u0275\u0275text(8, "Voltar para o in\xEDcio");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(9, "header", 4)(10, "span", 5)(11, "mat-icon");
      \u0275\u0275text(12, "groups");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(13, "h1");
      \u0275\u0275text(14);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(15, "button", 6);
      \u0275\u0275listener("click", function AuthComponent_Template_button_click_15_listener() {
        return ctx.entrarComSteam();
      });
      \u0275\u0275elementStart(16, "mat-icon");
      \u0275\u0275text(17, "sports_esports");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "span");
      \u0275\u0275text(19, "Continuar com a Steam");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "mat-icon", 7);
      \u0275\u0275text(21, "arrow_forward");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(22, "div", 8);
      \u0275\u0275element(23, "mat-divider");
      \u0275\u0275elementStart(24, "span");
      \u0275\u0275text(25, "ou use seu e-mail");
      \u0275\u0275elementEnd();
      \u0275\u0275element(26, "mat-divider");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "mat-button-toggle-group", 9);
      \u0275\u0275listener("change", function AuthComponent_Template_mat_button_toggle_group_change_27_listener($event) {
        return ctx.alternarModo($event.value);
      });
      \u0275\u0275elementStart(28, "mat-button-toggle", 10);
      \u0275\u0275text(29, "Entrar");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "mat-button-toggle", 10);
      \u0275\u0275text(31, "Criar conta");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(32, AuthComponent_div_32_Template, 5, 1, "div", 11);
      \u0275\u0275elementStart(33, "form", 12);
      \u0275\u0275listener("ngSubmit", function AuthComponent_Template_form_ngSubmit_33_listener() {
        return ctx.enviarFormulario();
      });
      \u0275\u0275template(34, AuthComponent_mat_form_field_34_Template, 6, 1, "mat-form-field", 13);
      \u0275\u0275elementStart(35, "mat-form-field", 14)(36, "mat-label");
      \u0275\u0275text(37, "E-mail");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "mat-icon", 15);
      \u0275\u0275text(39, "mail");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(40, "input", 16);
      \u0275\u0275twoWayListener("ngModelChange", function AuthComponent_Template_input_ngModelChange_40_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.email, $event) || (ctx.email = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(41, "mat-form-field", 14)(42, "mat-label");
      \u0275\u0275text(43, "Senha");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "mat-icon", 15);
      \u0275\u0275text(45, "lock");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "input", 17);
      \u0275\u0275twoWayListener("ngModelChange", function AuthComponent_Template_input_ngModelChange_46_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.senha, $event) || (ctx.senha = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275template(47, AuthComponent_ng_container_47_Template, 15, 2, "ng-container", 18);
      \u0275\u0275elementStart(48, "button", 19);
      \u0275\u0275text(49);
      \u0275\u0275elementStart(50, "mat-icon");
      \u0275\u0275text(51, "arrow_forward");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(52, "div", 20)(53, "mat-icon");
      \u0275\u0275text(54, "verified_user");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(55, "p");
      \u0275\u0275text(56, " Respeitamos as regras oficiais da Steam: apenas uma fam\xEDlia ativa por conta e at\xE9 6 membros por grupo. ");
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(14);
      \u0275\u0275textInterpolate(ctx.modoCadastro ? "Crie sua conta" : "Bem-vindo de volta");
      \u0275\u0275advance(13);
      \u0275\u0275property("value", ctx.modoCadastro);
      \u0275\u0275advance();
      \u0275\u0275property("value", false);
      \u0275\u0275advance(2);
      \u0275\u0275property("value", true);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.erroMensagem);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.modoCadastro);
      \u0275\u0275advance(6);
      \u0275\u0275twoWayProperty("ngModel", ctx.email);
      \u0275\u0275advance(6);
      \u0275\u0275twoWayProperty("ngModel", ctx.senha);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.modoCadastro);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.modoCadastro ? "Finalizar cadastro" : "Entrar no Famify", " ");
    }
  }, dependencies: [NgIf, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, RouterLink, MatButton, MatButtonToggleGroup, MatButtonToggle, MatCard, MatCardContent, MatDivider, MatFormField, MatLabel, MatHint, MatPrefix, MatIcon, MatInput], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.auth-container[_ngcontent-%COMP%] {\n  display: grid;\n  min-height: calc(100dvh - 190px);\n  place-items: center;\n  padding: 3rem 1rem;\n  background:\n    radial-gradient(\n      ellipse at 18% 24%,\n      rgba(233, 113, 199, 0.12),\n      transparent 36%),\n    radial-gradient(\n      ellipse at 90% 75%,\n      rgba(173, 151, 255, 0.12),\n      transparent 35%);\n}\n.auth-card[_ngcontent-%COMP%] {\n  width: min(100%, 500px);\n  overflow: hidden;\n  border-color: var(--famify-border);\n  border-radius: 24px;\n  background: rgba(29, 24, 36, 0.96);\n  box-shadow: 0 24px 70px rgba(0, 0, 0, 0.38);\n}\n.auth-card[_ngcontent-%COMP%]    > mat-card-content[_ngcontent-%COMP%] {\n  padding: clamp(1.4rem, 5vw, 2.5rem);\n}\n.auth-header[_ngcontent-%COMP%] {\n  margin-bottom: 1.6rem;\n  text-align: center;\n}\n.auth-mark[_ngcontent-%COMP%] {\n  width: 58px;\n  height: 58px;\n  display: grid;\n  place-items: center;\n  margin: 0 auto 1rem;\n  border-radius: 19px;\n  background:\n    linear-gradient(\n      140deg,\n      #d946a7,\n      #7157d9);\n  color: #fff;\n}\n.auth-mark[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  font-size: 30px;\n}\n.auth-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0.25rem 0 0.55rem;\n  font-size: 1.85rem;\n  font-weight: 800;\n  letter-spacing: -0.055em;\n}\n.auth-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  max-width: 380px;\n  margin: 0 auto;\n  color: var(--famify-muted);\n  font-size: 0.88rem;\n  line-height: 1.55;\n}\n.btn-steam-oauth[_ngcontent-%COMP%] {\n  width: 100%;\n  min-height: 48px;\n  border-radius: 13px;\n  background:\n    linear-gradient(\n      100deg,\n      #9033a8,\n      #7052d5);\n  color: #fff;\n  box-shadow: none;\n}\n.btn-steam-oauth[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]:first-child {\n  margin-right: 0.5rem;\n}\n.btn-steam-oauth[_ngcontent-%COMP%]   .btn-arrow[_ngcontent-%COMP%] {\n  margin-left: auto;\n}\n.divisor[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.8rem;\n  margin: 1.45rem 0;\n  color: var(--famify-muted);\n  font-size: 0.76rem;\n  white-space: nowrap;\n}\n.divisor[_ngcontent-%COMP%]   mat-divider[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.auth-tabs[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  margin-bottom: 1.2rem;\n  padding: 4px;\n  border: 0;\n  border-radius: 12px;\n  background: #2a2331;\n}\n.auth-tabs[_ngcontent-%COMP%]   mat-button-toggle[_ngcontent-%COMP%] {\n  flex: 1;\n  border: 0 !important;\n  border-radius: 9px;\n  color: #b7a9c1;\n  font-size: 0.85rem;\n  font-weight: 650;\n}\n.auth-tabs[_ngcontent-%COMP%]   mat-button-toggle.mat-button-toggle-checked[_ngcontent-%COMP%] {\n  background: #403449;\n  color: #f0a3dc;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);\n}\n.alerta-erro[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.55rem;\n  margin-bottom: 1rem;\n  padding: 0.75rem;\n  border: 1px solid #70404f;\n  border-radius: 11px;\n  background: var(--famify-danger-surface);\n  color: var(--famify-danger);\n  font-size: 0.82rem;\n  line-height: 1.4;\n}\n.alerta-erro[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  width: 19px;\n  height: 19px;\n  flex-shrink: 0;\n  font-size: 19px;\n}\n.auth-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n}\n.auth-form[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.auth-form[_ngcontent-%COMP%]   mat-icon[matPrefix][_ngcontent-%COMP%] {\n  margin-right: 0.45rem;\n  color: var(--famify-violet);\n}\n.auth-form[_ngcontent-%COMP%]   mat-hint[_ngcontent-%COMP%] {\n  color: #b6a9c0;\n  font-size: 0.72rem;\n}\n.btn-submit[_ngcontent-%COMP%] {\n  width: 100%;\n  min-height: 48px;\n  margin-top: 0.3rem;\n  border-radius: 13px;\n  box-shadow: none;\n}\n.btn-submit[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  margin-left: auto;\n}\n.aviso-seguranca[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.6rem;\n  margin-top: 1.5rem;\n  padding-top: 1.15rem;\n  border-top: 1px solid var(--famify-border);\n  color: var(--famify-muted);\n}\n.aviso-seguranca[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  width: 19px;\n  height: 19px;\n  flex-shrink: 0;\n  color: var(--famify-violet);\n  font-size: 19px;\n}\n.aviso-seguranca[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.74rem;\n  line-height: 1.5;\n}\n@media (max-width: 520px) {\n  .auth-container[_ngcontent-%COMP%] {\n    min-height: calc(100dvh - 160px);\n    padding: 1.5rem 0.75rem;\n  }\n  .auth-card[_ngcontent-%COMP%]    > mat-card-content[_ngcontent-%COMP%] {\n    padding: 1.3rem 1rem;\n  }\n}\n/*# sourceMappingURL=auth.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthComponent, [{
    type: Component,
    args: [{ selector: "app-auth", standalone: false, template: `<div class="auth-container">
  <mat-card class="auth-card" appearance="outlined">
    <mat-card-content>
      <div class="auth-voltar">
        <a mat-button routerLink="/inicio" class="btn-voltar-inicio">
          <mat-icon>arrow_back</mat-icon>
          <span>Voltar para o in\xEDcio</span>
        </a>
      </div>

      <header class="auth-header">
        <span class="auth-mark"><mat-icon>groups</mat-icon></span>
        <h1>{{ modoCadastro ? 'Crie sua conta' : 'Bem-vindo de volta' }}</h1>
      </header>

      <button
        mat-flat-button
        type="button"
        class="btn-steam-oauth"
        (click)="entrarComSteam()"
      >
        <mat-icon>sports_esports</mat-icon>
        <span>Continuar com a Steam</span>
        <mat-icon class="btn-arrow">arrow_forward</mat-icon>
      </button>

      <div class="divisor"><mat-divider></mat-divider><span>ou use seu e-mail</span><mat-divider></mat-divider></div>

      <mat-button-toggle-group
        class="auth-tabs"
        aria-label="Modo de acesso"
        [value]="modoCadastro"
        (change)="alternarModo($event.value)"
      >
        <mat-button-toggle [value]="false">Entrar</mat-button-toggle>
        <mat-button-toggle [value]="true">Criar conta</mat-button-toggle>
      </mat-button-toggle-group>

      <div class="alerta-erro" role="alert" *ngIf="erroMensagem">
        <mat-icon>error_outline</mat-icon>
        <span>{{ erroMensagem }}</span>
      </div>

      <form (ngSubmit)="enviarFormulario()" class="auth-form">
        <mat-form-field appearance="outline" *ngIf="modoCadastro">
          <mat-label>Apelido ou nome de exibi\xE7\xE3o</mat-label>
          <mat-icon matPrefix>person</mat-icon>
          <input
            matInput
            id="nome"
            type="text"
            [(ngModel)]="nome"
            name="nome"
            placeholder="Ex.: PlayerOne"
            autocomplete="nickname"
          />
        </mat-form-field>

        <mat-form-field appearance="outline">
          <mat-label>E-mail</mat-label>
          <mat-icon matPrefix>mail</mat-icon>
          <input
            matInput
            id="email"
            type="email"
            [(ngModel)]="email"
            name="email"
            placeholder="voce@exemplo.com"
            autocomplete="email"
          />
        </mat-form-field>

        <mat-form-field appearance="outline">
          <mat-label>Senha</mat-label>
          <mat-icon matPrefix>lock</mat-icon>
          <input
            matInput
            id="senha"
            type="password"
            [(ngModel)]="senha"
            name="senha"
            placeholder="Sua senha"
            autocomplete="current-password"
          />
        </mat-form-field>

        <ng-container *ngIf="modoCadastro">
          <mat-form-field appearance="outline">
            <mat-label>SteamID ou URL do perfil p\xFAblico</mat-label>
            <mat-icon matPrefix>link</mat-icon>
            <input
              matInput
              id="steamUrl"
              type="text"
              [(ngModel)]="steamProfileUrl"
              name="steamProfileUrl"
              placeholder="steamcommunity.com/id/seuperfil"
            />
            <mat-hint>Usado para validar os jogos da biblioteca.</mat-hint>
          </mat-form-field>

          <mat-form-field appearance="outline">
            <mat-label>Jogos que deseja (opcional)</mat-label>
            <mat-icon matPrefix>sports_esports</mat-icon>
            <input
              matInput
              id="interesses"
              type="text"
              [(ngModel)]="jogosDesejados"
              name="jogosDesejados"
              placeholder="Ex.: Elden Ring, Baldur's Gate 3"
            />
          </mat-form-field>
        </ng-container>

        <button mat-flat-button color="primary" type="submit" class="btn-submit">
          {{ modoCadastro ? 'Finalizar cadastro' : 'Entrar no Famify' }}
          <mat-icon>arrow_forward</mat-icon>
        </button>
      </form>

      <div class="aviso-seguranca">
        <mat-icon>verified_user</mat-icon>
        <p>
          Respeitamos as regras oficiais da Steam: apenas uma fam\xEDlia ativa por
          conta e at\xE9 6 membros por grupo.
        </p>
      </div>
    </mat-card-content>
  </mat-card>
</div>`, styles: ["/* src/app/pages/auth/auth.css */\n:host {\n  display: block;\n}\n.auth-container {\n  display: grid;\n  min-height: calc(100dvh - 190px);\n  place-items: center;\n  padding: 3rem 1rem;\n  background:\n    radial-gradient(\n      ellipse at 18% 24%,\n      rgba(233, 113, 199, 0.12),\n      transparent 36%),\n    radial-gradient(\n      ellipse at 90% 75%,\n      rgba(173, 151, 255, 0.12),\n      transparent 35%);\n}\n.auth-card {\n  width: min(100%, 500px);\n  overflow: hidden;\n  border-color: var(--famify-border);\n  border-radius: 24px;\n  background: rgba(29, 24, 36, 0.96);\n  box-shadow: 0 24px 70px rgba(0, 0, 0, 0.38);\n}\n.auth-card > mat-card-content {\n  padding: clamp(1.4rem, 5vw, 2.5rem);\n}\n.auth-header {\n  margin-bottom: 1.6rem;\n  text-align: center;\n}\n.auth-mark {\n  width: 58px;\n  height: 58px;\n  display: grid;\n  place-items: center;\n  margin: 0 auto 1rem;\n  border-radius: 19px;\n  background:\n    linear-gradient(\n      140deg,\n      #d946a7,\n      #7157d9);\n  color: #fff;\n}\n.auth-mark mat-icon {\n  width: 30px;\n  height: 30px;\n  font-size: 30px;\n}\n.auth-header h1 {\n  margin: 0.25rem 0 0.55rem;\n  font-size: 1.85rem;\n  font-weight: 800;\n  letter-spacing: -0.055em;\n}\n.auth-header p {\n  max-width: 380px;\n  margin: 0 auto;\n  color: var(--famify-muted);\n  font-size: 0.88rem;\n  line-height: 1.55;\n}\n.btn-steam-oauth {\n  width: 100%;\n  min-height: 48px;\n  border-radius: 13px;\n  background:\n    linear-gradient(\n      100deg,\n      #9033a8,\n      #7052d5);\n  color: #fff;\n  box-shadow: none;\n}\n.btn-steam-oauth mat-icon:first-child {\n  margin-right: 0.5rem;\n}\n.btn-steam-oauth .btn-arrow {\n  margin-left: auto;\n}\n.divisor {\n  display: flex;\n  align-items: center;\n  gap: 0.8rem;\n  margin: 1.45rem 0;\n  color: var(--famify-muted);\n  font-size: 0.76rem;\n  white-space: nowrap;\n}\n.divisor mat-divider {\n  flex: 1;\n}\n.auth-tabs {\n  display: flex;\n  width: 100%;\n  margin-bottom: 1.2rem;\n  padding: 4px;\n  border: 0;\n  border-radius: 12px;\n  background: #2a2331;\n}\n.auth-tabs mat-button-toggle {\n  flex: 1;\n  border: 0 !important;\n  border-radius: 9px;\n  color: #b7a9c1;\n  font-size: 0.85rem;\n  font-weight: 650;\n}\n.auth-tabs mat-button-toggle.mat-button-toggle-checked {\n  background: #403449;\n  color: #f0a3dc;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);\n}\n.alerta-erro {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.55rem;\n  margin-bottom: 1rem;\n  padding: 0.75rem;\n  border: 1px solid #70404f;\n  border-radius: 11px;\n  background: var(--famify-danger-surface);\n  color: var(--famify-danger);\n  font-size: 0.82rem;\n  line-height: 1.4;\n}\n.alerta-erro mat-icon {\n  width: 19px;\n  height: 19px;\n  flex-shrink: 0;\n  font-size: 19px;\n}\n.auth-form {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n}\n.auth-form mat-form-field {\n  width: 100%;\n}\n.auth-form mat-icon[matPrefix] {\n  margin-right: 0.45rem;\n  color: var(--famify-violet);\n}\n.auth-form mat-hint {\n  color: #b6a9c0;\n  font-size: 0.72rem;\n}\n.btn-submit {\n  width: 100%;\n  min-height: 48px;\n  margin-top: 0.3rem;\n  border-radius: 13px;\n  box-shadow: none;\n}\n.btn-submit mat-icon {\n  margin-left: auto;\n}\n.aviso-seguranca {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.6rem;\n  margin-top: 1.5rem;\n  padding-top: 1.15rem;\n  border-top: 1px solid var(--famify-border);\n  color: var(--famify-muted);\n}\n.aviso-seguranca mat-icon {\n  width: 19px;\n  height: 19px;\n  flex-shrink: 0;\n  color: var(--famify-violet);\n  font-size: 19px;\n}\n.aviso-seguranca p {\n  font-size: 0.74rem;\n  line-height: 1.5;\n}\n@media (max-width: 520px) {\n  .auth-container {\n    min-height: calc(100dvh - 160px);\n    padding: 1.5rem 0.75rem;\n  }\n  .auth-card > mat-card-content {\n    padding: 1.3rem 1rem;\n  }\n}\n/*# sourceMappingURL=auth.css.map */\n"] }]
  }], () => [{ type: AuthService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AuthComponent, { className: "AuthComponent", filePath: "src/app/pages/auth/auth.ts", lineNumber: 11 });
})();

// src/app/pages/auth/auth-routing-module.ts
var routes = [
  { path: "", component: AuthComponent }
];
var AuthRoutingModule = class _AuthRoutingModule {
  static \u0275fac = function AuthRoutingModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AuthRoutingModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _AuthRoutingModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthRoutingModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
    }]
  }], null, null);
})();

// src/app/pages/auth/auth-module.ts
var AuthModule = class _AuthModule {
  static \u0275fac = function AuthModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AuthModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _AuthModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
    CommonModule,
    FormsModule,
    AuthRoutingModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatDividerModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule
  ] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthModule, [{
    type: NgModule,
    args: [{
      declarations: [AuthComponent],
      imports: [
        CommonModule,
        FormsModule,
        AuthRoutingModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatCardModule,
        MatDividerModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule
      ]
    }]
  }], null, null);
})();
export {
  AuthModule
};
//# sourceMappingURL=chunk-D4WGNSGS.js.map
