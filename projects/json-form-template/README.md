
## How to use?

Install npm i json-form-template

Import and add as per below code,
### app.module
import { ReactiveFormsModule } from '@angular/forms';

imports: [
    ReactiveFormsModule,
    JsonFormTemplateModule
  ],

### app.component.html
  <div class="container">
    <lib-jsonFormTemplate  [formData]="formData" (formSubmitted)="handleFormSubmitted($event)"></lib-jsonFormTemplate>
  </div>

### app.component.ts
formData =formJson;
  handleFormSubmitted(response: any) {
    // Handle the form submit response here
    console.log('Form submit response:', response);
  }

### Sample json
{ "formName": "User Registration", "actionButtons": [ { "lable": "Submit", "methodCall": "", "callback": "" } ], "formGroups": [ { "groupName": "basic", "col": 6, "fields": [ { "type": "text", "name": "firstName", "label": "First Name", "required": true }, { "type": "text", "name": "lastName", "label": "Last Name", "required": true }, { "type": "email", "name": "email", "label": "Email", "required": false } ] }, { "groupName": "address", "col": 12, "fields": [ { "type": "select", "name": "country", "label": "Country", "required": true, "options": [ "USA", "Canada", "UK", "Australia" ] }, { "type": "textarea", "name": "address", "label": "Address", "required": false } ] }, { "groupName": "check box", "col": 12, "fields": [ { "type": "checkbox", "name": "checkmeout", "label": "Check me out", "required": true } ] } ] }