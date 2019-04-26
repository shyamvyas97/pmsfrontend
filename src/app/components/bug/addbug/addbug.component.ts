import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../../../models/user';
import { Project } from '../../../models/project';
import { Bug } from '../../../models/bug';
import { HttpService } from '../../../http.service';

@Component({
  selector: 'app-addbug',
  templateUrl: './addbug.component.html',
  styleUrls: ['./addbug.component.css']
})
export class AddbugComponent implements OnInit {

  users: User[];
  projects: Project[];
  bugs: Bug[];
  createBug: FormGroup;
  mode: string = 'Add';
  bug_name;
  of_project;
  users_assigned;

  constructor(private httpService: HttpService, private fb: FormBuilder, private router: Router, public route: ActivatedRoute) {
    this.createBug = this.fb.group({
      bug_name: ['', Validators.required],
      of_project: ['', Validators.required],
      users_assigned: ['', Validators.required]
    });
  }

  // addBug() {
  //   const task = {
  //     bug_name: this.bug_name,
  //     of_project: this.of_project,
  //     users_assigned: this.users_assigned
  //   };
  //   this.httpService.doPost('bug/add', task);
  //   // .subscribe(() => {
  //   //   this.router.navigate(['/dashboard']);
  //   // });
  // }

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
      this.bugsList(id);
      this.mode = "Edit";
    } else {
      this.mode = "Create";
      this.validator();
    }
  }

  bugsList(id) {
    this.httpService.doGet("bugs/" + id).subscribe((res: any) => {
      this.bug_name = res.bug_name;
      this.of_project = res.of_project;
      this.users_assigned = res.users_assigned;
      this.validator();
    });
  }

  validator() {
    this.createBug = this.fb.group({
      bug_name: [this.bug_name],
      of_project: [this.of_project],
      users_assigned: [this.users_assigned]
    });
  }

  onSubmit() {
    let that = this;
    let id = this.route.snapshot.params["id"];
    if (!id) {
      console.log(id);
      this.httpService.doPost("bug/add", this.createBug.value)
        .subscribe(
          (data: any) => {
            that.router.navigate(["bug"]);
          },
          (err: any) => { }
        );
    }
    else {
      this.httpService.doPatch("bugs/" + id, this.createBug.value)
        .subscribe(
          (data: any) => {
            that.router.navigate(["bug"]);
          },
          (err: any) => { }
        )
    }
  }

}


