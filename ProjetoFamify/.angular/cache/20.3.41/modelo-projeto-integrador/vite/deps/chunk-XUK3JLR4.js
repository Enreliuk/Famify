import {
  MatPseudoCheckbox
} from "./chunk-7VHCCGMY.js";
import {
  MatCommonModule
} from "./chunk-3G7NU2DC.js";
import {
  NgModule,
  setClassMetadata,
  ɵɵdefineInjector,
  ɵɵdefineNgModule
} from "./chunk-FSVADXSU.js";

// node_modules/@angular/material/fesm2022/pseudo-checkbox-module.mjs
var MatPseudoCheckboxModule = class _MatPseudoCheckboxModule {
  static ɵfac = function MatPseudoCheckboxModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatPseudoCheckboxModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _MatPseudoCheckboxModule,
    imports: [MatCommonModule, MatPseudoCheckbox],
    exports: [MatPseudoCheckbox]
  });
  static ɵinj = ɵɵdefineInjector({
    imports: [MatCommonModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatPseudoCheckboxModule, [{
    type: NgModule,
    args: [{
      imports: [MatCommonModule, MatPseudoCheckbox],
      exports: [MatPseudoCheckbox]
    }]
  }], null, null);
})();

export {
  MatPseudoCheckboxModule
};
//# sourceMappingURL=chunk-XUK3JLR4.js.map
