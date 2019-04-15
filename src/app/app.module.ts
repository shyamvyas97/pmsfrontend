import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { MatToolbarModule, MatFormFieldModule, MatInputModule, MatDatepickerModule, MatOptionModule, MatSelectModule, MatIconModule, MatButtonModule, MatCardModule, MatTableModule, MatDividerModule, MatSnackBarModule, MatNativeDateModule, MatPaginator, MatPaginatorModule } from '@angular/material';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { NoPreloading, PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

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
  }
];


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    HttpClientModule,
    MatToolbarModule,
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
    RouterModule.forRoot(routes,{useHash: true}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
