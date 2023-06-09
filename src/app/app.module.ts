import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedComponent } from './modules/shared/components/shared/shared.component';
import { HeaderComponent } from './modules/shared/components/header/header.component';
import { NavMenuComponent } from './modules/shared/components/nav-menu/nav-menu.component';
import { UsersRoutingModule } from './modules/users/users-routing.module';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HttpClientModule } from '@angular/common/http';
import { DynamicFormComponent } from './modules/shared/components/dynamic-form/dynamic-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DynamicFormService } from './core/services/dynamic-form.service';
import { FormControlComponent } from './modules/shared/components/dynamic-form/form-control/form-control.component';
// import { ControlsComponent } from './modules/shared/components/dynamic-form/controls/inputControls.component';
import { MyLibModule } from 'my-lib';
import { HomeComponent } from './modules/shared/components/home/home.component';
import { JsonFormTemplateModule } from "../../projects/json-form-template/src/lib/json-form-template.module";
import { FormLibComponent } from './modules/shared/components/dynamic-form/form-lib/form-lib.component';
import { FormsModule } from '@angular/forms';
import { InputComponent } from './modules/shared/components/dynamic-form/controls/input/input.component';
import { ButtonComponent } from './modules/shared/components/dynamic-form/controls/button/button.component';
import { SelectComponent } from './modules/shared/components/dynamic-form/controls/select/select.component';
import { TextareaComponent } from './modules/shared/components/dynamic-form/controls/textarea/textarea.component';
import { DatalistComponent } from './modules/shared/components/dynamic-form/controls/datalist/datalist.component';
import { RadioComponent } from './modules/shared/components/dynamic-form/controls/radio/radio.component';
import { CheckboxComponent } from './modules/shared/components/dynamic-form/controls/checkbox/checkbox.component';
// import { JsonFormTemplateModule } from 'jsonFormTemplate';
@NgModule({
    declarations: [
        AppComponent,
        SharedComponent,
        HeaderComponent,
        DynamicFormComponent,
        FormControlComponent,
        // ControlsComponent,
        HomeComponent,
        SharedComponent,
        FormLibComponent,
        InputComponent,
        ButtonComponent,
        SelectComponent,
        TextareaComponent,
        DatalistComponent,
        RadioComponent,
        CheckboxComponent
    ],
    providers: [DynamicFormService],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        HttpClientModule,
        ReactiveFormsModule,
        AppRoutingModule,
        StoreModule.forRoot({}),
        EffectsModule.forRoot(),
        StoreDevtoolsModule.instrument({
            maxAge: 25,
            autoPause: true, // Pauses recording actions and state changes when the extension window is not open
        }),
        MyLibModule,
        JsonFormTemplateModule,
        FormsModule
        
    ]
})
export class AppModule { }
