import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

export function createDynamicForm(formData: any): FormGroup {
  const formGroup: { [key: string]: FormControl } = {};

  formData.fields.forEach((field: { required: boolean; name: string }) => {
    const validators = field.required ? Validators.required : null;
    formGroup[field.name] = new FormControl('', validators);
  });

  return new FormGroup(formGroup);
}

@Component({
  selector: 'lib-tsiform',
  template: `
  <h2>Hello Patric!</h2>
    <div>
      <h2>{{ formData.formName }}</h2>
      <div>
        <form [formGroup]="form" (ngSubmit)="onSubmit($event)">
          <div *ngFor="let control of formData.fields" class="form-row">
            <app-form-control [control]="control" [form]="form"></app-form-control>
          </div>

          <div class="form-row">
            <button type="submit" class="btn btn-primary" [disabled]="!form.valid">
              {{ formData.actionButtons[0].lable }}
            </button>
          </div>
        </form>
      </div>
    </div>
  `,
  styles: [],
})

export class TsiformComponent implements OnInit {
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


