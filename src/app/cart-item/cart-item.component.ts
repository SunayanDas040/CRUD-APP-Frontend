import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../Product';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {

  @Input() product: Product = {p_name:"Sandisk"}
  // @Input() name: string = ""
  // @Input() i?: number
  @Output() deleteProduct: EventEmitter<Product> = new EventEmitter();

  constructor() {
    // console.log(this.product)
   }

  ngOnInit(): void {
  }

  onClick() {

    this.deleteProduct.emit(this.product)
    // console.log(this.product.p_name)

  }

}
