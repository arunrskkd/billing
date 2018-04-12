import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { FormArray} from '@angular/forms';
import { StockService } from '../../stock.service';
import { Subject } from 'rxjs/Subject';
import { InitservService } from '../initserv.service';
@Component({
  selector: 'app-editunits',
  templateUrl: './editunits.component.html',
  styleUrls: ['./editunits.component.less']
})
export class EditunitsComponent implements OnInit {
  stockform:FormGroup;
  constructor(private fb:FormBuilder,private serv:InitservService) { }

  ngOnInit() {
    this.createForm();
    this.serv.editunit.subscribe((data) => { 
        this.stockform.setValue({
          id:data._id,
          name:data.name,
          description: data.description,
        })

       });
  }
  createForm() {
    this.stockform = this.fb.group({
      id:['',Validators.required ],
      name:['', Validators.required ],
      description: ['', Validators.required ]
      
   })
     

}

onsubmit(stockform:FormGroup){
  this.serv.updateunit(this.stockform.value);

 
}

}
