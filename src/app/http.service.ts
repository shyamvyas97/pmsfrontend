import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  // uri = 'http://139.59.25.162:3000/';
  uri = 'http://localhost:3000/';

  public loggedIn = new BehaviorSubject<boolean>(false);

  get isLoggedIn() {
    return this.loggedIn.asObservable(); // {2}
  }

  constructor(private router: Router, private http: HttpClient) { }

  doPost(path,data){
    return this.http.post(`${this.uri}` + path, data);    
  }

  doGet(path){
    return this.http.get(`${this.uri}` + path);
  }

  doDel(path){
    return this.http.delete(`${this.uri}` + path)
  }

  doPatch(path,data)
  {
    return this.http.put(`${this.uri}` + path,data);
  }

  doLogin(path,data)
  {
    this.loggedIn.next(true);
    this.router.navigate(['/user']);
    return this.http.post(`${this.uri}` + path, data);
  }
}
