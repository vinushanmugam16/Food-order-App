import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/user';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  state:User[]=[];
  url:string='http://localhost:3000/registerdetails'

  createData(state:User){
    return this.http.post(this.url,state)
  }

  getData(){
    return this.http.get('items.json')
    // .subscribe(response=>
    //   console.log(response))
     
      // this.state=response;
  }
  

}
