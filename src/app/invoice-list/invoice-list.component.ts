import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Invoice } from '../invoice';
import { InvoiceService } from '../invoice.service';

@Component({
  selector: 'app-invoice-list',
  templateUrl: './invoice-list.component.html',
  styleUrls: ['./invoice-list.component.css']
})
export class InvoiceListComponent implements OnInit {

  invoices : Invoice[];


  constructor(private invoiceService : InvoiceService , private route: Router) { }


  ngOnInit(): void {
    this.getInvoices();

  }
  private getInvoices(){
    this.invoiceService.getInvoiceList().subscribe(data => 
      {this.invoices = data; });
  }

  public updateInvoice(id : number){
this.route.navigate(['update-invoice',id]);
  }

  public deleteInvoice(id : number){
    this.invoiceService.deleteInvoice(id).subscribe( data => {
      console.log(data);
      this.getInvoices();
    });
  }
  public detailInvoice(id : number){
    this.route.navigate(['invoice-detail',id]);
  }
  public printInvoice(id : number){
    this.route.navigate(['print-invoice',id]);
  }
}
