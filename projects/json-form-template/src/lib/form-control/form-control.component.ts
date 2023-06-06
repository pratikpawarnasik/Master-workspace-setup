import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-control',
  templateUrl: './form-control.component.html',
  styleUrls: ['./form-control.component.css']
})

export class FormControlComponent {
  
  @Input() control!: any;
  @Input() form!: FormGroup;
  @Input() col!: number;
  isFormControlInvalid(controlName: string): boolean {
    const control = this.form.get(controlName);
    return control ? (control.invalid && control.touched) : false;
  }
  
  
}
