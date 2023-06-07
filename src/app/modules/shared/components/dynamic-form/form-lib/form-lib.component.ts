
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

export function createDynamicForm(formData: any): FormGroup {
  const formGroup: { [key: string]: FormControl } = {};

  formData.formGroups.forEach((group: { fields: any[] }) => {
    group.fields.forEach((field: { required: any; name: string | number }) => {
      const validators = field.required ? Validators.required : null;
      formGroup[field.name] = new FormControl('', validators);
    });
  });

  return new FormGroup(formGroup);
}
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

}
