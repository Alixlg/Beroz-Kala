export class Product {
  private static _id = 1001;
  id: number = 1001;
  brand: string = '';
  title: string = '';
  price: string = '';
  pic: string = '';
  count: number = 1;
  isDisable = false;

  constructor(brand: string, title: string, price: string, pic: string) {
    this.id = Product._id++;
    this.brand = brand;
    this.title = title;
    this.price = price;
    this.pic = pic;
  }
}
