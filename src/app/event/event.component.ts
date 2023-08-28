import { Component } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent {
  title="Event Binding"
  t1="Two way data Binding"
  name=""
  count=0
  onNameChange(event:any){
    this.name=event.target.value

  }
  dec(){
    if(this.count>0){
     this.count--
    }
  }
  inc(){
    this.count++;
  }
}
