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
var NgWizardStepEvent_1 = require("./NgWizardStepEvent");
var NgWizardComponent = /** @class */ (function () {
    function NgWizardComponent() {
        this.nextText = 'Next';
        this.doneText = 'Done';
        this.backText = 'Back';
        this.stepChange = new core_1.EventEmitter();
        this.done = new core_1.EventEmitter();
        this.activeStep = -1;
        this.steps = new Array(0);
    }
    Object.defineProperty(NgWizardComponent.prototype, "lastStep", {
        get: function () {
            if (this.steps == null || this.steps.length === 0) {
                return -1;
            }
            return this.steps.length - 1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgWizardComponent.prototype, "currentStep", {
        get: function () {
            if (this.steps == null || this.activeStep > this.lastStep) {
                return null;
            }
            return this.steps[this.activeStep];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgWizardComponent.prototype, "doneNextText", {
        get: function () {
            if (this.activeStep < 0 || this.steps == null || this.steps.length === 0) {
                return '';
            }
            return this.activeStep === this.lastStep ? this.doneText : this.nextText;
        },
        enumerable: true,
        configurable: true
    });
    NgWizardComponent.prototype.showHideProperStep = function () {
        var _this = this;
        this.steps.forEach(function (step, index) {
            step.hidden = true;
            if (index === _this.activeStep) {
                step.hidden = false;
            }
        });
    };
    NgWizardComponent.prototype.callEvent = function (prevStep, event) {
        if (prevStep === this.activeStep) {
            return;
        }
        var eventArgs = Object.assign(new NgWizardStepEvent_1.NgWizardStepEvent(), {
            previousStep: prevStep >= 0 ? prevStep : null,
            currentStep: this.activeStep >= 0 ? this.activeStep : 0,
            previousTarget: prevStep >= 0 && prevStep === this.lastStep ? this.steps[prevStep] : null,
            currentTarget: this.currentStep,
            wizard: this
        });
        if (event != null) {
            event.emit(eventArgs);
        }
    };
    NgWizardComponent.prototype.showBack = function () {
        return this.activeStep > 0 &&
            this.currentStep != null;
    };
    NgWizardComponent.prototype.prevClick = function () {
        var prevStep = this.activeStep;
        if (this.activeStep > 0) {
            this.activeStep -= 1;
        }
        this.showHideProperStep();
        this.callEvent(prevStep, this.stepChange);
    };
    NgWizardComponent.prototype.nextClick = function () {
        var prevStep = this.activeStep;
        if (this.activeStep === this.lastStep) {
            this.callEvent(-1, this.done);
        }
        else {
            if (this.activeStep < this.lastStep) {
                this.activeStep += 1;
            }
            this.showHideProperStep();
            this.callEvent(prevStep, this.stepChange);
        }
    };
    NgWizardComponent.prototype.addStep = function (step) {
        this.steps.push(step);
        if (this.steps.length === 1) {
            step.hidden = false;
            this.activeStep = 0;
        }
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], NgWizardComponent.prototype, "nextText", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], NgWizardComponent.prototype, "doneText", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], NgWizardComponent.prototype, "backText", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], NgWizardComponent.prototype, "stepChange", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], NgWizardComponent.prototype, "done", void 0);
    NgWizardComponent = __decorate([
        core_1.Component({
            selector: 'ngWizard',
            template: '<div class="rsWizardMain rsWizardMainOverride">' +
                '<div><div>{{ currentStep?.title }}</div><div></div></div>' +
                '<div><ng-content></ng-content></div>' +
                '<div>' +
                '<div><button class="back" type="button" (click)="prevClick()" [hidden]="!showBack()" [disabled]="!this.currentStep.canMoveBack">{{ backText }}</button></div>' +
                '<div><button class="next" type="button" (click)="nextClick()" [disabled]="!this.currentStep.canMoveNext">{{ doneNextText }}</button></div>' +
                '</div>' +
                '</div>',
            styles: [
                '@import url("https://fonts.googleapis.com/css?family=Lato");',
                '.rsWizardMain { display: flex; flex-direction: column; font-family: "Lato", sans-serif; background: #fff; font-size: 1em; border: 1px solid #C7CDD1; box-shadow: 0 1px 3px 0 rgba(0 0 0 0.15); position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); min-height: 41%; max-height: 65%; min-width: 41%; max-width: 65% }',
                '.rsWizardMain>div { flex: 1; overflow: hidden; overflow-y: auto; }',
                '.rsWizardMain>div:first-child { flex: 0; font-size: 20px; padding: 3.99vh 3.18vw; color: #2D3B45; font-weight: bold; background: #f2f2f2; border: 1px solid #C7CDD1; border-radius: 3px 3px 0 0; box-shadow: 0 1px 3px 0 rgba(0,0,0,0.15); }',
                '.rsWizardMain>div:first-child>div { width: 50%; }',
                '.rsWizardMain>div:last-child { flex: 0; padding: 3.42vh 3.36vw; border-top: 1px solid #efefef; }',
                '.rsWizardMain>div:last-child>div { display: inline-block; width: 50%; text-align: center }',
                '.rsWizardMain>div:last-child>div:first-child { text-align: left;}',
                '.rsWizardMain>div:last-child>div:last-child { text-align: right; }',
                '.rsWizardMain button { font-family: "Lato", sans-serif; font-size: 14px; line-height: 17px; border: 1px solid #C4CDD1; border-radius: 2px; background-color: #F5F5F5; color: #2D3B45; padding: 7px 17px; cursor: pointer; }',
                '.rsWizardMain button.next { background-color: #00ACBD; color: #fff; border-color: #008592; }',
                '.rsWizardMain button:disabled { cursor: not-allowed; opacity: 0.45; }'
            ]
        }),
        __metadata("design:paramtypes", [])
    ], NgWizardComponent);
    return NgWizardComponent;
}());
exports.NgWizardComponent = NgWizardComponent;
//# sourceMappingURL=NgWizardComponent.js.map