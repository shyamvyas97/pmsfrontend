import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule, MatFormFieldModule, MatInputModule, MatDatepickerModule, MatOptionModule, MatSelectModule, MatIconModule, MatButtonModule, MatCardModule, MatTableModule, MatDividerModule, MatSnackBarModule, MatNativeDateModule, MatPaginator, MatPaginatorModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

import { EntityRoutingModule } from './entity-routing.module';
import { AddentityComponent } from './addentity/addentity.component';
import { ListentityComponent } from './listentity/listentity.component';

@NgModule({
  declarations: [AddentityComponent, ListentityComponent],
  imports: [
    CommonModule,
    EntityRoutingModule,
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
export class EntityModule { }
