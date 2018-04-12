import { Component, OnInit } from '@angular/core';
import { StockService } from '../stock.service';
import { InitservService } from './initserv.service';
@Component({
  selector: 'app-units',
  templateUrl: './units.component.html',
  styleUrls: ['./units.component.less']
})
export class UnitsComponent implements OnInit {

  display: boolean = false;
  displaytwo: boolean = false;
  constructor(private serv:InitservService) { }

  ngOnInit() {
    this.serv.editunit.subscribe(() => {  this.displaytwo = true;    });
  }
  showDialog() {
    this.display = true;
  }
  showDialogtwo() {
    this.displaytwo = true;
  }


}
