import { NgWizardStepComponent } from './ng-wizard-step.component';
import { NgWizardComponent } from './ng-wizard.component';
export declare class StepEvent {
    previousStep: number;
    currentStep: number;
    previousTarget: NgWizardStepComponent;
    currentTarget: NgWizardStepComponent;
    wizard: NgWizardComponent;
}
