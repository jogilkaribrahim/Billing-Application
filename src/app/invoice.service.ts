import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Invoice } from './invoice';
import { Product } from './products/product';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  private baseURL = "http://localhost:8080/api/v4/invoices";

  constructor(private httpclient: HttpClient) { }
getInvoiceList(): Observable<Invoice[]>{
  return this.httpclient.get<Invoice[]>(`${this.baseURL}`);
}
createInvoice(invoice: Invoice): Observable<any>{
  return this.httpclient.post(`${this.baseURL}`, invoice);
}
getInvoiceById(id: number): Observable<Invoice> {
return this.httpclient.get<Invoice>(`${this.baseURL}/${id}`);
}
updateInvoiceById(id: number , invoice: Invoice): Observable<object>{
return this.httpclient.put(`${this.baseURL}/${id}`, invoice);
}
deleteInvoice(id: number): Observable<object>{
  return this.httpclient.delete(`${this.baseURL}/${id}`);
}
}
