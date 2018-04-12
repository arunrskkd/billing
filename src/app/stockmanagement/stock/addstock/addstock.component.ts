import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { FormArray} from '@angular/forms';
import { StockService } from '../../stock.service';
import { Subject } from 'rxjs/Subject';
import { Units } from '../../units/units.model';
import { InitservService } from '../../units/initserv.service';


@Component({
  selector: 'app-addstock',
  templateUrl: './addstock.component.html',
  styleUrls: ['./addstock.component.less']
})
export class AddstockComponent implements OnInit {
  stockform:FormGroup;
  units:any[];
  constructor(private fb:FormBuilder,private serv:StockService,private unitserv:InitservService) { }

  ngOnInit() {
    this.createForm();
    this.unitserv.getunit().subscribe(  
      (data:any) =>{
        console.log(data)
        this.units = data;
       
     }); 
  }

  createForm() {
    this.stockform = this.fb.group({
      name:['', Validators.required ],
      price:['', Validators.required ],
      quantity:['', Validators.required ],
      description: ['', Validators.required ],
      unit:['', Validators.required ],
   })
     

}

onsubmit(stockform:FormGroup){
  this.serv.addstock(this.stockform.value);
  this.stockform.reset();
 
}


}
