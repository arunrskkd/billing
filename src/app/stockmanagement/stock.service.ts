import { Injectable } from '@angular/core';
import { Stock } from './stock.model';
import { Subject } from 'rxjs/Subject';
import { Http } from '@angular/http';
import { MessageService } from 'primeng/components/common/messageservice';
import 'rxjs/Rx';
import { Response } from '@angular/http';
import { error } from 'util';
import { Billingdata } from './billing/billing.model';
import { Router } from '@angular/router';
@Injectable()

export class StockService {
  stocks:Stock[]=[];
  stockadde = new Subject();
  selectedstock:Stock;
  editstock = new Subject<Stock>();
  constructor(private http:Http,private messageService: MessageService,private rout:Router) { }

  addstock(item:Stock){
  
    this.http.post('http://localhost:3000/api/add',item).subscribe((data)=>{
      this.stockadde.next();
      this.messageService.add({severity:'success', summary:'SUBMITTED', detail:' submitted'});
    },
    (error)=>{
      this.messageService.add({severity:'error', summary:'Error ', detail:'Validation failed'});
    });

  }

  geststock(){
     return  this.http.get('http://localhost:3000/api/viewstock').map((data:Response) =>{  return data.json()    });
  }

  ondel(id:string){
    this.http.get('http://localhost:3000/api/deletestock/'+id).subscribe( 
      (data)=>{ 
        
          this.messageService.add({severity:'error', summary:'deleted ', detail:'deleted'});
          this.stockadde.next();
        }
        
        
        ) }
   
  setseletedid(item:Stock){
    this.selectedstock = item;
    this.editstock.next(item);
  }      

 updatestock(item:Stock){
  this.http.post('http://localhost:3000/api/updatestock',item).subscribe((data)=>{
    this.stockadde.next();
    this.messageService.add({severity:'success', summary:'UPDATED', detail:' Updated'});
  },
  (error)=>{
    this.messageService.add({severity:'error', summary:'Error ', detail:'Validation failed'});
  });
 }

 billing(item:Billingdata[]){
  this.http.post('http://localhost:3000/api/billing',item).subscribe((data)=>{
    this.messageService.add({severity:'success', summary:'UPDATED', detail:' Updated'});
    this.rout.navigateByUrl('/stock/stock');
  },
  (error)=>{
    this.messageService.add({severity:'error', summary:'Error ', detail:'Validation failed'});
  });
 }
}
