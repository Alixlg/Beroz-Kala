import { Injectable } from '@angular/core';
import { Product } from '../+models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Product[] = [
    new Product('ریزر', 'کیبورد گیمینگ', '9800000', '/Razer.png'),
    new Product('ریزر', 'موس گیمینگ', '7700000', '/Lajitec.png'),
    new Product('لاجیتک', 'کیبورد گیمینگ', '7200000', 'https://wolflandshop.com/wp-content/uploads/2023/03/68-11.jpg'),
    new Product('تسکو', 'کیبورد گیمینگ', '4600000', 'https://tsco.ir/wp-content/uploads/2022/08/1080-2.jpg'),
    new Product('لاجیتک', 'موس گیمینگ', '5300000', 'https://toosarax.com/wp-content/uploads/2023/08/001-9.jpg'),
    new Product('ریزر', 'هدفن گیمینگ', '6520400', 'https://ayandehit.com/media_root/images/products/Razer-Kraken-X-Lite.jpg'),
    new Product('تسکو', 'هدفن گیمینگ', '3200000', 'https://www.tsco.shop/wp-content/uploads/2022/11/TSCO-TH5151-Gaming-Headset-tsco.shop-4.jpg'),
    new Product('لاجیتک', 'هدفن گیمینگ', '4600000', 'https://espeero.com/wp-content/uploads/2019/05/IMG_0556.png')
  ]
}
