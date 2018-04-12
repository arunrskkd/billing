import { Component, OnInit } from '@angular/core';
import { Units } from '../units.model';
import { InitservService } from '../initserv.service';
import {ConfirmationService} from 'primeng/api';
import { Subject } from 'rxjs/Subject';
@Component({
  selector: 'app-viewunits',
  templateUrl: './viewunits.component.html',
  styleUrls: ['./viewunits.component.less']
})
export class ViewunitsComponent implements OnInit {
  units:Units[]=[];

  constructor(private serv:InitservService,private confirmationService: ConfirmationService) { }

  ngOnInit() {
    this.serv.getunit().subscribe(  
      (data:any) =>{
        console.log(data)
        this.units = data;
       
     }); 
     this.serv.changedetect.subscribe(() =>{
      this.serv.getunit().subscribe(
        (data:any) =>{
          console.log(data)
          this.units = data;
         
       }); 

     });
  }
  ondelete(id:string){

    this.confirmationService.confirm({
        message: 'Are you sure that you want to perform this action?',
        accept: () => {
          this.serv.delunit(id);
        }
    });

 
}


onedit(item:Units){
  this.serv.setseletedid(item);
}


}
