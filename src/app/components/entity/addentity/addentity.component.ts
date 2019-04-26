import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpService } from '../../../http.service';

@Component({
  selector: 'app-addentity',
  templateUrl: './addentity.component.html',
  styleUrls: ['./addentity.component.css']
})
export class AddentityComponent implements OnInit {

  createEntity: FormGroup;
  mode: string = 'Add';
  entity_name;

  constructor(private httpService: HttpService, private fb: FormBuilder, private router: Router, public route: ActivatedRoute) {
    this.createEntity = this.fb.group({
      entity: ['', Validators.required]
    });
  }

  ngOnInit() {
    let id = this.route.snapshot.params["id"];

    if (id) {
      this.entitiesList(id);
      this.mode = "Edit";
    } else {
      this.mode = "Create";
      this.validator();
    }
  }

  entitiesList(id) {
    this.httpService.doGet("entities/" + id).subscribe((res: any) => {
      this.entity_name = res.entity_name;
      this.validator();
    });
  }

  validator() {
    this.createEntity = this.fb.group({
      entity_name: [this.entity_name]
    });
  }

  onSubmit() {
    let that = this;
    let id = this.route.snapshot.params["id"];
    if (!id) {
      console.log(id);
      console.log(this.createEntity.value);
      this.httpService.doPost("entity/add", this.createEntity.value)
        .subscribe(
          (data: any) => {
            that.router.navigate(["entity"]);
          },
          (err: any) => { }
        );
    }
    else {
      this.httpService.doPatch("entities/" + id, this.createEntity.value)
        .subscribe(
          (data: any) => {
            that.router.navigate(["entity"]);
          },
          (err: any) => { }
        )
    }
  }
}