import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/Service/user.service';
import { EncryptDecryptService } from '../Service/encryptDecrypt.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public userName: string;
  public correctPassword: string;
  public patternValue = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]*$/;
  private userDetails:any;

  constructor(private user: UserService,
    private router: Router, private toast: ToastrService,
    private encrdecr: EncryptDecryptService) { }

  public onSubmit(loginForm: NgForm) {
    const data: any = this.user.getUsername().subscribe((value: any) => {
      this.userDetails= value;
      this.userDetails.map((user: any) => {

        if (user.username === this.userName) {
          const decrypt = this.encrdecr.decryptPassword(user.password);
          if (decrypt === this.correctPassword) {
            sessionStorage.setItem('user', user.username);
            sessionStorage.setItem('password', user.password);
            this.toast.success('Successfully Logined!')
            this.router.navigateByUrl('mainpage');
          }
        }
        else{
          this.toast.warning('Invalid Login!,Please Enter valid details!');
        }
      })
    })
  }
}