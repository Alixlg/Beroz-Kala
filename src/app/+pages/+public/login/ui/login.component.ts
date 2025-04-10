import { Component, inject, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AlertService } from '../../../../+services/alert.service';
import { Login } from '../models/login';

@Component({
  selector: 'app-login',
  imports: [RouterLink, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  router = inject(Router);
  alertObj = inject(AlertService);

  loginModel: Login = { username: '', password: '', keepMe: false };
  isDarkMode: boolean = true;

  login() {
    if (this.loginModel.username.length >= 2 && this.loginModel.password.length >= 8) {
      if (this.loginModel.username == "admin" && this.loginModel.password == "12345678") {
        this.alertObj.newAlert("شما با موفقیت وارد شدید در حال انتقال . . ", 2000);
        this.isDarkMode = !this.isDarkMode;

        setTimeout(() => {
          this.router.navigateByUrl('/pr/admin-panel');
        }, 1500);
      }
      else if (this.loginModel.username == "user" && this.loginModel.password == "12345678") {
        this.alertObj.newAlert("شما با موفقیت وارد شدید در حال انتقال . . ", 2000);
        this.isDarkMode = !this.isDarkMode;

        setTimeout(() => {
          this.router.navigateByUrl('/pr/user-panel');
        }, 1500);
      }
      else {
        this.alertObj.newAlert("رمز عبور یا نام کاربری اشتباه است", 2000, false, true);
      }
    }
    else {
      this.alertObj.newAlert("لطفا مقادیر خواسته شده را به درستی وارد کنید", 2000, false, true);
    }
  }
}
