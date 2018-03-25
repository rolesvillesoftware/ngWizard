import {Component, Input} from '@angular/core';
import {NgWizardStepComponent} from './ng-wizard-step.component';

@Component({
  selector: 'rs-wizard',
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
})
export class NgWizardComponent {
  @Input() nextText = 'Next';
  @Input() doneText = 'Done';
  @Input() backText = 'Back';

  private activeStep = -1;
  private steps: NgWizardStepComponent[] = new Array<NgWizardStepComponent>(0);

  get currentStep(): NgWizardStepComponent {
    if (this.steps == null || this.activeStep > this.steps.length - 1) {
      return null;
    }
    return this.steps[this.activeStep];
  }
  get doneNextText(): string {
    if (this.activeStep < 0 || this.steps == null || this.steps.length === 0) { return ''; }
    return this.activeStep === this.steps.length - 1 ? this.doneText : this.nextText;
  }
  constructor() {
  }

  private showHideProperStep() {
    this.steps.forEach((step, index) => {
      step.hidden = true;
      if (index === this.activeStep) {
        step.hidden = false;
      }
    });
  }

  showBack(): boolean {
    return this.activeStep > 0 &&
      this.currentStep != null;
  }

  prevClick() {
    if (this.activeStep > 0) {
      this.activeStep -= 1;
    }
    this.showHideProperStep();
  }

  nextClick() {
    if (this.activeStep < this.steps.length - 1) {
      this.activeStep += 1;
    }
    this.showHideProperStep();
  }

  addStep(step: NgWizardStepComponent) {
    this.steps.push(step);
    if (this.steps.length === 1) {
      step.hidden = false;
      this.activeStep = 0;
    }
  }
}

