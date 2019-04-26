import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public role: any;
  public id: any;
  public permission: any;

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    var lsuser = JSON.parse(localStorage.getItem('user'));
    console.log(lsuser);
    for (var i = 0; i < lsuser.length; i++) {
      var item = lsuser[i];
    }
    this.role = item.name;
    this.id = item._id;
    console.log(this.role);
    
    this.httpService.doGet("permissions/" + this.id).subscribe(res=>{
      this.permission = res;
    });
    console.log(this.permission);

  }

  
}
