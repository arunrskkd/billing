import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { FormArray} from '@angular/forms';
import { InitservService } from '../initserv.service';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-addunits',
  templateUrl: './addunits.component.html',
  styleUrls: ['./addunits.component.less']
})
export class AddunitsComponent implements OnInit {

  stockform:FormGroup;
  constructor(private fb:FormBuilder,private serv:InitservService) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.stockform = this.fb.group({
      name:['', Validators.required ],
      description: ['', Validators.required ]

   })
}

onsubmit(stockform:FormGroup){
  this.serv.additem(stockform.value);
  this.stockform.reset();
 
}

}
