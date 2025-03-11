import { Component, inject, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [RouterLink, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  router = inject(Router);

  isDarkMode: boolean = true;
  isLogin: boolean = false;
  loginVisible: boolean = true;

  username: string = "";
  password: string = "";
  email: string = "";
  error: string = "";

  login() {
    if (this.username.length >= 2 && this.password.length >= 8) {
      if (this.username == "admin" && this.password == "12345678") {
        this.isLogin = true;
        this.error = "شما با موفقیت وارد شدید در حال انتفال . . ";

        setTimeout(() => {
          this.router.navigateByUrl('/pr');
        }, 1500);
      }
      else {
        this.isLogin = false;
        this.error = "رمز عبور یا نام کاربری اشتباه است";
        setTimeout(() => { this.error = '' }, 2000);
      }
    }
    else {
      this.isLogin = false;
      this.error = "لطفا مقادیر خواسته شده را به درستی وارد کنید";
      setTimeout(() => { this.error = '' }, 2000);
    }
  }

  singUp() {
    if (this.email.includes('@gmail.com') || this.email.includes('gmail@.com')) {
      this.isLogin = true;
      this.error = "شما با موفقیت ثبت نام کردید ! در حال انتفال . . ";

      setTimeout(() => {
        this.router.navigateByUrl('/pb');
      }, 1500);
    }
    else if (Number(this.email) && this.email.includes('09')) {
      this.isLogin = true;
      this.error = "شما با موفقیت ثبت نام کردید ! در حال انتفال . . ";

      setTimeout(() => {
        this.router.navigateByUrl('/pb');
      }, 1500);
    }
    else {
      this.isLogin = false;
      this.error = "لطفا مقادیر خواسته شده را به درستی وارد کنید";
      setTimeout(() => { this.error = '' }, 2000);
    }
  }
}
