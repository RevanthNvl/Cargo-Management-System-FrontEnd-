import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { Product } from '../model/product.model';
import { SharedService } from '../shared.service';
import { ShippingAddress } from '../model/shipping-address.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  cartItems: Product[] = [];
  totalPrice: number = 0;
  shippingAddress: ShippingAddress | null = null;
  submittedAddress: ShippingAddress | null = null; // New property to store submitted address
  
  constructor(private cartService: CartService, private sharedService: SharedService, private router: Router) { }

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems();
    this.totalPrice = this.cartService.getTotalPrice();
  }

  clearCart(): void {
    this.cartService.clearCart();
    this.cartItems = [];
    this.totalPrice = 0;
  }

  showShippingForm(): void {
    this.shippingAddress = {
      address: '',
      city: '',
      state: '',
      country: '',
      phoneNumber: ''
    };
  }

  submitShippingAddress(): void {
    if (this.shippingAddress) {
      // Submit the shipping address
      this.submittedAddress = { ...this.shippingAddress }; // Store the submitted address
      this.sharedService.updateShippingAddress(this.shippingAddress);
      this.sharedService.updateOrderDetails(this.cartItems, this.totalPrice, this.shippingAddress);
    }
  }

  goToManagersView(): void {
    this.router.navigate(['/manager']); // Navigate to the 'manager' route
  }
}
