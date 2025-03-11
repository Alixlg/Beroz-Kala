import { Component, EventEmitter, inject, Output } from '@angular/core';
import { Product } from '../../../../+models/product';
import { BasketService } from '../../../../+services/basket.service';
import { ProductService } from '../../../../+services/product.service';
import { ProductComponent } from '../../product/ui/product.component';

@Component({
  selector: 'app-products',
  imports: [ProductComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  productsObj = inject(ProductService);
  basketProductsObj = inject(BasketService);
  sortMenuVisible = false;
  sortByThing = '';

  buy($event: Product) {
    if (this.basketProductsObj.basket.every(p => p.id != $event.id)) {
      this.basketProductsObj.basket.push($event);
    }
    else {
      let product = this.basketProductsObj.basket.find(p => p.id == $event.id);
      this.basketProductsObj.basket = this.basketProductsObj.basket.filter(p => p.id != $event.id);
      if (product) { // agar undefine nabood
        product.count += 1;
        this.basketProductsObj.basket.push(product);
      }
    }
  }

  sortBy() {
    switch (this.sortByThing) {
      case 'price-up':
        return this.productsObj.products.sort((a, b) => Number(b.price) - Number(a.price));

      case 'price-down':
        return this.productsObj.products.sort((a, b) => Number(a.price) - Number(b.price));

      case 'new-products':
        return this.productsObj.products.sort((a, b) => b.id - a.id);

      case 'old-products':
        return this.productsObj.products.sort((a, b) => a.id - b.id);

      default: return this.productsObj.products;
    }
  }
}
