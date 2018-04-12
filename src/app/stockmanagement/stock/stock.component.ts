import { Component, OnInit } from '@angular/core';
import { StockService } from '../stock.service';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.less']
})
export class StockComponent implements OnInit {
  display: boolean = false;
  displaytwo: boolean = false;
  constructor(private serv:StockService) { }

  ngOnInit() {
   this.serv.editstock.subscribe(() => {  this.displaytwo = true;    });
  }
  showDialog() {
    this.display = true;
  }
  showDialogtwo() {
    this.displaytwo = true;
  }


}
