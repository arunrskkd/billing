import { Injectable } from '@angular/core';
import { Units } from './units.model';
import { Subject } from 'rxjs/Subject';
import { Http } from '@angular/http';
import { MessageService } from 'primeng/components/common/messageservice';
import 'rxjs/Rx';
import { Response } from '@angular/http';
import { error } from 'util';
@Injectable()
export class InitservService {
  changedetect = new Subject();
  selectedunit:Units;
  editunit = new Subject<Units>();
  constructor(private http:Http,private messageService: MessageService) { }

  additem(item:Units){
  
    this.http.post('http://localhost:3000/api/addunit',item).subscribe((data)=>{
     
      this.messageService.add({severity:'success', summary:'SUBMITTED', detail:' submitted'});
      this.changedetect.next();
    },
    (error)=>{
      this.messageService.add({severity:'error', summary:'Error ', detail:'Validation failed'});
    });

  }

  getunit(){
    return  this.http.get('http://localhost:3000/api/viewunit').map((data:Response) =>{  return data.json()    });
 }

 delunit(id:string){
  this.http.get('http://localhost:3000/api/deleteunit/'+id).subscribe( 
    (data)=>{ 
      
        this.messageService.add({severity:'error', summary:'deleted ', detail:'deleted'});
        this.changedetect.next();
      }
      
      
      ) 
}

setseletedid(item:Units){
  this.selectedunit = item;
  this.editunit.next(item);
}   

updateunit(item:Units){
 
  this.http.post('http://localhost:3000/api/updateunit',item).subscribe((data)=>{
    this.changedetect.next();
    this.messageService.add({severity:'success', summary:'UPDATED', detail:' Updated'});
  },
  (error)=>{
    this.messageService.add({severity:'error', summary:'Error ', detail:'Validation failed'});
  });
 }

}
