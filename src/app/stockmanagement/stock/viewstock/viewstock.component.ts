import { Component, OnInit } from '@angular/core';
import { Stock } from '../../stock.model';
import { StockService } from '../../stock.service';
import { Subject } from 'rxjs/Subject';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import {ConfirmationService} from 'primeng/api';

@Component({
  selector: 'app-viewstock',
  templateUrl: './viewstock.component.html',
  styleUrls: ['./viewstock.component.less']
})
export class ViewstockComponent implements OnInit {
  stock: Stock[]=[];

  
  constructor(private serv:StockService,private confirmationService: ConfirmationService) { }
  ngOnInit() {
    this.serv.geststock().subscribe(
      (data:any) =>{
        console.log(data)
        this.stock = data;
       
     }); 
     this.serv.stockadde.subscribe(()=>{
      this.serv.geststock().subscribe(
        (data:any) =>{
          console.log(data)
          this.stock = data;
         
       }); 
     }); 
  }

  ondelete(id:string){

      this.confirmationService.confirm({
          message: 'Are you sure that you want to perform this action?',
          accept: () => {
            this.serv.ondel(id);
          }
      });
  
   
  }

  onedit(item:Stock){
    this.serv.setseletedid(item);
  }


 
}
