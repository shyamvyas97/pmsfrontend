import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BugRoutingModule } from './bug-routing.module';
import { AddbugComponent } from './addbug/addbug.component';
import { ListbugComponent } from './listbug/listbug.component';

@NgModule({
  declarations: [AddbugComponent, ListbugComponent],
  imports: [
    CommonModule,
    BugRoutingModule
  ]
})
export class BugModule { }
