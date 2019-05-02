import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { MatToolbarModule, MatRadioModule, MatFormFieldModule, MatInputModule, MatDatepickerModule, MatOptionModule, MatSelectModule, MatIconModule, MatButtonModule, MatCardModule, MatTableModule, MatDividerModule, MatSnackBarModule, MatNativeDateModule, MatPaginator, MatPaginatorModule } from '@angular/material';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { DateAdapterComponent } from './date-adapter/date-adapter.component';
import { AuthGuardService } from './guards/auth-guard.service';
import { DashboardComponent } from './components/dashboard/dashboard.component';

// import { JwtModule } from '@auth0/angular-jwt';

const routes: Routes = [
  {
    path: 'project',
    loadChildren: './components/project/project.module#ProjectModule'
  },
  {
    path: 'bug',
    loadChildren: './components/bug/bug.module#BugModule'
  },
  {
    path: 'user',
    loadChildren: './components/user/user.module#UserModule'
  },
  {
    path: 'task',
    loadChildren: './components/task/task.module#TaskModule'
  },
  {
    path: 'entity',
    loadChildren: './components/entity/entity.module#EntityModule'
  },
  {
    path: 'permission',
    loadChildren: './components/permission/permission.module#PermissionModule'
  }
];


@NgModule({
  declarations: [
    AppComponent,
    DateAdapterComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    HttpClientModule,
    MatToolbarModule,
    MatRadioModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    MatDividerModule,
    FormsModule,
    ReactiveFormsModule,
    // JwtModule.forRoot({}),
    RouterModule.forRoot(routes,{useHash: true}),
  ],
  providers: [AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
