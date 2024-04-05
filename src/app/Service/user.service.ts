import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { Loginuser } from '../model/loginuser';
import { Item } from '../model/item';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.development';
import { catchError, throwError } from 'rxjs';
import * as CryptoJS from 'crypto-js';

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
  private keys: string = '123';

  public createData(userDetail: User) {
    try {
      return this.http.post(this.registerUrl, userDetail).pipe(
        catchError(error => {
          console.error('Error', error);
          return throwError(error);
        })
    )}
    catch (error) {
      console.error(error);
      return throwError(error);
    }
  }

  public createLogin(loginDetail: Loginuser) {
    return this.http.post(this.loginUrl, loginDetail);
  }

  public getUsername() {
    return this.http.get(this.registerUrl);
  }

  public login() {
    return sessionStorage.getItem('user') && sessionStorage.getItem('password') ? true : false;
  }

  public logout() {
    sessionStorage.removeItem('user');
    sessionStorage.removeItem('password');
    sessionStorage.removeItem('myorder');
    this.route.navigateByUrl('login');
  }

  encryptPassword(password: string) {
    return CryptoJS.AES.encrypt(password, this.keys).toString();
  }

  decryptPassword(password: string) {
    return CryptoJS.AES.decrypt(password, this.keys).toString(CryptoJS.enc.Utf8);
  }
}

