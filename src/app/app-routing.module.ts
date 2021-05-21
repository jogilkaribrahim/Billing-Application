import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateInvoiceComponent } from './create-invoice/create-invoice.component';
import { InvoiceDetailComponent } from './invoice-detail/invoice-detail.component';
import { InvoiceListComponent } from './invoice-list/invoice-list.component';
import { PrintInvoiceComponent } from './print-invoice/print-invoice.component';
import { UpdateInvoiceComponent } from './update-invoice/update-invoice.component';

const routes: Routes = [
  {path: 'create-invoice', component: CreateInvoiceComponent},
  {path: 'update-invoice/:id', component: UpdateInvoiceComponent},
  {path: 'invoice-list', component: InvoiceListComponent},
  {path: '', redirectTo: 'create-invoice', pathMatch: 'full'},
  {path: 'invoice-detail/:id', component: InvoiceDetailComponent},
  {path: 'print-invoice/:id', component: PrintInvoiceComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
