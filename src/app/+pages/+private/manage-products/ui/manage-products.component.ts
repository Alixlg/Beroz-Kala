import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Product } from '../../../../+models/product';
import { BasketService } from '../../../../+services/basket.service';
import { ProductService } from '../../../../+services/product.service';

@Component({
  selector: 'app-manage-products',
  imports: [FormsModule],
  templateUrl: './manage-products.component.html',
  styleUrl: './manage-products.component.scss'
})
export class ManageProductsComponent {
  productsObj = inject(ProductService);
  basketObj = inject(BasketService);

  addProductVisible: boolean = false;
  delProductVisible: boolean = false;
  searchProductVisible: boolean = false;
  editProductVisible: boolean = false;
  alert: string = '';

  productBrand: string = '';
  productTitle: string = '';
  productPrice: string = '';
  productPic: string = '';

  searchedProduct?: Product;
  searchId: string = '';

  addProduct() {
    if (!this.productBrand || !this.productTitle || !this.productPrice || !this.productPic) {
      this.alert = 'لطفاً تمام فیلدها را پر کنید';
      setTimeout(() => { this.alert = '' }, 2200);

      return;
    }
    if (isNaN(Number(this.productPrice))) {
      this.productPrice = '';
      this.alert = 'لطفاً برای قیمت عدد وارد کنید';
      setTimeout(() => { this.alert = '' }, 2200);
      return;
    }

    this.productsObj.products.push(
      new Product(this.productBrand, this.productTitle, this.productPrice, this.productPic)
    );
    this.addProductVisible = !this.addProductVisible;

    this.productBrand = '';
    this.productTitle = '';
    this.productPrice = '';
    this.productPic = '';
    this.alert = 'محصول شما با موفقیت ثبت شد';
    setTimeout(() => { this.alert = '' }, 2200);
  }

  delProduct(product: Product) {
    this.productsObj.products = this.productsObj.products.filter(p => p.id != product.id);
    this.basketObj.basket = this.basketObj.basket.filter(p => p.id != product.id);
    this.alert = 'محصول شما با موفقیت حذف شد';
    setTimeout(() => { this.alert = '' }, 2200);
  }

  searchProduct() {
    if (this.searchId == '') {
      this.alert = 'لطفا شناسه را وارد کنید';
      setTimeout(() => { this.alert = '' }, 2200);
      return;
    }
    if (isNaN(Number(this.searchId))) {
      this.alert = 'شناسه نامعتبر میباشد';
      setTimeout(() => { this.alert = '' }, 2200);
      this.searchId = '';
      return;
    }

    let product = this.productsObj.products.find(x => x.id == Number(this.searchId));

    if (product) {
      this.searchedProduct = product;
      this.searchProductVisible = false;
      this.editProductVisible = true;
      this.alert = 'محصول با موفقیت یافت شد';
      setTimeout(() => { this.alert = '' }, 2200);
    }
    else {
      this.searchId = '';
      this.alert = 'محصول مورد نظر یافت نشد لطفا شناسه صحیح وارد کنید';
      setTimeout(() => { this.alert = '' }, 2200);

      return;
    }
  }

  editProduct() {
    if (this.searchedProduct) {
      if (!this.productBrand || !this.productTitle || !this.productPrice || !this.productPic) {
        this.alert = 'لطفاً تمام فیلدها را پر کنید';
        setTimeout(() => { this.alert = '' }, 2200);

        return;
      }
      if (isNaN(Number(this.productPrice))) {
        this.productPrice = '';
        this.alert = 'لطفاً برای قیمت عدد وارد کنید';
        setTimeout(() => { this.alert = '' }, 2200);

        return;
      }

      this.searchedProduct.brand = this.productBrand;
      this.searchedProduct.price = this.productPrice;
      this.searchedProduct.title = this.productTitle;
      this.searchedProduct.pic = this.productPic;

      this.productsObj.products = this.productsObj.products.filter(x => x.id != this.searchedProduct?.id);
      this.basketObj.basket = this.basketObj.basket.filter(x => x.id != this.searchedProduct?.id);
      this.productsObj.products.push(this.searchedProduct);

      this.productBrand = '';
      this.productTitle = '';
      this.productPrice = '';
      this.productPic = '';
      this.alert = 'محصول شما با موفقیت ویرایش شد';
      setTimeout(() => { this.alert = '' }, 2200);
    }
    else {
      this.alert = 'محصول مورد نظر یافت نشد لطفا شناسه را وارد کنید';
      setTimeout(() => { this.alert = '' }, 2200);
    }
    this.editProductVisible = false;
  }
}

