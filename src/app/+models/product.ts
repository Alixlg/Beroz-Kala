import { Product } from "../+pages/+public/product/models/product";

export class ProductBody implements Product {
  private static _id = 1001;
  id = 1001;
  brand = '';
  title = '';
  price = '';
  pic = '';
  count = 1;
  isAddDisable = false;
  isRemoveDisable = false;

  constructor(brand: string, title: string, price: string, pic: string) {
    this.id = ProductBody._id++;
    this.brand = brand;
    this.title = title;
    this.price = price;
    this.pic = pic;
  }
}
