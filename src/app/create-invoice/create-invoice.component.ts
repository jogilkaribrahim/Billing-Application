
import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Invoice } from '../invoice';
import { InvoiceService } from '../invoice.service';
import { Product } from '../products/product';
import { ProductsService } from '../products/products.service';

@Component({
  selector: 'app-create-invoice',
  templateUrl: './create-invoice.component.html',
  styleUrls: ['./create-invoice.component.css']
})
export class CreateInvoiceComponent implements OnInit {

  products : Product[];
  id: number;
  invoice: Invoice = new Invoice();
  todayISOString: string = new Date().toISOString();
  todayString: string = new Date().toDateString();
  constructor(private invoiceService: InvoiceService, private router: Router, private Pservice: ProductsService) { }

  Onsave() {
    this.invoiceService.createInvoice(this.invoice).subscribe(data => {
      console.log(data);
      this.gotoInvoiceList();
    }, error => console.log(error));
  }

  gotoInvoiceList() {
    this.router.navigate(['/invoice-list']);
  }

  ngOnInit(): void {

  }
  onSubmit() {
    this.products = this.Pservice.getProducts();
    this.Pservice.ProductsChanged.subscribe((products: Product[]) => { this.products = products; });
    console.log(this.invoice);
    console.log(this.products);
    this.invoice.date = this.todayISOString;
    this.Onsave();


  }


}
