import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../../models/user';
import { Project } from '../../../models/project';
import { HttpService } from '../../../http.service';

@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.css']
})
export class AddtaskComponent implements OnInit {

  users: User[];
  projects: Project[];
  createTask: FormGroup;
  task_name;
  of_project;
  users_assigned;
  constructor(private httpService: HttpService, private fb: FormBuilder) {
    this.createTask = this.fb.group({
      task_name: [''],
      of_project: [''],
      users_assigned: ['']
    });
  }


  addTask() {
    const task = {
      task_name: this.task_name,
      of_project: this.of_project,
      users_assigned: this.users_assigned
    };
    this.httpService.doPost('/task/add', task);
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
