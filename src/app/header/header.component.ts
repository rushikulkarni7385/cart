import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../shared/auth-service.service';
import { CartServiceService } from '../services/cart-service.service';
import { IProduct } from '../shared/i-product';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  totalProducts : number = 0;
  constructor(private cartService : CartServiceService,private authService : AuthServiceService) { }

  ngOnInit(): void {
    this.cartService.productList.subscribe((observer : any) => {
      this.totalProducts=observer.length;
    })
  }
  


  onLogout(){
    this.authService.logoutSuccess();
  }
}
