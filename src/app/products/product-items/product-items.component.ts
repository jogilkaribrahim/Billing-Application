import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Product } from '../product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-items',
  templateUrl: './product-items.component.html',
  styleUrls: ['./product-items.component.css']
})
export class ProductItemsComponent implements OnInit {
  products : Product[];
  @ViewChild('nameProduct') NameInputRef: ElementRef;
  @ViewChild('weightProduct') WeightInputRef: ElementRef;
  @ViewChild('rateProduct') RateInputRef: ElementRef;

  constructor( private Pservice: ProductsService) { }

  ngOnInit(): void {
    
    this.products = this.Pservice.getProducts();
    this.Pservice.ProductsChanged.subscribe((products: Product[]) => { this.products = products; });
  }

  

  OnAdditem() {
    const IngName = this.NameInputRef.nativeElement.value;
    const IngWeight = this.WeightInputRef.nativeElement.value;
    const IngRate = this.RateInputRef.nativeElement.value;
    const IngAmt = this.WeightInputRef.nativeElement.value * this.RateInputRef.nativeElement.value;;
    const newProduct = new Product(IngName, IngWeight, IngRate, IngAmt);
    this.Pservice.addProducts(newProduct);
    
  }


  OnDeleteitem(product) {
    this.products.splice(this.products.indexOf(product), 1);
  }


  deleteAll() {
    this.products.splice(0, this.products.length);
  }
}
