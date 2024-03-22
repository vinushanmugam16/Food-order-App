import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Service/user.service';
import { Loginuser } from '../model/loginuser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public userName: string;
  public correctPassword: string;
  public patternValue = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  constructor(private user: UserService,
    private router: Router) { }

  public loginForm: NgForm;

  public onSubmit(loginForm: { valid: any; value: Loginuser; }) {
    this.user.getUsername(this.userName, this.correctPassword)
      .subscribe((logUser) => {
        if (logUser && loginForm.valid) {
          this.user.createLogin(loginForm.value)
            .subscribe(response => console.log(response));
          this.router.navigateByUrl('mainpage');
        }
        else {
          alert('Invalid Login , Please Enter Valid Details!');
        }
      })
  }
}

