import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { CartServiceService } from '../services/cart-service.service';
import { IProduct } from '../shared/i-product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  public productList!: IProduct[];
  public loader = false;
  public category = ['all','Premium','Tamilnadu']

  constructor(private apiService: ApiService, private cartService: CartServiceService) { }

  ngOnInit(): void {
    this.loader = true;
    this.productList=this.apiService.getProducts();
        this.loader = false;
  }

  addItem(item: IProduct) {
    this.cartService.addItem(item);
  }

  filterByCategory(e:string){
    this.productList=this.productList.filter((prod) => {
      return prod.p_category===e;
    })
    console.log(this.productList)
  }

}
