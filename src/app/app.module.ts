import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedComponent } from './modules/shared/components/shared/shared.component';
import { HeaderComponent } from './modules/shared/components/header/header.component';
import { NavMenuComponent } from './modules/shared/components/nav-menu/nav-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    SharedComponent,
    HeaderComponent,
    NavMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
