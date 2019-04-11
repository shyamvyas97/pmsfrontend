import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../../models/user';
import { Project } from '../../../models/project';
import { HttpService } from '../../../http.service';

@Component({
  selector: 'app-addbug',
  templateUrl: './addbug.component.html',
  styleUrls: ['./addbug.component.css']
})
export class AddbugComponent implements OnInit {

  users: User[];
  projects: Project[];
  createBug: FormGroup;
  bug_name;
  of_project;
  users_assigned;

  constructor(private httpService: HttpService, private fb: FormBuilder) {
    this.createBug = this.fb.group({
      bug_name: [''],
      of_project: [''],
      users_assigned: ['']
    });
  }

  addBug() {
    const task = {
      bug_name: this.bug_name,
      of_project: this.of_project,
      users_assigned: this.users_assigned
    };
    this.httpService.doPost('/bug/add', task);
    // .subscribe(() => {
    //   this.router.navigate(['/dashboard']);
    // });
  }

  fetchUsers() {
    this.httpService.doGet('/users')
      .subscribe((data: User[]) => {
        this.users = data;
        console.log('Data requested ...');
        console.log(this.users);
      });
  }

  fetchProjects() {
    this.httpService.doGet('/projects')
      .subscribe((data: Project[]) => {
        this.projects = data;
        console.log('Data requested ...');
        console.log(this.projects);
      });
  }


  ngOnInit() {
    this.fetchProjects();
    this.fetchUsers();
  }

}
