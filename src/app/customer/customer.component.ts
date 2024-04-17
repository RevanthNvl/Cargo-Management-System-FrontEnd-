import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../model/product.model';
import { CartService } from '../cart.service';
import { ShippingAddress } from '../model/shipping-address.model';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.scss'
})

export class CustomerComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService, private cartService: CartService, private sharedService: SharedService) { }

  ngOnInit(): void {
    // Fetch products from ProductService
    this.products = this.productService.getProducts();
    
  }

  addToCart(product: Product): void {
    this.cartService.addToCart(product);
    alert("product added to cart");
  }

  
}
