import { Component, OnInit } from '@angular/core';
import { Products } from '../product';
import { ProductService } from '../product.service';
import * as _ from 'lodash';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private prodObj:ProductService) { 
    this.getProductData();
  }

  public prodArray : Products[] = [];
  ngOnInit(): void {
  }

  getProductData = ()=>{
    this.prodArray = this.prodObj.getAllProducts();
    // for(let i = 0 ; i< this.prodArray.length;i++){
    //   console.log(this.prodArray[i].id)
    // }
  }
  deleteProd = (index:any)=>{
    let resp = confirm('Are you sure want to Delete ? ');
    if(resp){
      this.prodObj.deleteProd(index);
    }
  }
  public prodName:any;public prodPrice:any;
  addProduct = ()=>{
    this.prodObj.addProduct(this.prodName,this.prodPrice);
    this.prodName = '';
    this.prodPrice = '';
  }
  public sID:any;public sName:any;
  public isProdFound:boolean=false;
  searchProd = ()=>{
    let temp :any;
    // alert(this.sID)
    if(!_.isEmpty(this.sID)){
      temp =  this.prodObj.searchProd(this.sID,this.sName);
    }
    if(!_.isEmpty(this.sName)){
      temp =  this.prodObj.searchProd(this.sID,this.sName);
    }
   
    if(temp.length<1){
      console.log("Not Found");
      this.isProdFound = true;
      this.prodArray = temp;
    }else{
      this.prodArray = temp;
      this.isProdFound = false;
    }
    
  }
  clearField = () =>{
    this.sID = '';
    this.sName = '';
    this.isProdFound = false;
    this.getProductData();
  }
}
