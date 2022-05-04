export interface Address {
  id: number;
  addressDetail: string;
  description: string;
  main: boolean;
  user: string;
}

export interface Category {
  id: number;
  name: string;
  description: string;
}

export interface Language {
  id: number;
  name: string;
}

export interface Product {
  id: number;
  name: string;
  description: string;
  publishingYear: number;
  price: number;
  amount: number;
  language: string;
  category: string;
  publisher: string;
  active: boolean;
  img?: string;
}

export interface Publisher {
  id: number;
  name: string;
  country: string;
}

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  password: string;
  active: boolean;
  admin: boolean;
}

export interface Order {
  id: number;
  orderProducts: string;
  address: string;
  value: number;
  status: string;
}

export interface Cart {
  id: number;
  user: string;
  product: string;
  amount: number;
}
