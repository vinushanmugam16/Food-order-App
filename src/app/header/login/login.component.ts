import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { Data } from 'src/app/Model/data';
import { UsernameService } from 'src/app/Service/username.service';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[UsernameService]
})
export class LoginComponent implements OnInit{

  state:Data[]=[];
user=''

constructor(private subData:UsernameService,
            private router:Router){}

login:FormGroup

ngOnInit(): void {
    this.login = new FormGroup({
      username: new FormControl('',[Validators.required]),
      password: new FormControl('',[Validators.required,Validators.maxLength(8)])
    })
}


createUser(){
  // this.subData.getData(this.user)
  // .subscribe(response=>{
  //   console.log(response)
  //   // this.user=response
  // })
}


onSubmit(){
   console.log(this.login); 

   if(this.login.invalid){
    alert('Please enter the login details');
     
   }
   else{

    this.subData.createData(this.login.value)
    .subscribe(response=>console.log(response));
  
    this.router.navigateByUrl('Mainpage')
   }
}



}

