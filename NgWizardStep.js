"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var NgWizardComponent_1 = require("./NgWizardComponent");
var NgWizardStepComponent = /** @class */ (function () {
    function NgWizardStepComponent(wizard) {
        this.title = null;
        this.canMoveNext = true;
        this.canMoveBack = true;
        this.hidden = true;
        wizard.addStep(this);
    }
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], NgWizardStepComponent.prototype, "title", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], NgWizardStepComponent.prototype, "canMoveNext", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], NgWizardStepComponent.prototype, "canMoveBack", void 0);
    NgWizardStepComponent = __decorate([
        core_1.Component({
            selector: 'ngWizardStep',
            template: '<div [hidden]="hidden"><ng-content></ng-content></div>',
            styles: []
        }),
        __metadata("design:paramtypes", [NgWizardComponent_1.NgWizardComponent])
    ], NgWizardStepComponent);
    return NgWizardStepComponent;
}());
exports.NgWizardStepComponent = NgWizardStepComponent;
//# sourceMappingURL=NgWizardStep.js.map