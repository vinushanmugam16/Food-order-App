import { Component, EventEmitter, Output} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {  Router } from '@angular/router';
import { UsernameService } from '../Service/username.service';

import { Data } from '../Model/data';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {


  constructor(private subData:UsernameService,
              private router:Router){}

  register:FormGroup;

ngOnInit(): void {
    this.register=new FormGroup({
      firstname: new FormControl('',[Validators.required]),
      lastname:new FormControl('',[Validators.required]),
      username:new FormControl(''),
      dob: new FormControl(''),
      email: new FormControl('',[Validators.required, Validators.email]),
      address:new FormGroup({
        street:new FormControl('',[Validators.required]),
        city:new FormControl('',[Validators.required]),
        pincode:new FormControl('',[Validators.required])
      }),
      phoneNumber:new FormControl('',[Validators.required]),
      gender: new FormControl(''),
      country:new FormControl('',[Validators.required]),    
    })
}


onSubmit(){
  // this.taskdata.emit(this.register.value);
  console.log(this.register);
  
 
    if(this.register.invalid){
        alert('Please fill the form in valid format')
    }
    else{
      this.subData.createData(this.register.value)
      .subscribe(
        response=>{
          console.log(response);
        }
      )
      this.router.navigateByUrl('Login');
    }
}


createUsername(){
  let user='';
  let fName:string=this.register.get('firstname').value;
  let lName:string=this.register.get('lastname').value;
  let email:any=this.register.get('email').value
  if(fName.length >=4){
    user+=fName.slice(0,4).toUpperCase();
  }
  else{
    user+=fName.toUpperCase();
  }
  if(lName.length >=3){
    user+=lName.slice(0,3).toUpperCase();
  }
  else{
    user+=lName.toUpperCase();
  }
  if(email.length >=3){
    user+=email.slice(1,3);
  }
  else{
    user+=email;
  }
  this.register.get('username').setValue(user);
}

// @Output() userData=new EventEmitter<Data>()
// getUser(){
//   this.userData.emit(this.createUsername);
// }



}
