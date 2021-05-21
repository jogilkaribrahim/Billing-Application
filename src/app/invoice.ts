import { Product } from "./products/product";

export class Invoice{
  push(arg0: { id: number; name: string; }) {
    throw new Error('Method not implemented.');
  }
     id: number;
     date: string;
     panNo: string;
     fullName: string;
     address: string;
     state: string;
     registrationNo: number;
     stateCode: number;
     transport: number;
     sgstamount: number;
     cgstamount: number;
     icgstamount: number;
     finalTotal: number;
     products: Product[];



     

}
