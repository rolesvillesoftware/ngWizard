import { EventEmitter } from '@angular/core';
import { NgWizardStepComponent } from './NgWizardStep';
import { NgWizardStepEvent } from './NgWizardStepEvent';
export declare class NgWizardComponent {
    nextText: string;
    doneText: string;
    backText: string;
    stepChange: EventEmitter<NgWizardStepEvent>;
    done: EventEmitter<NgWizardStepEvent>;
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
