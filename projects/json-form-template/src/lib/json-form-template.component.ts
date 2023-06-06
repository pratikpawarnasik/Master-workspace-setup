import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


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
  selector: 'lib-jsonFormTemplate',
  template: `
    <h2>Hello, welocme to TSI forms!</h2>
    <div>
      <h2>{{ formData.formName }}</h2>
      <div>
        <form [formGroup]="form" (ngSubmit)="onSubmit($event)">
        <ng-container *ngFor="let group of formData.formGroups">
            <ng-container *ngFor="let control of group.fields">
                <app-form-control [control]="control" [form]="form" [col]="group.col"></app-form-control>
            </ng-container>
        </ng-container>

          <div class="form-row">
            <button type="submit" class="btn btn-primary" [disabled]="!form.valid">
              {{ formData.actionButtons[0].lable }}
            </button>
          </div>
        </form>
      </div>
    </div>
  `,
  styles: [
  ]
})
export class JsonFormTemplateComponent implements OnInit {
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
