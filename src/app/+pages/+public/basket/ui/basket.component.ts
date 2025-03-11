import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { Product } from '../../../../+models/product';
import { BasketService } from '../../../../+services/basket.service';
import { ProductComponent } from '../../product/ui/product.component';

@Component({
  selector: 'app-basket',
  imports: [ProductComponent],
  templateUrl: './basket.component.html',
  styleUrl: './basket.component.scss'
})
export class BasketComponent implements OnInit {
  @Input() basketProductsObj = inject(BasketService);

  remove($event: Product) {
    if ($event.count == 1) {
      this.basketProductsObj.basket = this.basketProductsObj.basket.filter(p => p.id != $event.id);
    }
    else {
      let product = this.basketProductsObj.basket.find(p => p.id == $event.id);
      this.basketProductsObj.basket = this.basketProductsObj.basket.filter(p => p.id != $event.id);
      if (product) {
        product.count -= 1;
        this.basketProductsObj.basket.push(product);
        this.basketProductsObj.basket.sort((a, b) => b.id - a.id);
      }
    }
  }

  ngOnInit(): void {
    this.basketProductsObj.basket.sort((a, b) => b.id - a.id);
  }
}
