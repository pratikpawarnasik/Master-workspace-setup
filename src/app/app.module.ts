import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedComponent } from './modules/shared/components/shared/shared.component';
import { HeaderComponent } from './modules/shared/components/header/header.component';
import { NavMenuComponent } from './modules/shared/components/nav-menu/nav-menu.component';
import { UsersRoutingModule } from './modules/users/users-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    SharedComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
