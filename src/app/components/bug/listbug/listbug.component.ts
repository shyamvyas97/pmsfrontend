import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../../../http.service';
// import { Project } from '../../../models/project';
// import { User } from '../../../models/user';
import { Bug } from '../../../models/bug';

@Component({
  selector: 'app-listbug',
  templateUrl: './listbug.component.html',
  styleUrls: ['./listbug.component.css']
})
export class ListbugComponent implements OnInit {

  bugs: Bug[];
  constructor(private httpService: HttpService, private router: Router) { }

  ngOnInit() {
    this.getBugs();
  }

  getBugs(){
    this.httpService.doGet("bugs").subscribe((res: Bug[]) => {
      this.bugs = res;
    });
    console.log(this.bugs);
  }

  deleteBug($event) 
   {
    let id = $event.target.id;
    let that = this;
    this.httpService.doDel("bugs/" + id).subscribe(res => {
      that.getBugs();
    });
  }

  addBug()
  {
  	this.router.navigate(['bugs/add']);
  }
}


