import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BugRoutingModule } from './bug-routing.module';
import { AddbugComponent } from './addbug/addbug.component';

@NgModule({
  declarations: [AddbugComponent],
  imports: [
    CommonModule,
    BugRoutingModule
  ]
})
export class BugModule { }
