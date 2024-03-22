import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
 
export const PasswordValidation: ValidatorFn = (
  registerForm: AbstractControl): ValidationErrors | null => {
  const password = registerForm.get('password');
  const confirmpassword = registerForm.get('confirmpassword');

  if (!password || !confirmpassword) {
    return null;
  }
  
  if ( confirmpassword.errors && !confirmpassword.errors?.['notmatchPassword']) {
    return null;
  }
  
  if (password.value !== confirmpassword.value) {
    confirmpassword.setErrors({ notmatchPassword: true });
    return { notmatchPassword: true };
  } else {
    confirmpassword.setErrors(null);
    return null;
  }
};




