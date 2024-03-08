import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { Loginuser } from '../model/loginuser';
import { Item } from '../model/item';
import { map } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  constructor(private http:HttpClient ,private route:Router) { }

  userDetail:User[]=[];
  loginDetail:Loginuser[]=[];
  addingCart:Item[]=[];
  url='http://localhost:3000/registerdetails'

  createData(userDetail:User){
    return this.http.post(this.url,userDetail);
  }

  createLogin(loginDetail:Loginuser){
    return this.http.post('http://localhost:3000/logindetails',loginDetail);
  }
  
  createCart(addingCart:Item){
    return this.http.post('http://localhost:3000/addcart',addingCart);
  }

  getUsername(userName)
  {
    return this.http.get('http://localhost:3000/registerdetails')
    .pipe((map(user=>{
        if(Array.isArray(user)){
          const usernameDetail=user.find(userN=>userN.username === userName);      
           if(usernameDetail)
           {
              sessionStorage.setItem('user',usernameDetail.username);
              return usernameDetail;
           }
           else{
           return false;
           }         
        }
    })))
  }

 login(){
   return sessionStorage.getItem('user') ? true:false;
 }

 logout(){
  sessionStorage.removeItem('user');
  this.route.navigateByUrl('login');
 }




}
