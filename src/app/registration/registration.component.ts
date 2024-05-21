import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../Service/user.service';
import { PasswordValidation } from '../customvalidation/passwordvalidation.directive';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private user: UserService,
    private router: Router, private toast: ToastrService, private http: HttpClient) { }

  public registerForm: FormGroup;
  public gender = ['Male', 'Female'];
  public phoneNum: string;
  public mask = '';

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      firstname: new FormControl('', [Validators.required, Validators.pattern("([a-zA-Z']+([a-zA-Z']+)*)"), Validators.minLength(3)]),
      lastname: new FormControl('', [Validators.required, Validators.pattern("([a-zA-Z']+([a-zA-Z']+)*)"), Validators.minLength(3)]),
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)]),
      confirmPassword: new FormControl('', [Validators.required]),
      dob: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phoneNumber: new FormControl('', [Validators.required, Validators.pattern(/^\*{8}\d{2}$/)]),
      gender: new FormControl('')
    },
      { validators: PasswordValidation });
  }

  public phoneNumberMocking() {
    this.phoneNum = this.registerForm.get('phoneNumber')?.value;

    if (this.phoneNum.length <= 10 && this.phoneNum.length > 0) {
      if (this.phoneNum.length <= 8) {
        this.mask += '*';
      }
      else if (this.phoneNum.length == 10 || this.phoneNum.length == 9) {
        this.mask += this.phoneNum.slice(-1);
      }
    }
    this.registerForm.get('phoneNumber')?.setValue(this.mask);
  }

  public onSubmit() {

    if (this.registerForm.invalid) {
      this.toast.warning('Please fill the form in Valid format!')
    }
    else {
      const regUser = this.registerForm.value;
      this.user.createRegisterUser(regUser)
        .subscribe((resp) => {
          this.toast.success('Successfully Registered!');
          this.router.navigateByUrl('login');
        })
    }
  }

  public createUsername() {
    let user = '';
    const userFirstname: string = this.registerForm.value.firstname;
    const userLastname: string = this.registerForm.value.lastname;
    const userDob: string = this.registerForm.value.dob;

    if (userFirstname.length >= 4) {
      user += userFirstname.slice(0, 4).toUpperCase();
    }
    else {
      user += userFirstname.toUpperCase();
    }
    if (userLastname.length >= 3) {
      user += userLastname.slice(0, 3).toUpperCase();
    }
    else {
      user += userLastname.toUpperCase();
    }
    const date = new Date(userDob)
    user += date.getFullYear();

    this.registerForm.patchValue({
      username: user
    });
  }
}