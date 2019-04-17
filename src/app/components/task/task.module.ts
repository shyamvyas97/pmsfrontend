import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule, MatFormFieldModule, MatInputModule, MatDatepickerModule, MatOptionModule, MatSelectModule, MatIconModule, MatButtonModule, MatCardModule, MatTableModule, MatDividerModule, MatSnackBarModule, MatNativeDateModule, MatPaginator, MatPaginatorModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { TaskRoutingModule } from './task-routing.module';
import { AddtaskComponent } from './addtask/addtask.component';
import { ListtaskComponent } from './listtask/listtask.component';

@NgModule({
  declarations: [AddtaskComponent, ListtaskComponent],
  imports: [
    CommonModule,
    TaskRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    MatDividerModule
  ]
})
export class TaskModule { }
