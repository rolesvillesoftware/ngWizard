import {Component, Input} from '@angular/core';
import {NgWizardComponent} from './ng-wizard.component';

@Component({
  selector: 'rs-wizard-step',
  template: '<div [hidden]="hidden"><ng-content></ng-content></div>',
  styles: [

  ]
})
export class NgWizardStepComponent {
  @Input() title = null;
  @Input() canMoveNext = true;
  @Input() canMoveBack = true;

  hidden = true;

  constructor(wizard: NgWizardComponent) {
    wizard.addStep(this);
  }

}
