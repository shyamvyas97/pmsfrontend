import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../../../http.service';
import { Permission } from '../../../models/permission';

@Component({
  selector: 'app-listpermission',
  templateUrl: './listpermission.component.html',
  styleUrls: ['./listpermission.component.css']
})
export class ListpermissionComponent implements OnInit {

  permissions: Permission[];
  constructor(private httpService: HttpService, private router: Router) { }

  ngOnInit() {
    this.getPermissions();
  }

  getPermissions() {
    this.httpService.doGet("permissions").subscribe((res: Permission[]) => {
      this.permissions = res;
    });
    console.log(this.permissions);
  }

  deletePermission($event) {
    let id = $event.target.id;
    let that = this;
    this.httpService.doDel("permissions/" + id).subscribe(res => {
      that.getPermissions();
    });
  }

  addPermission() {
    this.router.navigate(['addpermission']);
  }

}
