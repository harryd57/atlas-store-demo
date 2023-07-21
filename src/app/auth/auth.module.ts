import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalModule } from '../global/global.module';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    GlobalModule,
    AppRoutingModule
  ]
})
export class AuthModule { }
