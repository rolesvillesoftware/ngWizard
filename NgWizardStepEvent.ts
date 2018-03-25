import {NgWizardStepComponent} from './NgWizardStep';
import {NgWizardComponent} from './NgWizardComponent';

export class NgWizardStepEvent {
  previousStep: number;
  currentStep: number;
  previousTarget: NgWizardStepComponent;
  currentTarget: NgWizardStepComponent;
  wizard: NgWizardComponent;
}
