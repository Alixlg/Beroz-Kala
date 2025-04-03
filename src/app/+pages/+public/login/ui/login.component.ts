import { Component, inject, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AlertService } from '../../../../+services/alert.service';

@Component({
  selector: 'app-login',
  imports: [RouterLink, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  router = inject(Router);
  alertObj = inject(AlertService);

  isDarkMode: boolean = true;
  isLogin: boolean = false;

  username: string = "";
  password: string = "";

  login() {
    if (this.username.length >= 2 && this.password.length >= 8) {
      if (this.username == "admin" && this.password == "12345678") {
        this.isLogin = true;
        this.alertObj.newAlert("شما با موفقیت وارد شدید در حال انتقال . . ", 2000);
        this.isDarkMode =! this.isDarkMode;

        setTimeout(() => {
          this.router.navigateByUrl('/pr/admin-panel');
        }, 1500);
      }
      else if (this.username == "user" && this.password == "12345678") {
        this.isLogin = true;
        this.alertObj.newAlert("شما با موفقیت وارد شدید در حال انتقال . . ", 2000);
        this.isDarkMode =! this.isDarkMode;

        setTimeout(() => {
          this.router.navigateByUrl('/pr/user-panel');
        }, 1500);
      }
      else {
        this.isLogin = false;
        this.alertObj.newAlert("رمز عبور یا نام کاربری اشتباه است", 2000, false, true);
      }
    }
    else {
      this.isLogin = false;
      this.alertObj.newAlert("لطفا مقادیر خواسته شده را به درستی وارد کنید", 2000, false, true);
    }
  }
}
