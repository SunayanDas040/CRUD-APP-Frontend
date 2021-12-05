import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './Product';
import { User } from './User';
import { WebRequestService } from './web-request.service';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private webReqService: WebRequestService, private http:HttpClient) { }

  registerUser (user: User) {
    return this.http.post("register",user);
  }

  loginUser(email: string, password: string) {
    // this.headers.append("Content-Type", "application/json")
    const reqs = { email, password}
    return this.webReqService.post('login', { email, password } )
  }

  addProducts(p_name: string) {
    return this.webReqService.post('products', { p_name })
  }

  getProducts() {
    return this.webReqService.get('products')
  }

  deleteProduct(product: Product) {
    return this.webReqService.delete('products', product)
  }

}
