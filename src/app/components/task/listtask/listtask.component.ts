import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../../../http.service';
// import { Project } from '../../../models/project';
// import { User } from '../../../models/user';
import { Task } from '../../../models/task';

@Component({
  selector: 'app-listtask',
  templateUrl: './listtask.component.html',
  styleUrls: ['./listtask.component.css']
})
export class ListtaskComponent implements OnInit {

  tasks: Task[];
  constructor(private httpService: HttpService, private router:Router) { }

  ngOnInit() {
    this.getTasks();
  }

  getTasks(){
    this.httpService.doGet("/tasks").subscribe((res: Task[]) => {
      this.tasks = res;
    });
    console.log(this.tasks);
  }

  deleteTask($event) 
   {
    let id = $event.target.id;
    let that = this;
    this.httpService.doDel("tasks/" + id).subscribe(res => {
      that.getTasks();
    });
  }

  addTask()
  {
  	this.router.navigate(['/tasks/add']);
  }

}

