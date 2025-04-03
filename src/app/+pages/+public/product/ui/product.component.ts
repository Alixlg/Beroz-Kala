import { DecimalPipe } from '@angular/common';
import { Component, EventEmitter, inject, Input, OnChanges, OnInit, Output } from '@angular/core';
import { Product } from '../../../../+models/product';
import { AlertService } from '../../../../+services/alert.service';

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
  @Input() isAddDisable = false;
  @Input() isRemoveDisable = false;

  productAlertObj = inject(AlertService);

  countPriceUpdater() {
    return this.isBasket ? Number(this.product.price) * this.product.count : this.product.price;
  }
}
