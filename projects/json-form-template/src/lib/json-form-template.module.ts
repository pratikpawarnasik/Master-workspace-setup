import { NgModule } from '@angular/core';
import { JsonFormTemplateComponent } from './json-form-template.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormControlComponent } from './form-control/form-control.component';



@NgModule({
  declarations: [
    JsonFormTemplateComponent,
    FormControlComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    JsonFormTemplateComponent
  ]
})
export class JsonFormTemplateModule { }
