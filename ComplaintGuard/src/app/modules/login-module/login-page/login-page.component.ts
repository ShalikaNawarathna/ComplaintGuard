import { AuthService } from './../../../Services/auth.service';
import { Component } from '@angular/core';
import {
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { NgModule } from '@angular/core';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent {
  loginForm = new UntypedFormGroup({
    username: new UntypedFormControl('', [
      Validators.required,
      Validators.email,
    ]),
    password: new UntypedFormControl('', [
      Validators.required,
      Validators.minLength(4),
    ]),
  });

  constructor(private authService: AuthService, private router: Router) {}

  get username() {
    return this.loginForm.get('username');
  }

  get password() {
    return this.loginForm.get('password');
  }

  public clickLogin() {
    console.log('Loggin button clicked ');
    console.log('Form Validity', this.loginForm.valid);
    console.log('Username Validity', this.username?.valid);
    console.log('Password Validity', this.password?.valid);
    // $event.preventDefault();
    const email = this.username?.value;
    const password = this.password?.value;
    console.log('Email testing');
    console.log('Email', email);
    if (this.loginForm.valid) {
      this.authService.login(email, password).subscribe(
        (res) => {
          console.log(`User ${email} logged in`);
          this.router.navigate(['dashboard']);
        },

        (error) => console.error('login error', error)
      );
    } else {
      console.log('Invalid Form, Please check the fields ');
    }
  }
}
