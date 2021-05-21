import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Invoice } from '../invoice';
import { InvoiceService } from '../invoice.service';

@Component({
  selector: 'app-invoice-detail',
  templateUrl: './invoice-detail.component.html',
  styleUrls: ['./invoice-detail.component.css']
})
export class InvoiceDetailComponent implements OnInit {


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
  
  }

