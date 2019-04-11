import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  uri = 'http://localhost:4000/';

  constructor(private http: HttpClient) { }

  doPost(path,data){
    return this.http.post(`${this.uri}` + path, data);    
  }

  doGet(path){
    return this.http.get(`${this.uri}` + path);
  }

  doDel(path){
    return this.http.delete(`${this.uri}` + path)
  }

}
