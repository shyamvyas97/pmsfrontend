import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormArray } from '@angular/forms';
import { HttpService } from '../../../http.service';
// import { Route } from "@angular/compiler/src/core";
import { ActivatedRoute, Router } from "@angular/router";
// import { concatMap } from 'rxjs';
import { User } from '../../../models/user';
import { Permission } from 'src/app/models/permission';

@Component({
  selector: 'app-loginuser',
  templateUrl: './loginuser.component.html',
  styleUrls: ['./loginuser.component.css']
})
export class LoginuserComponent implements OnInit {

  public users;
  public permissions: any;
  public role: any;
  public loginForm: FormGroup;
  email;

  constructor(public fb: FormBuilder, public httpService: HttpService, public route: ActivatedRoute, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  ngOnInit() {
    if (localStorage.getItem('isLoggedin') == 'true') {
      this.router.navigate(['/user']);
    }
    this.validator();
  }

  // fetch the roles

  // async fetchRole() {
  //   await this.login();
  //   this.httpService.doGet("users").subscribe(res => {
  //     this.users = res;
  //   });
  //   console.log(this.users.role_name);
  // }

  //1st function to call

  login() {
    let that = this;
    this.httpService
      .doLogin("login", this.loginForm.value)
      .subscribe(
        (data: any) => {
          console.log(data);
          if (data.message == 'fail') {
            alert('Failed');
          }
          else {
            localStorage.setItem('user', JSON.stringify(data.role_name));
            localStorage.setItem('isLoggedin', 'true');
            that.router.navigate(["/home"]);
          }
        },
        (err: any) => { }
      );
  }

  //2nd function to call

  getPermission() {
    var lsuser = JSON.parse(localStorage.getItem('user'));
    console.log(lsuser);

    for (var i = 0; i < lsuser.length; i++) {
      var item = lsuser[i];
    }

    this.role = item.name;
    console.log(this.role);
    this.httpService.doGet('permissions/' + this.role).subscribe((res: Permission[]) => {
      this.permissions = res;
    });
    console.log(this.permissions)
  }

  //Last function to call

  // getAlldata() {
  //   this.login();
  //   console.log()
  //     .subscribe(
  //       () => {
  //         this.getPermission();
  //       })
  //     .subscribe(
  //       () => { console.log(); });
  // }

  validator() {
    this.loginForm = this.fb.group({
      email: [this.email],
    });
  }

}