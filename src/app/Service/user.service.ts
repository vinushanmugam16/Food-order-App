import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { Loginuser } from '../model/loginuser';
import { Item } from '../model/item';
import { map } from 'rxjs';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  constructor(private http: HttpClient, private route: Router) { }
  private registerUrl = environment.regUrl;
  private loginUrl = environment.loginUrl;

  userDetail: User[] = [];
  loginDetail: Loginuser[] = [];
  addingCart: Item[] = [];

  public createData(userDetail: User) {
    return this.http.post(this.registerUrl, userDetail);
  }

  public createLogin(loginDetail: Loginuser) {
    return this.http.post(this.loginUrl, loginDetail);
  }

  public getUsername(userName,pass) {
    return this.http.get(this.registerUrl)
      .pipe((map(user => {
        if (Array.isArray(user)) {
          const usernameDetail = user.find(userN => userN.username === userName && userN.password === pass);
          if (usernameDetail) {
            sessionStorage.setItem('user', usernameDetail.username);
            sessionStorage.setItem('password',usernameDetail.pass);
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

