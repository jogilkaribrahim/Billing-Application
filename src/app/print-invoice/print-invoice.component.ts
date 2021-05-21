import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Invoice } from '../invoice';
import { InvoiceService } from '../invoice.service';

@Component({
  selector: 'app-print-invoice',
  templateUrl: './print-invoice.component.html',
  styleUrls: ['./print-invoice.component.css']
})
export class PrintInvoiceComponent implements OnInit {

  id: number;
  invoice: Invoice;
    constructor(private route: ActivatedRoute,private invoiceService: InvoiceService) { }
  
    ngOnInit(): void {
  this.id  = this.route.snapshot.params['id'];
  this.invoice = new Invoice();
  this.invoiceService.getInvoiceById(this.id).subscribe(data => {
    this.invoice = data;
  });
    }
    public printPage() {
      window.print();
    }

}
