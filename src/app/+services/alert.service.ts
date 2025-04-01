import { Injectable } from '@angular/core';
import { AlertBody } from '../+models/alertBody';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  alertBodyList: AlertBody[] = [];

  deleteAlert(alertBody: AlertBody, timeToDelete: number) {
    setTimeout(() => {
      this.alertBodyList = this.alertBodyList.filter(x => alertBody != x);
    }, timeToDelete);
  }
}