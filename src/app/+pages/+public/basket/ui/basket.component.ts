import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { Product } from '../../../../+models/product';
import { BasketService } from '../../../../+services/basket.service';
import { ProductComponent } from '../../product/ui/product.component';
import { AlertService } from '../../../../+services/alert.service';
import { AlertBody } from '../../../../+models/alertBody';

@Component({
  selector: 'app-basket',
  imports: [ProductComponent],
  templateUrl: './basket.component.html',
  styleUrl: './basket.component.scss'
})
export class BasketComponent implements OnInit {
  @Input() basketProductsObj = inject(BasketService);
  alertSystemObj = inject(AlertService);

  remove($event: Product) {
    if ($event.count == 1) {
      this.basketProductsObj.basket = this.basketProductsObj.basket.filter(p => p.id != $event.id);

      $event.isDisable = true;
      let alert = new AlertBody(`محصول ${$event.title} ${$event.brand} با موفقیت از سبد حذف شد`);
      this.alertSystemObj.alertBodyList.push(alert);
      setTimeout(() => {
        this.alertSystemObj.alertBodyList = this.alertSystemObj.alertBodyList.filter(x => alert != x);
        $event.isDisable = false;
      }, 2000);
    }
    else {
      let product = this.basketProductsObj.basket.find(p => p.id == $event.id);
      this.basketProductsObj.basket = this.basketProductsObj.basket.filter(p => p.id != $event.id);
      if (product) {
        product.count -= 1;
        this.basketProductsObj.basket.push(product);
        this.basketProductsObj.basket.sort((a, b) => b.id - a.id);

        $event.isDisable = true;
        let alert = new AlertBody(`محصول ${$event.title} ${$event.brand} با موفقیت از سبد حذف شد`);
        this.alertSystemObj.alertBodyList.push(alert);
        setTimeout(() => {
          this.alertSystemObj.alertBodyList = this.alertSystemObj.alertBodyList.filter(x => alert != x);
          $event.isDisable = false;
        }, 2000);
      }
    }
  }

  ngOnInit(): void {
    this.basketProductsObj.basket.sort((a, b) => b.id - a.id);
  }
}
