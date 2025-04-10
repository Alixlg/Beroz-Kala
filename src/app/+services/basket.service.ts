import { Injectable } from '@angular/core';
import { ProductBody } from '../+models/product';

@Injectable({
  providedIn: 'root'
})
export class BasketService {
  basket: ProductBody[] = [];
}
