import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddbugComponent } from './addbug/addbug.component';
import { ListbugComponent } from './listbug/listbug.component';

const routes: Routes = [
  {
    path: '',
    component: ListbugComponent
  },
  {
    path: 'addbug',
    component: AddbugComponent
  },
  {
    path: 'addbug/:id',
    component: AddbugComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BugRoutingModule { }
