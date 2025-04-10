import { Injectable } from '@angular/core';
import { ProductBody } from '../+models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: ProductBody[] = [
    new ProductBody('ریزر', 'کیبورد گیمینگ', '9800000', '/images/Razer.png'),
    new ProductBody('ریزر', 'موس گیمینگ', '7700000', '/images/Lajitec.png'),
    new ProductBody('لاجیتک', 'کیبورد گیمینگ', '7200000', 'https://wolflandshop.com/wp-content/uploads/2023/03/68-11.jpg'),
    new ProductBody('تسکو', 'کیبورد گیمینگ', '4600000', 'https://tsco.ir/wp-content/uploads/2022/08/1080-2.jpg'),
    new ProductBody('لاجیتک', 'موس گیمینگ', '5300000', 'https://toosarax.com/wp-content/uploads/2023/08/001-9.jpg'),
    new ProductBody('ریزر', 'هدفن گیمینگ', '6520400', 'https://ayandehit.com/media_root/images/products/Razer-Kraken-X-Lite.jpg'),
    new ProductBody('تسکو', 'هدفن گیمینگ', '3200000', 'https://www.tsco.shop/wp-content/uploads/2022/11/TSCO-TH5151-Gaming-Headset-tsco.shop-4.jpg'),
    new ProductBody('لاجیتک', 'هدفن گیمینگ', '4600000', 'https://espeero.com/wp-content/uploads/2019/05/IMG_0556.png')
  ]
}
