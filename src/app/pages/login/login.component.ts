import { AbstractControl, FormsModule, ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup, ValidationErrors, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrl: './login.component.scss',
    imports: [CommonModule, FormsModule, ReactiveFormsModule]
})

export class LoginComponent {

    showPassword: boolean = false;
    loginValidators = LoginValidators;
    loginForm: UntypedFormGroup = new UntypedFormBuilder().group({
        username: [
            null,
            Validators.compose([
                Validators.required,
                Validators.minLength(LoginValidators.usernameMinLength),
                Validators.maxLength(LoginValidators.usernameMaxLength)
            ])
        ],
        password: [
            null,
            Validators.compose([
                Validators.required,
                Validators.minLength(LoginValidators.passwordMinLength),
                Validators.maxLength(LoginValidators.passwordMaxLength),
                this.passwordStrengthValidator
            ])
        ],
        email: [
            null,
            Validators.compose([
                Validators.email,
                this.emailValidator
            ])
        ],
        officePhoneNumber: [
            null,
            Validators.compose([
                Validators.required,
                Validators.minLength(10),
                Validators.maxLength(10),
                this.onlyNumbersValidator
            ])
        ],
        mobilePhoneNumber: [
            null,
            Validators.compose([
                Validators.required,
                Validators.minLength(10),
                Validators.maxLength(10),
                this.onlyNumbersValidator
            ])
        ]
    });

    constructor() {}

    getUserNameError(): string | null {
        const control = this.loginForm.get('username');

        if (control?.touched || control?.dirty) {
            if (control.hasError('required')) {
                return 'Username is required.';
            }
            if (control.hasError('minlength')) {
                return `Username must be at least ${LoginValidators.usernameMinLength} characters long.`;
            }
            if (control.hasError('maxlength')) {
                return `Username must be less than ${LoginValidators.usernameMaxLength} characters.`;
            }
        }

        return null;
    }

    getPasswordError(): string | null {
        const control = this.loginForm.get('password');
    
        if (control?.touched || control?.dirty) {
            if (control.hasError('required')) {
                return 'Password is required.';
            }
            if (control.hasError('minlength')) {
                return 'Password must be at least 8 characters long.';
            }
            if (control.hasError('uppercase')) {
                return 'Password must contain at least one uppercase letter.';
            }
            if (control.hasError('lowercase')) {
                return 'Password must contain at least one lowercase letter.';
            }
            if (control.hasError('number')) {
                return 'Password must contain at least one number.';
            }
            if (control.hasError('specialChar')) {
                return 'Password must contain at least one special character.';
            }
        }

        return null;
    }
    
    getEmailError(): string | null {
        const control = this.loginForm.get('email');
    
        if (control?.touched || control?.dirty) {
            if (control.hasError('required')) {
                return 'Email is required.';
            }
            if (control.hasError('email')) {
                return 'Email is not valid.';
            }
        }

        return null;
    }

    getOfficePhoneError(): string | null {
        const control = this.loginForm.get('officePhoneNumber');

        if (control?.touched || control?.dirty) {
            if (control.hasError('minlength')) {
                return `Office Phone Number must be at least ${LoginValidators.officePhoneMinLength} characters.`;
            }
            if (control.hasError('minlength')) {
                return `Office Phone Number must not be more than ${LoginValidators.officePhoneMaxLength} characters.`;
            }
            if (control.hasError('onlyNumbers')) {
                return 'Office Phone Number must contain only numbers.';
            }
        }

        return null;
    }
    
    getMobilePhoneError(): string | null {
        const control = this.loginForm.get('mobilePhoneNumber');

        if (control?.touched || control?.dirty) {
            if (control.hasError('minlength')) {
                return `Mobile Phone Number must be at least ${LoginValidators.mobilePhoneMinLength} characters.`;
            }
            if (control.hasError('minlength')) {
                return `Mobile Phone Number must not be more than ${LoginValidators.mobilePhoneMaxLength} characters.`;
            }
            if (control.hasError('onlyNumbers')) {
                return 'Mobile Phone Number must contain only numbers.';
            }
        }

        return null;
    }

    passwordStrengthValidator(control: AbstractControl): ValidationErrors | null {
        const value = control.value;
    
        if (!value) {
            return null;
        }
    
        const hasUpperCase = /[A-Z]/.test(value);
        const hasLowerCase = /[a-z]/.test(value);
        const hasNumber = /\d/.test(value);
        const hasSpecialChar = /[^A-Za-z0-9]/.test(value);
    
        const errors: ValidationErrors = {};
        if (!hasUpperCase) {
            errors['uppercase'] = true;
        }
        if (!hasLowerCase) {
            errors['lowercase'] = true;
        }
        if (!hasNumber) {
            errors['number'] = true;
        }
        if (!hasSpecialChar) {
            errors['specialChar'] = true;
        }
    
        return Object.keys(errors).length ? errors : null;
    }

    emailValidator(control: AbstractControl): ValidationErrors | null {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const valid = emailRegex.test(control.value);
        return valid ? null : { email: true };
    }

    onlyNumbersValidator(control: AbstractControl): ValidationErrors | null {
        const value = control.value;
        if (value && !/^\d+$/.test(value)) {
            return { onlyNumbers: true };
        }

        return null;
    }

    togglePasswordVisibility() {
        this.showPassword = !this.showPassword;
    }
}

enum LoginValidators {
    usernameMinLength = 10,
    usernameMaxLength = 20,
    passwordMinLength = 8,
    passwordMaxLength = 20,
    officePhoneMinLength = 10,
    officePhoneMaxLength = 10,
    mobilePhoneMinLength = 10,
    mobilePhoneMaxLength = 10,
}