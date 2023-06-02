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
  checkoutForm = this.formBuilder.group({});
  formData: any = formJson;
  form: FormGroup | undefined;
  sanitizedFormHtml!: SafeHtml;

  constructor(
    private dynamicFormService: DynamicFormService,
    private sanitizer: DomSanitizer,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.form = createDynamicForm(this.formData);
    console.log(this.form);
    
    // const formHtml = this.dynamicFormService.generateForm(this.form,this.formData);
    // this.sanitizedFormHtml = this.sanitizer.bypassSecurityTrustHtml(formHtml);
  }

  onSubmit(event: Event) {
    // const formElement: HTMLFormElement | null = event.target as HTMLFormElement;
    // if (formElement) {
    //   const formFieldElements: NodeListOf<HTMLInputElement> | null = formElement.querySelectorAll('input, select, textarea,password');
    //   if (formFieldElements) {
    //     formFieldElements.forEach((fieldElement: HTMLInputElement) => {
    //       this.formValues[fieldElement.name] = fieldElement.value;
    //     });
    //   }
    // }


    console.log('Form submitted!');
    console.warn('Your order has been submitted', event);

    event.preventDefault(); // Prevent form submission and page refresh
  
  if (this.form?.valid) {
    console.log('Form submitted!');
    
    const formValues = this.form.value;
    console.log('Form Values:',formValues);
    Object.keys(formValues).forEach(key => {
      console.log(`${key}: ${formValues[key]}`);
    });
  }
  }

}
