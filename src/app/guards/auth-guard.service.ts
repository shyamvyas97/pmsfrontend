import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpService } from '../http.service';
import { BehaviorSubject } from 'rxjs';
import { map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class AuthGuardService implements CanActivate {

  public role: any;
  public loggedIn = new BehaviorSubject<boolean>(false);

  get isLoggedIn() {
    return this.loggedIn.asObservable(); // {2}
  }
  constructor(private httpService: HttpService, private router: Router) { }

  // isAuthenticated(): boolean {
  //   var lsuser = JSON.parse(localStorage.getItem('user'));
  //   console.log(lsuser);

  //   for (var i = 0; i < lsuser.length; i++) {
  //     var item = lsuser[i];
  //   }

  //   this.role = item.name;
  //   console.log(this.role);
  //   return localStorage.getItem('user') != null;
  // }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    if(this.loggedIn){
      // .pipe(
      //   take(1),
      //   map((isLoggedIn: boolean) => {
          // if (!this.isLoggedIn) {
            this.router.navigate(['user/login']);
            return false;
          // }
          return true;
        }
      
  
  
  
    }
}



// if (this.isAuthenticated()) {
  // this.router.navigate(['home']);
  // return false;
// }

// this.router.navigate(['login']);
// return true;