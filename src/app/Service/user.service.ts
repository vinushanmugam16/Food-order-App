import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { Loginuser } from '../model/loginuser';
import { Item } from '../model/item';
import { map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient ) { }

  userDetail:User[]=[];
  loginDetail:Loginuser[]=[];
  addingCart:Item[]=[];
  loggedIn:boolean=false;
  authen=[]

  url='http://localhost:3000/registerdetails'

  createData(userDetail:User){
    return this.http.post(this.url,userDetail)
  }

  createLogin(loginDetail:string){
    return this.http.post('http://localhost:3000/logindetails',loginDetail)
  }

  getData(){
    return this.http.get('items.json')
  }
  
  createCart(addingCart:string){
    return this.http.post('http://localhost:3000/addcart',addingCart)
  }

  getUsername(userName:string)
  {
    return this.http.get('http://localhost:3000/registerdetails')
    .pipe((map(user=>{
      if(Array.isArray(user)){
          const aunthenticate=user.find(userN=>userN.username === userName)
          console.log(aunthenticate);
          // this.loggedIn=true;
          // console.log(this.loggedIn);
          return aunthenticate;
      }
      return false;
    })))
  }

 login(){
  this.loggedIn=true;
 }
 logout(){
  this.loggedIn=false;
 }
  
  authenticate(){
    return this.loggedIn;
  }




}
