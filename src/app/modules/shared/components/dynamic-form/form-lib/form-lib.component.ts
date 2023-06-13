
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { createDynamicForm } from '../form-control/form-control.component';


@Component({
  selector: 'app-form-lib',
  templateUrl: './form-lib.component.html',
  styleUrls: ['./form-lib.component.css']
})
export class FormLibComponent {

  @Input() formData: any; // Input property to receive formData from parent component
  @Output() formSubmitted: EventEmitter<any> = new EventEmitter<any>();

  form!: FormGroup;

  ngOnInit() {
    console.log("@Input() formData:::", this.formData);
    
    this.form = createDynamicForm(this.formData);
  }

  onSubmit(event: Event) {
    if (this.form?.valid) {
      // Emit the form submit response
      this.formSubmitted.emit(this.form.value);
      console.warn('Your form has been submitted', this.form.value);
    } else {
      console.warn('Form not valid');
    }
  }

  onRadioButtonChange(language: string) {
  // Handle the selected language
  console.log('Selected language:', language);

  // Perform any other actions based on the selected language
  // For example, you can use a translation service to change the language dynamically
  // this.translateService.use(language);
}


}
