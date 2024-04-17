import { Injectable } from '@angular/core';
import { Product } from './model/product.model'

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    {
      id: 1,
      name: 'Wood',
      description: 'Description of Product 1',
      price: 10.99,
      imageUrl: '/assets/woodPic.jpg'
    },
    {
      id: 2,
      name: 'Steel sheets',
      description: 'Description of Product 2',
      price: 19.99,
      imageUrl: '/assets/steelSheets.jpg'
    },
    {
      id: 3,
      name: 'Stone',
      description: 'Description of Product 3',
      price: 14.99,
      imageUrl: '/assets/stonePic.jpg'
    },
    {
      id: 4,
      name: 'Sand',
      description: 'Description of Product 3',
      price: 18.99,
      imageUrl: '/assets/sandPic.jpg'
    },
    {
      id: 5,
      name: 'Cement',
      description: 'Description of Product 3',
      price: 23.99,
      imageUrl: '/assets/cementPic.jpg'
    },
    {
      id: 6,
      name: 'Copper',
      description: 'Description of Product 3',
      price: 21.99,
      imageUrl: '/assets/copperPic.jpg'
    },
    {
      id: 7,
      name: 'Glass sheets',
      description: 'Description of Product 3',
      price: 25.99,
      imageUrl: '/assets/glassSheetsPic.jpg'
    }
  ];

  constructor() { }

  getProducts(): Product[] {
    // Return dummy product data
    return this.products;
  }
}
