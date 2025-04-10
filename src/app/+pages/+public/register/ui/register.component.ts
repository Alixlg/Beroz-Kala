import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AlertService } from '../../../../+services/alert.service';
import { Register } from '../models/register';

@Component({
  selector: 'app-register',
  imports: [RouterLink, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  router = inject(Router);
  alertObj = inject(AlertService);

  registerModel: Register = { username: '', password: '', email: '', phone: '' };
  emailorPhone = '';

  isDarkMode: boolean = true;

  singUp() {
    if (this.emailorPhone.includes('@gmail.com') || this.emailorPhone.includes('gmail@.com')) {
      this.alertObj.newAlert("شما با موفقیت ثبت نام کردید ! در حال انتقال . . ", 2000, false, false, true);
      this.isDarkMode = !this.isDarkMode;
      this.registerModel.email = this.emailorPhone;

      setTimeout(() => {
        this.router.navigateByUrl('/pr/user-panel');
      }, 1500);
    }
    else if (Number(this.emailorPhone) && this.emailorPhone.includes('09')) {
      this.alertObj.newAlert("شما با موفقیت ثبت نام کردید ! در حال انتقال . . ", 2000, false, false, true);
      this.isDarkMode = !this.isDarkMode;
      this.registerModel.phone = this.emailorPhone;

      setTimeout(() => {
        this.router.navigateByUrl('/pr/user-panel');
      }, 1500);
    }
    else {
      this.alertObj.newAlert("لطفا مقادیر خواسته شده را به درستی وارد کنید", 2000, false, true);
    }
  }
}
