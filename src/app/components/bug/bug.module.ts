import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule, MatFormFieldModule, MatInputModule, MatDatepickerModule, MatOptionModule, MatSelectModule, MatIconModule, MatButtonModule, MatCardModule, MatTableModule, MatDividerModule, MatSnackBarModule, MatNativeDateModule, MatPaginator, MatPaginatorModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { BugRoutingModule } from './bug-routing.module';
import { AddbugComponent } from './addbug/addbug.component';
import { ListbugComponent } from './listbug/listbug.component';

@NgModule({
  declarations: [AddbugComponent, ListbugComponent],
  imports: [
    CommonModule,
    BugRoutingModule,
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
export class BugModule { }
