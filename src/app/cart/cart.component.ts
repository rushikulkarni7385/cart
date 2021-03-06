import { HttpClient } from '@angular/common/http';
import { Component, OnChanges, OnInit } from '@angular/core';
import { CartServiceService } from '../services/cart-service.service';
import { IProduct } from '../shared/i-product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit, OnChanges {
  products!: any[];
  constructor(private cartService: CartServiceService, private http: HttpClient) { }

  ngOnInit(): void {
    this.products = this.cartService.getItem();
  }



  ngOnChanges() {

  }


  onRemove(j: any) {
    this.cartService.deleteItem(j)
  }

  emptyCart() {
    this.cartService.emptyCartListItems();
    this.products = this.cartService.getItem();

  }
}
