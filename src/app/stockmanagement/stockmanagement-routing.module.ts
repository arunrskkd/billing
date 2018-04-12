import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StockComponent } from './stock/stock.component';
import { UnitsComponent } from './units/units.component';
import { BillingComponent } from './billing/billing.component';
const routes: Routes = [
  {path:'stock',component:StockComponent},
  {path:'units',component:UnitsComponent},
  {path:'billing',component:BillingComponent},
  { path: '', redirectTo: 'stock', pathMatch: 'full'
 
},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StockmanagementRoutingModule { }
