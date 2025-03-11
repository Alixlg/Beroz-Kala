import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { BasketService } from '../../../+services/basket.service';

@Component({
  selector: 'app-public-navigations',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './public-navigations.component.html',
  styleUrl: './public-navigations.component.scss'
})
export class PublicNavigationsComponent {
  basketObj = inject(BasketService);

  basketCount() {
    let count = 0;
    this.basketObj.basket.forEach(x => {
      count += x.count;
    });

    return count;
  }
}
