import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StockmanagementRoutingModule } from './stockmanagement-routing.module';
import { StockComponent } from './stock/stock.component';
import { AddstockComponent } from './stock/addstock/addstock.component';
import { ViewstockComponent } from './stock/viewstock/viewstock.component';
import {CardModule} from 'primeng/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {DataTableModule} from 'primeng/datatable';
import { StockService } from './stock.service';
import {DialogModule} from 'primeng/dialog';
import {GrowlModule} from 'primeng/growl';
import { EditstockComponent } from './stock/editstock/editstock.component';
import { UnitsComponent } from './units/units.component';
import { AddunitsComponent } from './units/addunits/addunits.component';
import { EditunitsComponent } from './units/editunits/editunits.component';
import { ViewunitsComponent } from './units/viewunits/viewunits.component';
import { InitservService } from './units/initserv.service';
import {DropdownModule} from 'primeng/dropdown';
import { BillingComponent } from './billing/billing.component';
@NgModule({
  imports: [
    CommonModule,
    StockmanagementRoutingModule,
    CardModule,
    FormsModule,
    ReactiveFormsModule,
    DataTableModule,
    DialogModule,
    GrowlModule,
    DropdownModule
  
  ],
  declarations: [StockComponent, AddstockComponent, ViewstockComponent, EditstockComponent, UnitsComponent, AddunitsComponent, EditunitsComponent, ViewunitsComponent, BillingComponent],
  providers:[StockService,InitservService]

})
export class StockmanagementModule { }
