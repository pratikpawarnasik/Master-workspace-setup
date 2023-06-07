import { Component } from '@angular/core';
import formJson from '../../../../core/data/formValue.json';

@Component({
  // selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',

  styleUrls: ['./dynamic-form.component.css']

})
export class DynamicFormComponent {

  formData: any = formJson;

  handleFormSubmitted(response: any) {
    // Handle the form submit response here
    console.log('Form submit response:', response);
  }

}
