import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { Product } from '../model/product.model';
import { ShippingAddress } from '../model/shipping-address.model';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.scss']
})
export class ManagerComponent implements OnInit {
  orderItems: Product[] = [];
  totalPrice: number = 0;
  shippingAddress: ShippingAddress | null = null;

  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
    this.sharedService.orderDetails$.subscribe(orderDetails => {
      if (orderDetails) {
        this.orderItems = orderDetails.items;
        this.totalPrice = orderDetails.totalPrice;
        this.shippingAddress = orderDetails.shippingAddress;
      }
    });
  }

  approveOrder(): void {
    alert('Order has been approved.');
  }

  rejectOrder(): void {
    alert('Order has been rejected.');
  }
}
