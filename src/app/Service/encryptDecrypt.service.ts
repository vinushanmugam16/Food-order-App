import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class EncryptDecryptService {

  keys: string = '123';
  password: string;

  encryptPassword(password: string) {
    return CryptoJS.AES.encrypt(password, this.keys).toString();
  }

  decryptPassword(password: string) {
    return CryptoJS.AES.decrypt(password, this.keys).toString(CryptoJS.enc.Utf8);
  }
}
