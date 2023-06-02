import { NgModule } from '@angular/core';
import { TsiformComponent } from './tsiform.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormControlComponent } from './form-control/form-control.component';



@NgModule({
  declarations: [
    TsiformComponent,
    FormControlComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    TsiformComponent
  ]
})
export class TsiformModule { }
