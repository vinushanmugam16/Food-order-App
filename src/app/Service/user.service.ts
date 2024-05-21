import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { Loginuser } from '../model/loginuser';
import { Item } from '../model/item';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})

export class UserService {

  constructor(private http: HttpClient, private route: Router) { }
  private registerUrl = environment.baseUrl + environment.regUrl;
  private loginUrl = environment.baseUrl + environment.loginUrl;
  public userDetail: User[] = [];
  public loginDetail: Loginuser[] = [];
  public addingCart: Item[] = [];

  public createRegisterUser(userDetail: User) {
    return this.http.post(this.registerUrl, userDetail);
  }

  public getLoginUser() {
    return this.http.get(this.loginUrl);
  }

  public createLoginUser(username: string, password: any) {
    const user = { username, password }
    return this.http.post(this.loginUrl, user)
  }

  public login() {
    return sessionStorage.getItem('token') ? true : false
  }

  public logout() {
    sessionStorage.removeItem('user');
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('myorder');
    this.route.navigateByUrl('login');
  }
}