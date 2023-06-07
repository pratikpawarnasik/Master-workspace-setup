import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

export function createDynamicForm(formData: any): FormGroup {
  const formGroup: { [key: string]: FormControl } = {};

  formData.formGroups.forEach((group: { fields: any[] }) => {
    group.fields.forEach((field: { required: any; name: string | number; type: string }) => {
      let validators = null;

      if (field.required) {
        if (field.type === 'checkbox') {
          validators = Validators.requiredTrue;
        } else {
          validators = Validators.required;
        }
      }

      formGroup[field.name] = new FormControl('', validators);
    });
  });

  return new FormGroup(formGroup);
}
@Component({
  selector: 'app-form-control',
  templateUrl: './form-control.component.html',
  styleUrls: ['./form-control.component.css']
})

export class FormControlComponent {
  
  @Input() control!: any;
  @Input() form!: FormGroup;
  @Input() col!: number;

  
  getErrorMessage(controlName: string, _label: string): string {
    console.log("controlName::", controlName);
    
    const control = this.form.get(controlName)!;
    let errorMessage = '';
  
    if (control.errors?.['required']) {
      errorMessage += '<span>' + _label + ' is required</span>';
    }
  
    if (control.errors?.['email']) {
      errorMessage += '<span>Invalid email format</span>';
    }
  
    // Add more error checks if needed
  
    if (errorMessage !== '') {
      errorMessage = '<div class="error-message">' + errorMessage + '</div>';
    }
  
    return errorMessage;
  }
  
  
  
}


