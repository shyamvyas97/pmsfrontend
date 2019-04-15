import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
// import { DataSource } from '@angular/cdk/collections';
// import { Observable } from 'rxjs';
import { HttpService } from '../../../http.service';
import { Project } from '../../../models/project';

@Component({
  selector: 'app-listproject',
  templateUrl: './listproject.component.html',
  styleUrls: ['./listproject.component.css']
})
export class ListprojectComponent implements OnInit {

  // MyDataSource = new ProjectDataSource(this.httpService);
  projectList: Project[];
  public projects: any; 
 	displayedColumns: string[] = ['title', 'desc', 'multiple_users', 'start_date', 'end_date', 'actions'];

  constructor(private httpService: HttpService, private router:Router) { }

  ngOnInit() {
    this.getProjects();
  }

  getProjects(){
    this.httpService.doGet("projects").subscribe(res=>{
      this.projects = res;
    });
    console.log(this.projects);
  }

  deleteProject($event) 
   {
    let id = $event.target.id;
    let that = this;
    this.httpService.doDel("projects/" + id).subscribe(res => {
      that.getProjects();
    });
  }

  addProject()
  {
  	this.router.navigate(['/addproject']);
  }


}

// export class ProjectDataSource extends DataSource<any> {
//   constructor(private httpService: HttpService) {
//     super();
//   }

//   connect(): Observable<Project[]> {
//     return this.httpService.doGet('/project');
//   }
//   disconnect() {}
// }
