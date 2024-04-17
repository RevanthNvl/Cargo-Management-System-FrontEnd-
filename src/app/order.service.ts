// order.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Order } from './model/order.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private orders: Order[] = [];
  private ordersSubject = new BehaviorSubject<Order[]>([]);
  orders$ = this.ordersSubject.asObservable();

  constructor() { }

  submitOrder(order: Order): void {
    this.orders.push(order);
    this.ordersSubject.next(this.orders);
  }

  getOrders(): Order[] {
    return this.orders;
  }

  approveOrder(orderId: number): void {
    const orderIndex = this.orders.findIndex(order => order.id === orderId);
    if (orderIndex !== -1) {
      this.orders[orderIndex].approved = true;
      this.ordersSubject.next(this.orders);
    }
  }

  rejectOrder(orderId: number): void {
    const orderIndex = this.orders.findIndex(order => order.id === orderId);
    if (orderIndex !== -1) {
      this.orders[orderIndex].approved = false;
      this.ordersSubject.next(this.orders);
    }
  }
}
