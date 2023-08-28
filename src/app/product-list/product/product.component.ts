import { Input } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
@Input()
product:{
  id:number;
  name:string;
  price:number;
}
}
