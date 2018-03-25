"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var NgWizardComponent_1 = require("./NgWizardComponent");
var NgWizardStep_1 = require("./NgWizardStep");
var NgWizardModule = /** @class */ (function () {
    function NgWizardModule() {
    }
    NgWizardModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule],
            declarations: [NgWizardComponent_1.NgWizardComponent, NgWizardStep_1.NgWizardStepComponent],
            exports: [NgWizardComponent_1.NgWizardComponent, NgWizardStep_1.NgWizardStepComponent]
        })
    ], NgWizardModule);
    return NgWizardModule;
}());
exports.NgWizardModule = NgWizardModule;
//# sourceMappingURL=NgWizardModule.js.map