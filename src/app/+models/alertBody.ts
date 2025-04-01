export class AlertBody {
    alertContent = '';
    isSuccess = true;
    isWarning = false;
    isError = false;
    isSpecial = false;

    constructor(alertContent: string) {
        this.alertContent = alertContent;
    }
}