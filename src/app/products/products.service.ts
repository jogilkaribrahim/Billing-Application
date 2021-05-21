import { EventEmitter, Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  ProductsChanged = new EventEmitter<Product[]>();
   private products: Product[] = [];

        getProducts(){
            return this.products.slice();
        }
        addProducts(product: Product){
            this.products.push(product);
            this.ProductsChanged.emit(this.products.slice());
        }
        addProduct(product: Product[]){
            // for (let ingredient of this.ingredients){
            //     this.addIngredients(ingredient);
            // }
            this.products.push(...product);
            this.ProductsChanged.emit(this.products.slice());
        }
}
