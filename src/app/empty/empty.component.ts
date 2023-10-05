import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-empty',
  templateUrl: './empty.component.html',
  styleUrls: ['./empty.component.css']
})
export class EmptyComponent implements OnInit {
  cartItems = 0;
  displaymsg = '';
  constructor(private product: ProductService) { }

  ngOnInit(): void {
    let cartData = localStorage.getItem('localCart');
    if (cartData) {
      this.cartItems = JSON.parse(cartData).length
    }
    if (this.cartItems) {
      this.displaymsg = "Please Login to place Order!"
    } else {
      this.displaymsg = 'Sorry ! Your Cart is Empty. Please click on FLIP-KART to go on Home Page.'
    }
  }
}
