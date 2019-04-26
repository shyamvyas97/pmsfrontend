import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdduserComponent } from './adduser/adduser.component';
import { ListuserComponent } from './listuser/listuser.component';
import { LoginuserComponent } from './loginuser/loginuser.component';

import { AuthGuardService } from '../../guards/auth-guard.service';
import { HomeComponent } from './home/home.component';

const roles = ["admin","developer","Q.A."];
const routes: Routes = [
  {
    path: 'login',
    component: LoginuserComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '',
    component: ListuserComponent
    // canActivate: [AuthGuardService]
    // data: {
    //   allowedRoles: ['admin','developer','Q.A.']
    // }
  },
  {
    path: 'adduser',
    component: AdduserComponent
    // canActivate: [AuthGuardService]
    // data: {
    //   allowedRoles: ['admin']
    // }
  },
  {
    path: 'adduser/:id',
    component: AdduserComponent
    // canActivate: [AuthGuardService]
    // data: {
    //   allowedRoles: ['admin']
    // }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
