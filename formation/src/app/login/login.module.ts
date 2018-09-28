import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './containers/login/login.component';
import { LoginRoutingModule } from './login-routing.module';
import { LoginService } from '../prestations/services/login.service';

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule
  ],
  declarations: [LoginComponent]
})
export class LoginModule {

  constructor(private loginService: LoginService) {

  }
}
