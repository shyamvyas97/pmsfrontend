import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../../../http.service';
import { User } from '../../../models/user';

@Component({
  selector: 'app-listuser',
  templateUrl: './listuser.component.html',
  styleUrls: ['./listuser.component.css']
})
export class ListuserComponent implements OnInit {

  userList: User[];
  public users: any;
  constructor(private httpService: HttpService, private router:Router) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers(){
    this.httpService.doGet("/users").subscribe(res=>{
      this.users = res;
    });
    console.log(this.users);
  }

  deleteUser($event) 
   {
    let id = $event.target.id;
    let that = this;
    this.httpService.doDel("users/" + id).subscribe(res => {
      that.getUsers();
    });
  }

  addUser()
  {
  	this.router.navigate(['/users/add']);
  }

}
