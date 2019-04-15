import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdduserComponent } from './adduser/adduser.component';
import { ListuserComponent } from './listuser/listuser.component';

const routes: Routes = [
  {
    path: '',
    component: ListuserComponent
  },
  {
    path: 'adduser',
    component: AdduserComponent
  },
  {
    path: 'adduser/id',
    component: AdduserComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
