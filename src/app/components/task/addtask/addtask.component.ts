import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../../../models/user';
import { Project } from '../../../models/project';
import { Task } from '../../../models/task';
import { HttpService } from '../../../http.service';

@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.css']
})
export class AddtaskComponent implements OnInit {

  users: User[];
  projects: Project[];
  tasks: Task[];
  createTask: FormGroup;
  mode: string = 'Add';
  task_name;
  of_project;
  users_assigned;
  constructor(private httpService: HttpService, private fb: FormBuilder, private router: Router, public route: ActivatedRoute) {
    this.createTask = this.fb.group({
      task_name: [''],
      of_project: [''],
      users_assigned: ['']
    });
  }

  fetchUsers() {
    this.httpService.doGet('users')
      .subscribe((data: User[]) => {
        this.users = data;
        console.log('Data requested ...');
        console.log(this.users);
      });
  }

  fetchProjects() {
    this.httpService.doGet('projects')
      .subscribe((data: Project[]) => {
        this.projects = data;
        console.log('Data requested ...');
        console.log(this.projects);
      });
  }

  ngOnInit() {
    this.fetchProjects();
    this.fetchUsers();
    let id = this.route.snapshot.params["id"];
    
    if (id) {
      this.tasksList(id);
      this.mode = "Edit";
    } else {
      this.mode = "Create";
      this.validator();
    }
  }

  tasksList(id) {
    this.httpService.doGet("tasks/" + id).subscribe((res: any) => {
      this.task_name = res.task_name;
      this.of_project = res.of_project;
      this.users_assigned = res.users_assigned;
      this.validator();
    });
  }

  validator() {
    this.createTask = this.fb.group({
      task_name: [this.task_name],
      of_project: [this.of_project],
      users_assigned: [this.users_assigned]
    });
  }

  onSubmit() {
    let that = this;
    let id = this.route.snapshot.params["id"];
    if (!id) {
      console.log(id);
      this.httpService.doPost("task/add", this.createTask.value)
        .subscribe(
          (data: any) => {
            that.router.navigate(["task"]);
          },
          (err: any) => { }
        );
    }
    else {
      this.httpService.doPatch("tasks/" + id, this.createTask.value)
        .subscribe(
          (data: any) => {
            that.router.navigate(["task"]);
          },
          (err: any) => { }
        )
    }
  }

}

