import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { createDynamicForm } from './form-control/form-control.component';


@Component({
  selector: 'lib-jsonFormTemplate',
  template: `
    <div class="container">
    <h1 class="text-center">{{ formData.formName }}</h1>
    <form [formGroup]="form" (ngSubmit)="onSubmit($event)">
      <div class="row">
        <ng-container *ngFor="let group of formData.formGroups">
          <ng-container *ngIf="group.col === 12">
            <div [ngClass]="'col-md-' + group.col">
              <ng-container *ngFor="let control of group.fields">
                <app-form-control [control]="control" [form]="form"></app-form-control>
              </ng-container>
            </div>
          </ng-container>
          <ng-container *ngIf="group.col === 6">
            <div [ngClass]="'col-md-' + group.col" *ngFor="let control of group.fields">
              <app-form-control [control]="control" [form]="form"></app-form-control>
            </div>
          </ng-container>
        </ng-container>
      </div>
  
      <div class="form-row">
        <button type="submit" class="btn btn-primary" [disabled]="!form.valid">{{ formData.actionButtons[0].lable }}</button>
      </div>
    </form>
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
