import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent {
title:string="String Interpolation"
name:string="iphone";
price:number=999;
color:string="red"
discount:number=5
instock:number=7
getDiscount(){
  return this.price-(this.price*this.discount/100)
}
}
