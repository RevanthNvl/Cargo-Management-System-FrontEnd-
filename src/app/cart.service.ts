import { Injectable } from '@angular/core';
import { Product } from './model/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: Product[] = [];

  addToCart(product: Product): void {
    this.cartItems.push(product);
  }

  getCartItems(): Product[] {
    return this.cartItems;
  }

  getTotalPrice(): number {
    return this.cartItems.reduce((total, product) => total + product.price, 0);
  }

  clearCart(): void {
    this.cartItems = [];
  }
}
