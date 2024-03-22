import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../Service/user.service';
import { PasswordValidation } from '../customvalidation/passwordvalidation.directive';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private user: UserService,
    private router: Router) { }

  public registerForm: FormGroup;
  public gender = ['Male', 'Female'];

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      firstname: new FormControl('', [Validators.required, Validators.pattern("([a-zA-Z']+([a-zA-Z']+)*)"),Validators.minLength(4)]),
      lastname: new FormControl('', [Validators.required,Validators.pattern("([a-zA-Z']+([a-zA-Z']+)*)"),Validators.minLength(4)]),
      username: new FormControl('',[Validators.required]),
      password: new FormControl('',[Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)]),
      confirmpassword:new FormControl('',[Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)]),
      dob: new FormControl('',[Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      address: new FormGroup({
        street: new FormControl('', [Validators.required]),
        city: new FormControl('', [Validators.required,Validators.pattern("([a-zA-Z']+([a-zA-Z']+)*){2,15}")]),
        pincode: new FormControl('', [Validators.required, Validators.pattern("[0-9]{6}")])
      }),
      phoneNumber: new FormControl('', [Validators.required, Validators.pattern("[0-9]{10}")]),
      gender: new FormControl(''),
    }),
    {Validators:PasswordValidation}
  }

  public onSubmit() {
    if (this.registerForm.invalid) {
      alert('Please fill the form in valid format');
    }
    else {
      this.user.createData(this.registerForm.value)
        .subscribe(
          response => {
            console.log(response);
          }
        )
      this.router.navigateByUrl('login');
    }
  }

  public createUsername() {
    let user = '';
    // const userFirstname: string = this.registerForm.get('firstname').value;
    // const userLastname: string = this.registerForm.get('lastname').value;
    // const userDob: string = this.registerForm.get('dob').value
    const { firstname, lastname, dob ,username} = this.registerForm.value;

// You can further ensure type safety by explicitly typing the destructured variables
// const userFirstname: string = firstname;
// const userLastname: string = lastname;
// const userDob: string = dob;
// const setUsername:string=username;

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
    // this.registerForm.value.username.setValue(user);
  }
}
