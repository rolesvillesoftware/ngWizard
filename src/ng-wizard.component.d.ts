import { EventEmitter } from '@angular/core';
import { NgWizardStepComponent } from './ng-wizard-step.component';
import { StepEvent } from './StepEvent';
export declare class NgWizardComponent {
    nextText: string;
    doneText: string;
    backText: string;
    stepChange: EventEmitter<StepEvent>;
    done: EventEmitter<StepEvent>;
    private activeStep;
    private steps;
    readonly lastStep: number;
    readonly currentStep: NgWizardStepComponent;
    readonly doneNextText: string;
    constructor();
    private showHideProperStep();
    private callEvent(prevStep, event);
    showBack(): boolean;
    prevClick(): void;
    nextClick(): void;
    addStep(step: NgWizardStepComponent): void;
}
