import { Injectable } from '@angular/core';
import { AlertBody } from '../+models/alertBody';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  private alertBodyList: AlertBody[] = [];

  newAlert(alertContent: string, timeToDelete: number, isWarning = false, isError = false, isSpecial = false) {
    let alert = new AlertBody(alertContent, isWarning, isError, isSpecial);

    this.alertBodyList.push(alert);
    setTimeout(() => {
      this.alertBodyList = this.alertBodyList.filter(x => alert != x);
    }, timeToDelete);
  }

  getAlerts() {
    return this.alertBodyList;
  }
}
