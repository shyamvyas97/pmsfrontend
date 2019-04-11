import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListtaskComponent } from "./listtask/listtask.component";
import { AddtaskComponent } from "./addtask/addtask.component";

const routes: Routes = [
  {
    path: '',
    component: ListtaskComponent
  },
  {
    path: 'addtask',
    component: AddtaskComponent
  },
  {
    path: 'addtask/:id',
    component: AddtaskComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskRoutingModule { }
