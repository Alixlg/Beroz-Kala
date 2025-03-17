import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-private-navigations',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './private-navigations.component.html',
  styleUrl: './private-navigations.component.scss'
})
export class PrivateNavigationsComponent {
  router = inject(Router);
}
