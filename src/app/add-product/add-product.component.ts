import { Component, OnInit, Output, EventEmitter } from '@angular/core';
// import { EventEmitter } from 'stream';
import { Product } from '../Product';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  p_name: string = ""
  @Output() addProduct : EventEmitter<string> = new EventEmitter();

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    // const product = { p_name: this.p_name}
    // this.taskService.addProducts(this.p_name).subscribe((response) => {
    //   console.log(response)
    
    // })
    // console.log(this.p_name)

  }
  onClick() {
    // console.log(this.p_name)
    // this.taskService.addProducts(this.p_name).subscribe((response) => {
    //   console.log(response)
    
    // })
    const product = { p_name: this.p_name }
    this.addProduct.emit(this.p_name)
  }

}
