import { Component, EventEmitter, inject, Output } from '@angular/core';
import { ProductBody } from '../../../../+models/product';
import { BasketService } from '../../../../+services/basket.service';
import { ProductService } from '../../../../+services/product.service';
import { ProductComponent } from '../../product/ui/product.component';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from "../../search/ui/search.component";
import { AlertService } from '../../../../+services/alert.service';
import { AlertBody } from '../../../../+models/alertBody';

@Component({
  selector: 'app-products',
  imports: [ProductComponent, FormsModule, SearchComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  alertSystemObj = inject(AlertService);
  productsObj = inject(ProductService);
  basketProductsObj = inject(BasketService);

  searchedProducts: ProductBody[] = [];
  isSearchBoxEmpty = true;

  sortMenuVisible = false;
  productsFiltered = '';

  buy($event: ProductBody) {
    if (this.basketProductsObj.basket.every(p => p.id != $event.id)) {
      this.basketProductsObj.basket.push($event);

      this.alertSystemObj.newAlert(`محصول ${$event.title} ${$event.brand} با موفقیت به سبد اضافه شد`, 2000);

      $event.isAddDisable = true;
      setTimeout(() => {
        $event.isAddDisable = false;
      }, 2000);
    }
    else {
      let product = this.basketProductsObj.basket.find(p => p.id == $event.id);
      this.basketProductsObj.basket = this.basketProductsObj.basket.filter(p => p.id != $event.id);
      if (product) { // agar undefine nabood
        product.count += 1;
        this.basketProductsObj.basket.push(product);

        this.alertSystemObj.newAlert(`محصول ${$event.title} ${$event.brand} با موفقیت به سبد اضافه شد`, 2000);

        $event.isAddDisable = true;
        setTimeout(() => {
          $event.isAddDisable = false;
        }, 2000);
      }
    }
  }

  search($event: ProductBody[]) {
    this.searchedProducts = $event;

    if (this.isSearchBoxEmpty) {
      this.productsFiltered = '';
    }
    else {
      this.productsFiltered = 'search';
    }
  }

  filterBy() {
    switch (this.productsFiltered) {
      case 'price-up':
        return this.productsObj.products.sort((a, b) => Number(b.price) - Number(a.price));

      case 'price-down':
        return this.productsObj.products.sort((a, b) => Number(a.price) - Number(b.price));

      case 'new-products':
        return this.productsObj.products.sort((a, b) => b.id - a.id);

      case 'old-products':
        return this.productsObj.products.sort((a, b) => a.id - b.id);

      case 'search':
        return this.searchedProducts;

      default: return this.productsObj.products;
    }
  }

  // ngOnInit() {
  //   for (let index = 0; index < 30; index++) {
  //     this.productsObj.products.push(new Product('test', 'test', '900000', 'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/6e61b/MainAfter.avif'));
  //   }
  // }
}
