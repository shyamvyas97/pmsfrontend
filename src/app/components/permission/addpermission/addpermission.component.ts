import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Role } from '../../../models/role';
import { Entity } from '../../../models/entity';
import { HttpService } from '../../../http.service';

@Component({
  selector: 'app-addpermission',
  templateUrl: './addpermission.component.html',
  styleUrls: ['./addpermission.component.css']
})
export class AddpermissionComponent implements OnInit {

  submitted = false;
  private formSubmitAttempt: boolean;
  roles: Role[];
  entities: Entity[];
  createPermission: FormGroup;
  mode: string = 'Add';
  entity_name;
  role_name;
  add_edit;
  del;
  list;

  constructor(private httpService: HttpService, private fb: FormBuilder, private router: Router, private route: ActivatedRoute) {
    this.createPermission = this.fb.group({
      entity_name: ['', Validators.required],
      role_name: ['', Validators.required],
      add_edit: ['', Validators.required],
      del: ['', Validators.required],
      list: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.fetchRoles();
    this.fetchEntities();

    let id = this.route.snapshot.params["id"];

    if (id) {
      this.permissionsList(id);
      this.mode = "Edit";
    }
    else {
      this.mode = "Create";
      this.validator();
    }
  }

  permissionsList(id) {
    this.httpService.doGet("permissions/" + id).subscribe((res: any) => {
      this.entity_name = res.entity_name;
      this.role_name = res.role_name;
      this.add_edit = res.add_edit;
      this.del = res.del;
      this.list = res.list;
      this.validator();
    });
  }

  getc() { return this.createPermission.controls; }

  fetchRoles() {
    this.httpService.doGet('roles')
      .subscribe((data: Role[]) => {
        this.roles = data;
        console.log('Data requested ...');
        console.log(this.roles);
      });
  }

  fetchEntities() {
    this.httpService.doGet('entities')
      .subscribe((req_data: Entity[]) => {
        this.entities = req_data;
      });
  }

  validator() {
    this.createPermission = this.fb.group({
      entity_name: [this.entity_name],
      role_name: [this.entity_name],
      add_edit: [this.add_edit],
      del: [this.del],
      list: [this.list]
    })
  }

  onSubmit() {
    this.submitted = true;
    let that = this;
    let id = this.route.snapshot.params["id"];
    if (!id) {
      // console.log(id);
      if (!this.createPermission.invalid) {
        console.log(this.createPermission.value);
        this.httpService.doPost("permission/add", this.createPermission.value)
          .subscribe(
            () => {
              that.router.navigate(["permission"]);
            });
      }
    }
    else {
      this.httpService.doPatch("permissions/" + id, this.createPermission.value)
        .subscribe(
          () => {
            that.router.navigate(["permission"]);
          });
    }
    this.formSubmitAttempt = true;
  }


}
