import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../Service/user.service';
import { PasswordValidation } from '../customvalidation/passwordvalidation.directive';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private user: UserService,
    private router: Router, private toast: ToastrService) { }

  public registerForm: FormGroup;
  public gender = ['Male', 'Female'];
  private encryptPass: string;
  private encryptConfirmpass: string;

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      firstname: new FormControl('', [Validators.required, Validators.pattern("([a-zA-Z']+([a-zA-Z']+)*)"), Validators.minLength(3)]),
      lastname: new FormControl('', [Validators.required, Validators.pattern("([a-zA-Z']+([a-zA-Z']+)*)"), Validators.minLength(3)]),
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)]),
      confirmpassword: new FormControl('', [Validators.required]),
      dob: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phoneNumber: new FormControl('', [Validators.required, Validators.pattern(/^\d{10}$/)]),
      gender: new FormControl('')
    },
      { validators: PasswordValidation });
  }
  // [0-9]{10}

  public onSubmit() {
    if (this.registerForm.invalid) {
      this.toast.warning('Please fill the form in Valid format!')
    }
    else {
      this.encryptPass = this.user.encryptPassword(this.registerForm.value.password);
      this.registerForm.get('password')?.setValue(this.encryptPass);
      this.encryptConfirmpass = this.user.encryptPassword(this.registerForm.value.confirmpassword);
      this.registerForm.get('confirmpassword')?.setValue(this.encryptConfirmpass);

      // this.registerForm.get('phoneNumber')?.setValue(this.maskPhoneNumber);
      // console.log(this.registerForm.get('phoneNumber')?.setValue(this.maskPhoneNumber(phoneNumber)));

      this.user.createData(this.registerForm.value)
        .subscribe(() => {
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
