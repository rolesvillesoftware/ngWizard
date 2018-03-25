import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {NgWizardComponent} from './NgWizardComponent';
import {NgWizardStepComponent} from './NgWizardStep';

@NgModule({
  imports: [CommonModule],
  declarations: [NgWizardComponent, NgWizardStepComponent],
  exports: [NgWizardComponent, NgWizardStepComponent]
})
export class NgWizardModule {}
