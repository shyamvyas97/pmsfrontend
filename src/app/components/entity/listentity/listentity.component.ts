import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../../../http.service';
import { Entity } from '../../../models/entity';

@Component({
  selector: 'app-listentity',
  templateUrl: './listentity.component.html',
  styleUrls: ['./listentity.component.css']
})
export class ListentityComponent implements OnInit {

  entityList: Entity[];
  public entities: any;
  constructor(private httpService: HttpService, private router: Router) { }

  ngOnInit() {
    this.getEntities();
  }

  getEntities() {
    this.httpService.doGet("entities").subscribe(res => {
      this.entities = res;
    });
    console.log(this.entities);
  }

  deleteEntity($event) {
    let id = $event.target.id;
    let that = this;
    this.httpService.doDel("entities/" + id).subscribe(res => {
      that.getEntities();
    });
  }

  addEntity() {
    this.router.navigate(['/addentity']);
  }

}
