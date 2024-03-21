import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
 
export const PasswordValidation: ValidatorFn = (
  registerForm: AbstractControl): ValidationErrors | null => {
  const password = registerForm.get('password');
  const confirmpassword = registerForm.get('confirmpassword');
 
  if (!password || !confirmpassword){
    return null;
  }
 
  return password.value === confirmpassword.value
    ? null
    : { notmatchPassword: true };
};