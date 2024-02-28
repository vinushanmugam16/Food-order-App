import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Data } from '../Model/data';


@Injectable({
  providedIn: 'root'
})
export class UsernameService {

  constructor(private http:HttpClient) { }

  state:Data[]=[];
  url:string='http://localhost:3000/registerDetails'

  createData(state:Data){
    return this.http.post(this.url,state)
  }

  getData(username:string){
    return this.http.get(this.url + username)
    // .subscribe(response=>
    //   console.log(response))
     
      // this.state=response;
  }
  

}
