import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { FormArray} from '@angular/forms';
import { StockService } from '../../stock.service';
import { Subject } from 'rxjs/Subject';
import { Units } from '../../units/units.model';
import { InitservService } from '../../units/initserv.service';
@Component({
  selector: 'app-editstock',
  templateUrl: './editstock.component.html',
  styleUrls: ['./editstock.component.less']
})
export class EditstockComponent implements OnInit {
  stockform:FormGroup;
  units:Units[];
  constructor(private fb:FormBuilder,private serv:StockService,private unitserv:InitservService) { }

  ngOnInit() {
    this.createForm();
    this.unitserv.getunit().subscribe(  
      (data:any) =>{
        console.log(data)
        this.units = data;
       
     }); 
    this.serv.editstock.subscribe((data) => { 
        this.stockform.setValue({
          id:data._id,
          name:data.name,
          price:data.price,
          quantity:data.quantity,
          unit:data.unit,
          description: data.description,
        })

       });

  }
  createForm() {
    this.stockform = this.fb.group({
      id:['',Validators.required ],
      name:['', Validators.required ],
      price:['', Validators.required ],
      quantity:['', Validators.required ],
      description: ['', Validators.required ],
      unit: ['', Validators.required ]
   })
     

}

onsubmit(stockform:FormGroup){
  this.serv.updatestock(this.stockform.value);
  
 
}

}
