import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { DynamicFormService } from 'src/app/core/services/dynamic-form.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import formJson from '../../../../core/data/formValue.json';
import { createDynamicForm } from 'src/app/core/Utils/dynamic-form.util';


@Component({
  // selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',

  styleUrls: ['./dynamic-form.component.css']

})
export class DynamicFormComponent {
  formValues: any = {};
  formData: any = formJson;
  form!: FormGroup;
  sanitizedFormHtml!: SafeHtml;
  constructor(
  ) { }

  ngOnInit() {



    this.form = createDynamicForm(this.formData);
    console.log(this.form);
  }

  onSubmit(event: Event) {
    console.warn('Your form has been submitted', this.form?.value);
    event.preventDefault(); // Prevent form submission and page refresh
    if (this.form?.valid) {
      console.log('Form submitted!');
      const formValues = this.form.value;
      console.warn('Your form has been submitted', formValues);
    }
    else {
      console.log('Form not valid');

    }
  }

}
