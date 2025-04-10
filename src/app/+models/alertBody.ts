import { Alert } from "../+pages/+public/alert-system/models/alert";

export class AlertBody implements Alert {
  alertContent = '';
  isSuccess = true;
  isWarning = false;
  isError = false;
  isSpecial = false;

  constructor(alertContent: string, isWarning: boolean, isError: boolean, isSpecial: boolean) {
    this.alertContent = alertContent;

    if (isWarning == true || isSpecial == true || isError == true) {
      this.isSuccess = false;
    }

    this.isWarning = isWarning;
    this.isError = isError;
    this.isSpecial = isSpecial;
  }
}
