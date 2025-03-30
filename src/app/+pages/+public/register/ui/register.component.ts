import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [RouterLink, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  router = inject(Router);

  isDarkMode: boolean = true;
  isLogin: boolean = false;

  username: string = "";
  password: string = "";
  email: string = "";
  error: string = "";

  singUp() {
    if (this.email.includes('@gmail.com') || this.email.includes('gmail@.com')) {
      this.isLogin = true;
      this.error = "شما با موفقیت ثبت نام کردید ! در حال انتفال . . ";

      setTimeout(() => {
        this.router.navigateByUrl('/pr/user-panel');
      }, 1500);
    }
    else if (Number(this.email) && this.email.includes('09')) {
      this.isLogin = true;
      this.error = "شما با موفقیت ثبت نام کردید ! در حال انتفال . . ";

      setTimeout(() => {
        this.router.navigateByUrl('/pr/user-panel');
      }, 1500);
    }
    else {
      this.isLogin = false;
      this.error = "لطفا مقادیر خواسته شده را به درستی وارد کنید";
      setTimeout(() => { this.error = '' }, 2000);
    }
  }
}