import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { UiComponent } from './containers/ui/ui.component';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';





@NgModule({
  imports: [
    CommonModule,
    FontAwesomeModule,
     RouterModule
  ],
  declarations: [
    UiComponent,
    HeaderComponent,
    NavComponent,
    FooterComponent
],
  exports:
  [UiComponent]
})
export class UiModule { }
