import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  userName: string;
  pass: string;
  patternValue = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  constructor(private user: UserService,
    private router: Router) { }

  loginForm: NgForm;

  onSubmit(loginForm) {
    // this.userName = loginForm.controls['username'].value;

    this.user.getUsername(this.userName,this.pass)
      .subscribe((logUser) => {
        if (logUser && loginForm.valid) {
          this.user.createLogin(loginForm.value)
            .subscribe(response => console.log(response));
          // console.log('feuiaff')
          this.router.navigateByUrl('mainpage');
        }
        else {
          alert('Invalid Login , Please Enter Valid Details!');
        }
      })

    console.log('12345678');
    console.log(this.loginForm.value.username);
    console.log(loginForm.controls['password'].value);
  }
}

