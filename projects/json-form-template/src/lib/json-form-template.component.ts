import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { createDynamicForm } from './form-control/form-control.component';


@Component({
  selector: 'lib-jsonFormTemplate',
  template: `
    <div class="container">
  
  
  <h1 class="text-center my-4">{{ formData.formName }}</h1>
  <form [formGroup]="form" (ngSubmit)="onSubmit($event)">
    <div class="row ">
      <ng-container *ngFor="let group of formData.formGroups; let last = last">
       
          <div class="col-12 ">
            <h4 class="form-group-name text-primary"><samp>{{ group.groupName }}</samp></h4>
          </div>
          <ng-container *ngIf="group.col === 12">
            <div class="col-md-12 form-group">
              <ng-container *ngFor="let control of group.fields">
                <app-form-control [control]="control" [form]="form"></app-form-control>
              </ng-container>
            </div>
          </ng-container>
          <ng-container *ngIf="group.col === 6">
            <div class="col-md-6 form-group" *ngFor="let control of group.fields">
              <app-form-control [control]="control" [form]="form"></app-form-control>
            </div>
          </ng-container>
          <div ngClass="border-bottom bor-sep"  class="col-12 mb-4 "> </div>
      </ng-container>
    </div>

    <div class="form-row">
      <button type="submit" class="btn btn-primary" [disabled]="!form.valid">{{ formData.actionButtons[0].label
        }}</button>
    </div>
  </form>
</div>  
  `,
  styles: [`
  .blockquote {
    padding: 20px;
    box-shadow: inset 0 -3em 3em rgba(0, 0, 0, 0.1), 0 0 0 2px rgb(255, 255, 255),
      0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
  }

  .bor-sep {
    box-shadow: 0px 0px 5px #969696;
  }`
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
