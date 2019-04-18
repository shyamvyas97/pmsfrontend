import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../../../models/user';
import { HttpService } from '../../../http.service';
// import {MAT_MOMENT_DATE_FORMATS, MAT_MOMENT_DATE_ADAPTER_OPTIONS, MomentDateAdapter} from '@angular/material-moment-adapter';
// import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
// import { DatePickerAdapter } from '../../../date-picker-adapter';
// import { DateAdapter, MAT_DATE_FORMATS  }  from '@angular/material';
// import * as _moment from 'moment';
// import {default as _rollupMoment} from 'moment';

// const moment = _rollupMoment || _moment;
// export const APP_DATE_FORMATS =
// {
//     parse: {
//         dateInput: { month: 'short', year: 'numeric', day: 'numeric' },
//     },
//     display: {
//         dateInput: { month: 'short', year: 'numeric', day: 'numeric' },
//         monthYearLabel: { year: 'numeric' }
//     }
// };

@Component({
  selector: 'app-addproject',
  templateUrl: './addproject.component.html',
  styleUrls: ['./addproject.component.css'],
  providers: [
  //   {
  //      provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS
        // {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
        // {provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS},
        // { provide: MAT_MOMENT_DATE_ADAPTER_OPTIONS, useValue: { useUtc: true } }
  //   }
]
})
export class AddprojectComponent implements OnInit {

  users: User[];
  createProject: FormGroup;
  mode: string = 'Add';
  title;
  desc;
  multiple_users;
  start_date;
  end_date;
  constructor(private httpService: HttpService, private fb: FormBuilder, private router: Router, public route: ActivatedRoute) {
    this.createProject = this.fb.group({
      title: [''],
      desc: [''],
      multiple_users: [''],
      start_date: [''],
      end_date: ['']
    });
  }

  // addProject() {
  //   const project = {
  //     title: this.title,
  //     desc: this.desc,
  //     mutiple_users: this.multiple_users,
  //     start_date: this.start_date,
  //     end_date: this.end_date
  //   };
  //   this.httpService.doPost('project/add', project);
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

  ngOnInit() {
    this.fetchUsers();
    let id = this.route.snapshot.params["id"];
    
    if (id) {
      this.projectsList(id);
      this.mode = "Edit";
    } else {
      this.mode = "Create";
      this.validator();
    }
  }

  projectsList(id) {
    this.httpService.doGet("projects/" + id).subscribe((res: any) => {
      this.title = res.title;
      this.desc = res.desc;
      this.multiple_users = res.multiple_users;
      this.start_date = res.start_date;
      this.end_date = res.end_date;
      this.validator();
    });
  }

  validator() {
    this.createProject = this.fb.group({
      title: [this.title],
      desc: [this.desc],
      multiple_users: [this.multiple_users],
      start_date: [this.start_date],
      end_date: [this.end_date]
    });
  }

  onSubmit() {
    let that = this;
    let id = this.route.snapshot.params["id"];
    if (!id) {
      console.log(id);
      console.log(this.createProject.value);
      this.httpService.doPost("project/add", this.createProject.value)
        .subscribe(
          (data: any) => {
            that.router.navigate(["project"]);
          },
          (err: any) => { }
        );
    }
    else {
      this.httpService.doPatch("projects/" + id, this.createProject.value)
        .subscribe(
          (data: any) => {
            that.router.navigate(["project"]);
          },
          (err: any) => { }
        )
    }
  }

}
