import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Invoice } from '../invoice';
import { InvoiceService } from '../invoice.service';

@Component({
  selector: 'app-update-invoice',
  templateUrl: './update-invoice.component.html',
  styleUrls: ['./update-invoice.component.css']
})
export class UpdateInvoiceComponent implements OnInit {

  todayISOString : string = new Date().toISOString();
  id : number;
  invoice : Invoice = new Invoice();
  constructor(private invoiceService : InvoiceService, private Route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = this.Route.snapshot.params['id'];
    this.invoiceService.getInvoiceById(this.id).subscribe(data =>{
      this.invoice = data;
    }, error => console.log(error));
    
  }
  onSubmit(){
  this.invoice.date = this.todayISOString; 
   this.invoiceService.updateInvoiceById(this.id , this.invoice).subscribe(data => {this.gotoInvoiceList()},
   error => console.log(error));
   

  } 
  gotoInvoiceList(){
    this.router.navigate(['/invoice-list']);
      }

}
