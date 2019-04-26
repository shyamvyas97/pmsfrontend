import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddpermissionComponent } from './addpermission/addpermission.component';
import { ListpermissionComponent } from './listpermission/listpermission.component';

const routes: Routes = [
  {
    path: '',
    component: ListpermissionComponent
  },
  {
    path: 'addpermission',
    component: AddpermissionComponent
  },
  {
    path: 'addpermission/:id',
    component: AddpermissionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PermissionRoutingModule { }
