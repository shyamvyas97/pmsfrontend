import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddentityComponent } from './addentity/addentity.component';
import { ListentityComponent } from './listentity/listentity.component';

const routes: Routes = [
  {
    path: '',
    component: ListentityComponent
  },
  {
    path: 'addentity',
    component: AddentityComponent
  },
  {
    path: 'addentity/:id',
    component: AddentityComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntityRoutingModule { }
