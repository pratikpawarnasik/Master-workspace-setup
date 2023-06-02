import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { _authEffects } from 'src/app/core/store/effects/auth.effects';
import { AuthService } from 'src/app/core/services/auth.service';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { _authReducer } from 'src/app/core/store/reducers/auth.reducer';
import { PostsRoutingModule } from '../posts/posts-routing.module';
import { AuthRoutingModule } from './auth-routing.module';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature('authDataStore', _authReducer),
      EffectsModule.forFeature([ _authEffects]),
    PostsRoutingModule,
    AuthRoutingModule
  ],
  providers: [AuthService],
})
export class AuthModule { }


