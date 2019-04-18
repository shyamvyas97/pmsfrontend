import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule, MatFormFieldModule, MatInputModule, MatDatepickerModule, MatOptionModule, MatSelectModule, MatIconModule, MatButtonModule, MatCardModule, MatTableModule, MatDividerModule, MatSnackBarModule, MatNativeDateModule, MatPaginator, MatPaginatorModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { ProjectRoutingModule } from './project-routing.module';
import { AddprojectComponent } from './addproject/addproject.component';
import { ListprojectComponent } from './listproject/listproject.component';
import { EditprojectComponent } from './editproject/editproject.component';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
// import {DateAdapter, MAT_DATE_FORMATS  }  from '@angular/material';

@NgModule({
  declarations: [AddprojectComponent, ListprojectComponent, EditprojectComponent],
  imports: [
    CommonModule,
    ProjectRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatOptionModule,
    MatSelectModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    MatDividerModule,
    MatNativeDateModule,
    MatMomentDateModule
  ]
})
export class ProjectModule { }
