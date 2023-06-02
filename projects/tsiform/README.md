# Tsiform

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.0.0.

## Usage

* app.module
import { ReactiveFormsModule } from '@angular/forms';
import { TsiformModule } from 'tsiform';

imports: [
    ReactiveFormsModule,
    TsiformModule
  ],

* app.component.html
 <lib-tsiform [formData]="formData" (formSubmitted)="handleFormSubmitted($event)"></lib-tsiform>

* app.component.ts
formData =formJson;
  handleFormSubmitted(response: any) {
    // Handle the form submit response here
    console.log('Form submit response:', response);
  }

* Sample json
{
  "formName":"User Registration",
  "actionButtons": [
    {
      "lable": "Submit"
    }
  ],
  "fields": [
    {
      "type": "text",
      "name": "firstName",
      "label": "First Name",
      "required": true
    },
    {
      "type": "email",
      "name": "email",
      "label": "Email",
      "required": false
    },
    {
      "type": "select",
      "name": "country",
      "label": "Country",
      "required": true,
      "options": [
        "USA",
        "Canada",
        "UK",
        "Australia"
      ]
    },
    {
      "type": "textarea",
      "name": "address",
      "label": "Address",
      "required": false
    }
  ]
}
## Code scaffolding

Run `ng generate component component-name --project tsiform` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module --project tsiform`.
> Note: Don't forget to add `--project tsiform` or else it will be added to the default project in your `angular.json` file. 

## Build

Run `ng build tsiform` to build the project. The build artifacts will be stored in the `dist/` directory.

## Publishing

After building your library with `ng build tsiform`, go to the dist folder `cd dist/tsiform` and run `npm publish`.

## Running unit tests

Run `ng test tsiform` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


