import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import { Products } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  public products = [
    new Products(101,'Samsung TV',45000),
    new Products(102,'LG TV',65000),
  ]
   getAllProducts = ()=>{
    // console.log(this.products)
    return this.products;
  }

  getProductByName = (name:string)=>{
    for(let i=0;i<this.products.length;i++){
      // if(name === this.products[i].name){
      //   return this.products[i];
      // }
      
    }
  }
  getProductByID = (id:string)=>{
    for(let i=0;i<this.products.length;i++){
      // if(id === this.products[i].id){
      //   return this.products[i];
      // }
    }
  }

  deleteProd = (index:any)=>{
    // alert(index)
    this.products.splice(index,1);
  }
  addProduct = (name:any,price:any)=>{
    let i = 0;
    for(;i<this.products.length;i++);
    this.products.push(new Products(this.products[i-1].id + 1,name,price));
  }
  searchProd = (sID:any,sName:any)=>{
    
    if(!_.isEmpty(sID)){
      return this.products.filter(x=>x.id == sID);
    }
    if(!_.isEmpty(sName)){
      return this.products.filter((x:any)=>{
        return x.name.includes(sName);
      });
    }
    return "not found";
  }
}
