import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductBody } from '../../../../+models/product';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  imports: [FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {
  @Input() products: ProductBody[] = [];
  @Output() onDone = new EventEmitter<ProductBody[]>;
  @Output() onVisible = new EventEmitter<boolean>;

  searchValue = '';
  searchedProducts: ProductBody[] = [];

  search($event: KeyboardEvent) {
    if ($event.key == 'Enter' && this.searchValue != '') {
      this.searchedProducts = [];

      this.products.forEach(p => {
        if (!this.searchedProducts.includes(p)) { //agar az ghabl vojud nadasht
          if (p.title.includes(this.searchValue.toLocaleLowerCase()) || p.brand.includes(this.searchValue.toLocaleLowerCase())
            || `${p.title} ${p.brand}`.includes(this.searchValue.toLocaleLowerCase())) {

            this.searchedProducts.push(p);
          }
        }
      });

      this.onVisible.emit(false);
      this.onDone.emit(this.searchedProducts);
      return;
    }

    if ($event.key == 'Enter' && this.searchValue == '') {
      this.searchedProducts = [];

      this.onVisible.emit(true);
      this.onDone.emit(this.searchedProducts);
      return;
    }
  }
}
