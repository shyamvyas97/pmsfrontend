import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Role } from '../../../models/role';
import { User } from '../../../models/user';
import { HttpService } from '../../../http.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})

export class AdduserComponent implements OnInit {

  roles: Role[];
  createUser: FormGroup;
  submitted = false;
  private formSubmitAttempt: boolean;
  mode: string = 'Add';
  name;
  email;
  role_name;

  constructor(private httpService: HttpService, private fb: FormBuilder, private router: Router, private route: ActivatedRoute) {
    this.createUser = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      role_name: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.fetchRoles();
    let id = this.route.snapshot.params["id"];

    if (id) {
      this.usersList(id);
      this.mode = "Edit";
    } 
    else {
      this.mode = "Create";
      this.validator();
    }
  }

  // convenience getter for easy access to form fields
  get c() { return this.createUser.controls; }

  // addUser(){
  //   const user = {
  //       name: this.name,
  //       email: this.email,
  //       role_name: this.role_name
  //     };
  //   this.httpService.doPost('user/add',user);
  //   // .subscribe(() => {
  //   //   this.router.navigate(['/dashboard']);
  //   // });
  // }

  fetchRoles() {
    this.httpService.doGet('roles')
      .subscribe((data: Role[]) => {
        this.roles = data;
        console.log('Data requested ...');
        console.log(this.roles);
      });
  }

  // isFieldInvalid(field: string) { // {6}
  //   return (
  //     (!this.createUser.get(field).valid && this.createUser.get(field).touched) ||
  //     (this.createUser.get(field).untouched && this.formSubmitAttempt)
  //   );
  // }

  usersList(id) {
    this.httpService.doGet("users/" + id).subscribe((res: any) => {
      this.name = res.name;
      this.email = res.email;
      this.role_name = res.role_name;
      this.validator();
    });
  }

  validator() {
    this.createUser = this.fb.group({
      name: [this.name],
      email: [this.email],
      role_name: [this.role_name]
    });
  }

  onSubmit() {
    this.submitted = true;
    let that = this;
    let id = this.route.snapshot.params["id"];
    if (!id) {
      // console.log(id);
      console.log(this.createUser.value);
      if (!this.createUser.invalid) {
        this.httpService.doPost("user/add", this.createUser.value)
          .subscribe(
            () => {
              that.router.navigate(["user"]);
            });
      }
    }
    else {
      this.httpService.doPatch("users/" + id, this.createUser.value)
        .subscribe(
          () => {
            that.router.navigate(["user"]);
          });
    }
    this.formSubmitAttempt = true;
  }

}

