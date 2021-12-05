import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../Product';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  products: Product[] = []
  constructor(private taskService: TaskService) { 

    this.taskService.getProducts().subscribe((response : any) => {
      console.log(response)
      this.products = response
      // this.products.push(response)
      // for (let p of this.products) {
      //   console.log(p.p_name)
      // }
    })
    
  }

  ngOnInit(): void {

  }

  addItem(p_name: string) {
    try {
      this.taskService.addProducts(p_name).subscribe( (response : any) => {
        console.log(response)
        this.products.push(response)

      })
    } catch(e) {
      console.log("Something Went Wrong")
      console.log(e);
    }
    
  }

  productDelete(product: Product) {
    try {
      this.taskService.deleteProduct(product).subscribe((response: any) =>{
        console.log(response)
        const index = this.products.indexOf(product)
        if ( index > -1) {
          this.products.splice(index, 1);
        }
      })
    } catch(e) {

    }
    // const index = this.products.indexOf(product)
    // console.log(index)
    // console.log(product.p_name)
  }

}
