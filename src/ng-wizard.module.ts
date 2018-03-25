import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgWizardComponent } from './ng-wizard.component';
import { NgWizardStepComponent  } from './ng-wizard-step.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NgWizardComponent, NgWizardStepComponent],
  exports: [NgWizardComponent, NgWizardStepComponent]
})
export class NgWizardModule { }
