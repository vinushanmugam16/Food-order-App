import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/Service/user.service';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[UserService]
})
export class LoginComponent implements OnInit{

  state:User[]=[];

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

   
   if(this.loginForm.invalid){
    alert('Please enter the Valid login details ');
   }
  
   else{

    this.user.createData(this.loginForm.value)
    .subscribe(response=>console.log(response));
    
    
      this.router.navigateByUrl('mainpage')
   
   }
}



}

