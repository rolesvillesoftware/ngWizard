import { NgWizardStepComponent } from './NgWizardStep';
import { NgWizardComponent } from './NgWizardComponent';
export declare class NgWizardStepEvent {
    previousStep: number;
    currentStep: number;
    previousTarget: NgWizardStepComponent;
    currentTarget: NgWizardStepComponent;
    wizard: NgWizardComponent;
}
