import { Component, OnInit } from '@angular/core';
import { StockService } from '../stock.service';
import { Stock } from '../stock.model';
import { Billingdata } from './billing.model';
@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.less']
})
export class BillingComponent implements OnInit {
 stock:Stock[];
 selecteditem:Stock=new Stock();
 billingdata:Billingdata[]=[];
 quantity:number;
 amount:number;
  constructor(private serv:StockService) { }

  ngOnInit() {
    this.serv.geststock().subscribe(
      (data:any) =>{
        console.log(data)
        this.stock = data;
       
     }); 
  }
  onchange(item:any){

    var x;
    for (x in this.stock) {
      if(this.stock[x].name == item){
        this.selecteditem = this.stock[x];
      }
    }
    console.log(this.selecteditem)
  }

  adddata(){
    if(this.in_array(this.selecteditem.name, this.billingdata)){
      alert("already added")
      return false;
    }
    if(isNaN(this.quantity) || this.quantity == null){
      alert("please enter quantity")
      return false;
    }
    
    this.billingdata.push(new Billingdata(this.selecteditem.name,this.quantity,this.quantity*this.selecteditem.price));
    this.totalamount();
  }

  onsave(){    
    this.serv.billing(this.billingdata);
    this.totalamount();
    console.log(this.billingdata);   
    console.log(this.amount);  
  }

   in_array(needle, haystack)
    {
        for(var key in haystack)
        {
            if(needle === haystack[key].name)
            {
                return true;
            }
        }
        return false;
    }

    del(i){
     this.billingdata.splice(i,1);
     this.totalamount();
    }

    totalamount(){
      this.amount = 0;
      for(let key in this.billingdata){
        this.amount += this.billingdata[key].total;
      }
    }
}
