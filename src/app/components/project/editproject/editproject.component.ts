import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpService } from '../../../http.service';
import { Project } from '../../../models/project';

@Component({
  selector: 'app-editproject',
  templateUrl: './editproject.component.html',
  styleUrls: ['./editproject.component.css']
})
export class EditprojectComponent implements OnInit {

  id: String;
  editForm: FormGroup;
  constructor(private httpService: HttpService, private fb: FormBuilder, private router: Router, private route: ActivatedRoute) {
    this.createForm();
   }

   createForm() {
    this.editForm = this.fb.group({
      title: ['', Validators.required],
      responsible: '',
      description: '',
      severity: '',
      status: ''
    });
  }

  ngOnInit() {
  }

}
