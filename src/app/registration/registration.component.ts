import { Component} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {  Router } from '@angular/router';
import { UserService } from '../Service/user.service';



@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
 


  constructor(private user:UserService,
              private router:Router){}

  registerForm:FormGroup;
  gender=['Male','Female'];
  country=['America','India','Japan','German'];

ngOnInit(): void {
    this.registerForm=new FormGroup({
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
      phoneNumber:new FormControl('',[Validators.required,Validators.pattern("[0-9]{10}")]),
      gender: new FormControl(''),
      country:new FormControl('',[Validators.required]),    
    })
}


onSubmit(){
  // this.taskdata.emit(this.register.value);
  console.log(this.registerForm);
  
 
    if(this.registerForm.invalid){
        alert('Please fill the form in valid format')
    }
    else{
      this.user.createData(this.registerForm.value)
      .subscribe(
        response=>{
          console.log(response);
        }
      )
      this.router.navigateByUrl('login');
    }
}


createUsername(){
  let user='';
  let userFirstname:string=this.registerForm.get('firstname').value;
  let userLastname:string=this.registerForm.get('lastname').value;
  let dob:any=this.registerForm.get('dob').value

  if(userFirstname.length >=4){
    user+=userFirstname.slice(0,5).toUpperCase();
  }
  else{
    user+=userFirstname.toUpperCase();
  }
  if(userLastname.length >=3){
    user+=userLastname.slice(0,3).toUpperCase();
  }
  else{
    user+=userLastname.toUpperCase();
  }

  let date=new Date(dob)
  user+=date.getFullYear();

  this.registerForm.get('username').setValue(user);
}




}
