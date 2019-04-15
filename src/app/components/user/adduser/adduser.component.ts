import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
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
  mode: string = 'Add';
  name;
  email;
  role_name;
  constructor(private httpService: HttpService, private fb: FormBuilder, private router: Router, public route: ActivatedRoute) { 
    this.createUser = this.fb.group({
      name: [''],
      email: [''],
      role_name: ['']
    });
  }

  ngOnInit() {
    this.fetchRoles();
    let id = this.route.snapshot.params["id"];
    
    if (id) {
      this.usersList(id);
      this.mode = "Edit";
    } else {
      this.mode = "Create";
      this.validator();
    }
  }

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
    let that = this;
    let id = this.route.snapshot.params["id"];
    if (!id) {
      console.log(id);
      this.httpService.doPost("user/add", this.createUser.value)
        .subscribe(
          (data: any) => {
            that.router.navigate(["users"]);
          },
          (err: any) => { }
        );
    }
    else {
      this.httpService.doPatch("users/" + id, this.createUser.value)
        .subscribe(
          (data: any) => {
            that.router.navigate(["users"]);
          },
          (err: any) => { }
        )
    }
  }

}

