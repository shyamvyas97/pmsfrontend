import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { MatToolbarModule, MatFormFieldModule, MatInputModule, MatDatepickerModule, MatOptionModule, MatSelectModule, MatIconModule, MatButtonModule, MatRadioModule, MatCardModule, MatTableModule, MatDividerModule, MatSnackBarModule, MatNativeDateModule, MatPaginator, MatPaginatorModule } from '@angular/material';
import { PermissionRoutingModule } from './permission-routing.module';
import { AddpermissionComponent } from './addpermission/addpermission.component';
import { ListpermissionComponent } from './listpermission/listpermission.component';

@NgModule({
  declarations: [AddpermissionComponent, ListpermissionComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PermissionRoutingModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatIconModule,
    MatButtonModule,
    MatRadioModule,
    MatCardModule,
    MatTableModule,
    MatDividerModule
  ]
})
export class PermissionModule { }
