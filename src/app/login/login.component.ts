import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Service/user.service';
import { Loginuser } from '../model/loginuser';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[UserService]
})
export class LoginComponent implements OnInit{

detail:Loginuser[]=[];
userName='';
constructor(private user:UserService,
            private router:Router){}

loginForm:FormGroup

ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl('',[Validators.required]),
      password: new FormControl('',[Validators.required,Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)])
    })
}


onSubmit(){
   console.log(this.loginForm); 

  //  if(this.loginForm.invalid){
  //   alert('Please enter the Valid login details ');
  //  }
  //  else{
    // this.user.createLogin(this.loginForm.value)
    // .subscribe(response=>console.log(response));
    
    //   this.router.navigateByUrl('mainpage') 
  
  //  }
  this.userName = this.loginForm.get('username').value;

  console.log(this.userName);
  this.user.getUsername(this.userName)
  .subscribe((data)=>{
        if(data){
          alert('Username has Successfully Matched')
          this.router.navigateByUrl('mainpage');
        }
        else{
          alert('Invalid Login')
        }
  })

}




}

