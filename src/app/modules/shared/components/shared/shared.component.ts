import { Component } from '@angular/core';
import formJson from '../../../../core/data/formValue.json';
@Component({
  selector: 'app-shared',
  templateUrl: './shared.component.html',
  styleUrls: ['./shared.component.css']
})
export class SharedComponent {
  formData: any = formJson;

  handleFormSubmitted(response: any) {
    // Handle the form submit response here
    console.log('Form submit response:', response);
  }
}
