import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Data } from '@angular/router';



@Component({
  selector: 'app-savedata',
  templateUrl: './savedata.component.html',
  styleUrls: ['./savedata.component.css']
})
export class SavedataComponent {
firstname: any;
lastname: any;
username: any;
dob: any;
gender: any;
country: any;
address: any;
phoneNumber: any;
email: any;

  constructor(private http:HttpClient){

  }

  allDetails:Data[]=[];


  createData(state:Data){
   return this.http.post('https://sample-app-angular-8a860-default-rtdb.firebaseio.com/detaildata.json',state)
   
  }

  getData(username:string){
    return this.http.get('https://sample-app-angular-8a860-default-rtdb.firebaseio.com/detaildata.json'+ username)
  }
}
