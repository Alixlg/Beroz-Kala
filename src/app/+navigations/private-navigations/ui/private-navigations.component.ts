import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-private-navigations',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './private-navigations.component.html',
  styleUrl: './private-navigations.component.scss'
})
export class PrivateNavigationsComponent {

}
