import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
   product=[
    {
      id:1,
      name:"Samsung",
      price:10000,
      is_in_inventory:true,
    },
    {
      id:2,
      name:"Lenovo",
      price:8000,
      is_in_inventory:false,
    },
    {
      id:3,
      name:"Oneplus",
      price:20000,
      is_in_inventory:true,
    }
   ]
   totalCount=this.product.length;
   totalInStock=this.product.filter(p=>p.is_in_inventory===true).length;
   totalOutOfStock=this.product.filter(p=>p.is_in_inventory===false).length;
   selectedFilterRadioButton:string=""
   onFilterChanged(value:string){

   console.log(value);
    this.selectedFilterRadioButton=value;

   }
}
