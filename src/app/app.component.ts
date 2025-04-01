import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AlertSystemComponent } from "./+pages/+public/alert-system/ui/alert-system.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AlertSystemComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'berozkala-frontend';
}
