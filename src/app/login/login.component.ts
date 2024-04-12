import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/Service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public userName: string;
  public correctPassword: string;
  public patternValue = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]*$/;
  private userDetails;

  constructor(private user: UserService,
    private router: Router, private toast: ToastrService) { }

  public onSubmit(loginForm: NgForm) {
    this.user.getUsername().subscribe((value) => {
      this.userDetails = value;
      let userFound = false;
      this.userDetails.forEach((user: { username: string; password: string; }) => {
        if (user.username === this.userName) {
          const decrypt = this.user.decryptPassword(user.password);
          if (decrypt === this.correctPassword) {
            sessionStorage.setItem('user', user.username);
            sessionStorage.setItem('password', user.password);
            this.toast.success('Successfully Logined!')
            this.router.navigateByUrl('mainpage');
            userFound = true;
          }
        }
      });
      if (!userFound) {
        this.toast.warning('Invalid Login!, Please Enter valid details!');
      }
    });
  }
}