import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export const PasswordValidation: ValidatorFn = (
  registerForm: AbstractControl): ValidationErrors | null => {
  const password = registerForm.get('password');
  const confirmPassword = registerForm.get('confirmPassword');

  if (!password || !confirmPassword) {
    return null;
  }

  if (password.value !== confirmPassword.value) {
    confirmPassword.setErrors({ notmatchPassword: true });
    return { notmatchPassword: true };
  }
  else {
    confirmPassword.setErrors(null);
    return null;
  }
};
