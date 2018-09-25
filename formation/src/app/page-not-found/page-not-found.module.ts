import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './containers/page-not-found/page-not-found.component';
import { PagenotfoundroutingModule } from './pagenotfoundrouting.module';

@NgModule({
  imports: [
    CommonModule,
    PagenotfoundroutingModule
  ],
  declarations: [ PageNotFoundComponent],
  exports : [PageNotFoundComponent]
})
export class PageNotFoundModule { }
