import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { IProduct } from '../shared/i-product';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {
  cartItemList : any[]=[];
  public productList = new Subject();
  constructor() { }


  addItem(item : IProduct){
    this.cartItemList.push(item);
    this.productList.next(this.cartItemList);
  }

  getItem(){
    return this.cartItemList;
  }

  deleteItem(j:any){
    this.cartItemList.map((a:any, i :any) =>{
      if(a.id == j.id){
        this.cartItemList.splice(i,1)
      }
      this.productList.next(this.cartItemList);
      return this.cartItemList

    } )
  }

  emptyCartListItems(){
    this.cartItemList=[];
    this.productList.next(this.cartItemList);
  }
}
