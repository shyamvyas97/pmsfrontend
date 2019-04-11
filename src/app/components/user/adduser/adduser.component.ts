import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
  name;
  email;
  role_name;
  constructor(private httpService: HttpService, private fb: FormBuilder, private router: Router) { 
    this.createUser = this.fb.group({
      name: [''],
      email: [''],
      role_name: ['']
    });
  }

  addUser(){
    const user = {
        name: this.name,
        email: this.email,
        role_name: this.role_name
      };
    this.httpService.doPost('/user/add',user);
    // .subscribe(() => {
    //   this.router.navigate(['/dashboard']);
    // });
  }

  fetchRoles() {
    this.httpService.doGet('/roles')
    .subscribe((data: Role[]) => {
        this.roles = data;
        console.log('Data requested ...');
        console.log(this.roles);
      });
  }

  ngOnInit() {
    this.fetchRoles();
  }

}