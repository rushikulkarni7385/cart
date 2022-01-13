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
  constructor(private cartService: CartServiceService, private http: HttpClient) { }
  name : string = 'Rushi';

  ngOnInit(): void {
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
