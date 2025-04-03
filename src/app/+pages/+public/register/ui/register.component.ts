import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AlertService } from '../../../../+services/alert.service';

@Component({
  selector: 'app-register',
  imports: [RouterLink, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  router = inject(Router);
  alertObj = inject(AlertService);

  isDarkMode: boolean = true;
  isLogin: boolean = false;

  username: string = "";
  password: string = "";
  email: string = "";

  singUp() {
    if (this.email.includes('@gmail.com') || this.email.includes('gmail@.com')) {
      this.isLogin = true;
      this.alertObj.newAlert("شما با موفقیت ثبت نام کردید ! در حال انتقال . . ", 2000, false, false, true);
      this.isDarkMode = !this.isDarkMode;

      setTimeout(() => {
        this.router.navigateByUrl('/pr/user-panel');
      }, 1500);
    }
    else if (Number(this.email) && this.email.includes('09')) {
      this.isLogin = true;
      this.alertObj.newAlert("شما با موفقیت ثبت نام کردید ! در حال انتقال . . ", 2000, false, false, true);
      this.isDarkMode = !this.isDarkMode;

      setTimeout(() => {
        this.router.navigateByUrl('/pr/user-panel');
      }, 1500);
    }
    else {
      this.isLogin = false;
      this.alertObj.newAlert("لطفا مقادیر خواسته شده را به درستی وارد کنید", 2000, false, true);
    }
  }
}
