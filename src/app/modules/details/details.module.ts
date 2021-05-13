import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailsRoutingModule } from './details-routing.module';
import { DetailsComponent } from './pages/details/details.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [DetailsComponent],
  imports: [
    CommonModule,
    DetailsRoutingModule,
    FontAwesomeModule
  ]
})
export class DetailsModule { }
