import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddprojectComponent } from './addproject/addproject.component';
import { ListprojectComponent } from './listproject/listproject.component';

const routes: Routes = [
  {
    path: '',
    component: ListprojectComponent
  },
  {
    path: 'addproject',
    component: AddprojectComponent
  },
  {
    path: 'addproject/:id',
    component: AddprojectComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectRoutingModule { }
