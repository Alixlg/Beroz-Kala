import { DecimalPipe } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { Product } from '../../../../+models/product';

@Component({
  selector: 'app-product',
  imports: [DecimalPipe],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
  @Input() product!: Product;
  @Output() onBuy = new EventEmitter<Product>;
  @Output() onRemove = new EventEmitter<Product>;
  @Input() isBasket: boolean = false;

  countPriceUpdater() {
    let countPrice: string | Number = '';
    return countPrice = this.isBasket ? Number(this.product.price) * this.product.count : this.product.price;
  }
}
