# Rolesville Software LLC - NgWizard
NgWizard is a simple step wizard for Angular. This is a very simple wizard at the moment was was written for a specific reason. I would like to expand it, but would also like for others to identify functionality they need in their current projects. 
## Installation
    npm install --save @rolesvillesoftware/ng-wizard
## Module Configuration
 To use the NgWizard, its module needs to be imported into your application module.

    import { BrowserModule } from '@angular/platform-browser';  
    import { NgModule } from '@angular/core';  
    import { FormsModule } from '@angular/forms';  
      
    import { NgWizardModule } from '@rolesvillesoftware/ng-wizard/NgWizardModule';  
    import { AppComponent } from './app.component';  
         
    @NgModule({  
      declarations: \[  
        AppComponent  
      \],  
      imports: \[  
        BrowserModule,  
        FormsModule,  
        NgWizardModule  
      \],  
      providers: \[\],  
      bootstrap: \[AppComponent\]  
    })  
    export class AppModule { }
## Simple Sample Application
### app.component.ts
    import { Component } from '@angular/core';  
    import {NgWizardStepEvent} from '@rolesvillesoftware/ng-wizard/NgWizardStepEvent';  
      
    @Component({  
      selector: 'app-root',  
      templateUrl: './app.component.html',  
      styleUrls: \['./app.component.css'\]  
    })  
    export class AppComponent {  
      title = 'app';  
      textValue: string = null;  
      
      onDone(event: NgWizardStepEvent) {  
        alert('Wizard Completed');  
      }  
      onStepChange(event: NgWizardStepEvent) {  
        alert(`Step Change - Previous Step: ${event.previousStep} \- Current Step: ${event.currentStep}`)  
      }  
    }

### app.component.html

    <div style="text-align:center">  
      <h1>  
        Welcome to {{ title }}!  
      </h1>  
      <img width="300" alt="Angular Logo"  
      src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==">  
    </div>  
    <ngWizard (done)="onDone($event)" (stepChange)="onStepChange($event)" \[doneText\]="'Complete Wizard'" \[backText\]="'< Previous'" \[nextText\]="'Next >'">  
      <ngWizardStep \[title\]="'Step One'">  
        <p>Step one - Click Next</p>  
      </ngWizardStep>  
      <ngWizardStep \[title\]="'Step Two'" \[canMoveBack\]="(textValue || '').length === 0" \[canMoveNext\]="textValue?.length > 0" >  
        <p>Step Two - Enter Value in Text Box to Move Next</p>  
        <p>  
          <input type="text" \[(ngModel)\]="textValue" />  
        </p>  
      </ngWizardStep>  
      <ngWizardStep \[title\]="'Step Three / Final'">  
        <p>Validate Value from Text Box: {{ textValue }}</p>  
      </ngWizardStep>  
    </ngWizard>
## Components
### ngWizard
This is the main container for the wizard. 
**Selector:** `<ngWizard></ngWizard>`

|Parameter|In/Out |Type|Description|
|--|--|--|--|
|nextText|IN|string|Text to display on the button to step to the next wizard step. (Default: Next)|
|doneText|IN|string|Text to display on the button on last wizard step to complete the wizard. (Default: Done)|
|backText|IN|string|Text to display on the back button. (Default: Back)|
|stepChange|OUT|NgWizardStepEvent|Event that is signaled when the wizard changes active step (EventEmitter)|
|done|OUT|NgtWizardStepEvent|Event that is signaled with the "done" button is pressed on the last step pane. (EventEmitter)|

### ngWizardStep
**Selector:**`<ngWizardStep></ngWizardStep>`
Container to house the step controls and HTML. 

|Parameter|In/Out |Type|Description|
|--|--|--|--|
|title|IN|string|The title of the step displayed on the header region (Default: Null)|
|canMoveNext|IN|boolean|Flag to indicate if the "next" button can be enabled. (Default: true)|
|canMoveBack|IN|boolean|Flag to indicate if the "back" button can be enabled. (Default: true)|

## CSS Controls/Override
### Default CSS 

Below is the default CSS settings of the wizard. They can be overriden by adding the following class in your CSS: `rsWizardMainOverride`.

    @import url("https://fonts.googleapis.com/css?family=Lato");
    .rsWizardMain { display: flex; flex-direction: column; font-family: "Lato", sans-serif; background: #fff; font-size: 1em; border: 1px solid #C7CDD1; box-shadow: 0 1px 3px 0 rgba(0 0 0 0.15); position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); min-height: 41%; max-height: 65%; min-width: 41%; max-width: 65% }
    .rsWizardMain>div { flex: 1; overflow: hidden; overflow-y: auto; }
    .rsWizardMain>div:first-child { flex: 0; font-size: 20px; padding: 3.99vh 3.18vw; color: #2D3B45; font-weight: bold; background: #f2f2f2; border: 1px solid #C7CDD1; border-radius: 3px 3px 0 0; box-shadow: 0 1px 3px 0 rgba(0,0,0,0.15); }
    .rsWizardMain>div:first-child>div { width: 50%; }
    .rsWizardMain>div:last-child { flex: 0; padding: 3.42vh 3.36vw; border-top: 1px solid #efefef; }
    .rsWizardMain>div:last-child>div { display: inline-block; width: 50%; text-align: center }
    .rsWizardMain>div:last-child>div:first-child { text-align: left;}
    .rsWizardMain>div:last-child>div:last-child { text-align: right; }
    .rsWizardMain button { font-family: "Lato", sans-serif; font-size: 14px; line-height: 17px; border: 1px solid #C4CDD1; border-radius: 2px; background-color: #F5F5F5; color: #2D3B45; padding: 7px 17px; cursor: pointer; }
    .rsWizardMain button.next { background-color: #00ACBD; color: #fff; border-color: #008592; }  
    .rsWizardMain button:disabled { cursor: not-allowed; opacity: 0.45; }
----------
> Written with [StackEdit](https://stackedit.io/).

