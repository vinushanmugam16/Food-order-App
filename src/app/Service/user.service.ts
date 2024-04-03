import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { Loginuser } from '../model/loginuser';
import { Item } from '../model/item';
import { catchError, map, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})

export class UserService {

  constructor(private http: HttpClient, private route: Router) { }
  private registerUrl = environment.baseUrl +environment.regUrl;
  private loginUrl = environment.baseUrl+environment.loginUrl;

  userDetail: User[] = [];
  loginDetail: Loginuser[] = [];
  addingCart: Item[] = [];

  public createData(userDetail: User) {
    return this.http.post(this.registerUrl, userDetail)
    .pipe(
      catchError(this.handleError)
    )
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }

    return throwError('Something bad happened; please try again later.');
  }

  public createLogin(loginDetail: Loginuser) {
    return this.http.post(this.loginUrl, loginDetail);
  }

  public getUsername(userName:string,password:string) {
    return this.http.get(this.registerUrl)
      .pipe((map(user => {
        if (Array.isArray(user)) {
          const usernameDetail = user.find(userN => userN.username === userName && userN.password === password);
          if (usernameDetail) {
            sessionStorage.setItem('user', usernameDetail.username);
            sessionStorage.setItem('password',usernameDetail.password);
            return usernameDetail;
          }
          else {
            return false;
          }
        }
      })))
  }

  public login() {
    return sessionStorage.getItem('user') && sessionStorage.getItem('password') ? true : false;
  }

  public logout() {
    sessionStorage.removeItem('user');
    sessionStorage.removeItem('password');
    this.route.navigateByUrl('login');
  }
}

