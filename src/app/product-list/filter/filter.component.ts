import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
selectedInput:number=0
@Input()
all:number=0;

@Input()
inStock:number=0;

@Input()
outOfStock:number=0;

show(option:string){
   if(option==="All"){
      this.selectedInput=this.all;
   }
   else if(option==="true"){
    this.selectedInput=this.inStock;
 }
 else{
  this.selectedInput=this.outOfStock;
 }
}
//creating an instance or calling a constructor of event emitter class which is used to emit event of type string
//created a custom event and we are raising it using the method which is called when the change event occurs
@Output()//now it can be binded
selectedFilterButtonChanged:EventEmitter<string>=new EventEmitter<string>()
selectedFilteredRadioButton:string="all"
onSelectedFilterRadioButtonChanged(){
  console.log(this.selectedFilteredRadioButton)
  this.selectedFilterButtonChanged.emit(this.selectedFilteredRadioButton)
}
}
