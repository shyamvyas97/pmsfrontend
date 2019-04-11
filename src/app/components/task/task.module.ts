import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskRoutingModule } from './task-routing.module';
import { AddtaskComponent } from './addtask/addtask.component';
import { ListtaskComponent } from './listtask/listtask.component';

@NgModule({
  declarations: [AddtaskComponent, ListtaskComponent],
  imports: [
    CommonModule,
    TaskRoutingModule
  ]
})
export class TaskModule { }
