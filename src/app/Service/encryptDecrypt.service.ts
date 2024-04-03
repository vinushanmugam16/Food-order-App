import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class EncryptDecryptService {

  keys: string = '123'
  password:string;
  constructor() { }

  convertText(password: string) {

    CryptoJS.AES.encrypt(password, this.keys).toString();


    CryptoJS.AES.decrypt(password, this.keys).toString(CryptoJS.enc.Utf8);


  }
}
