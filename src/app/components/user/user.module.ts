import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSnackBar, MatToolbarModule, MatFormFieldModule, MatInputModule, MatDatepickerModule, MatOptionModule, MatSelectModule, MatIconModule, MatButtonModule, MatCardModule, MatTableModule, MatDividerModule, MatSnackBarModule, MatNativeDateModule, MatPaginator, MatPaginatorModule } from '@angular/material';
import { UserRoutingModule } from './user-routing.module';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { AdduserComponent } from './adduser/adduser.component';
import { ListuserComponent } from './listuser/listuser.component';
import { LoginuserComponent } from './loginuser/loginuser.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [AdduserComponent, ListuserComponent, LoginuserComponent, HomeComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBar,
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
export class UserModule { }
