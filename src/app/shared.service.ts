import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ShippingAddress } from './model/shipping-address.model';
import { Product } from './model/product.model';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private shippingAddressSubject = new BehaviorSubject<ShippingAddress | null>(null);
  shippingAddress$ = this.shippingAddressSubject.asObservable();

  constructor() { }

  updateShippingAddress(address: ShippingAddress): void {
    this.shippingAddressSubject.next(address);
  }

  private orderDetailsSubject = new BehaviorSubject<{ items: Product[], totalPrice: number, shippingAddress: ShippingAddress } | null>(null);
  orderDetails$ = this.orderDetailsSubject.asObservable();

  updateOrderDetails(items: Product[], totalPrice: number, shippingAddress: ShippingAddress): void {
    this.orderDetailsSubject.next({ items, totalPrice, shippingAddress });
  }
}
