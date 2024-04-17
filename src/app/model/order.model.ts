export interface Order {
    id: number;
    shippingAddress: ShippingAddress;
    approved: boolean;
  }
  
  export interface ShippingAddress {
    address: string;
    city: string;
    state: string;
    country: string;
    phoneNumber: string;
  }
  