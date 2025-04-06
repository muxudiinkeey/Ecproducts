import { Injectable,inject } from '@angular/core';
import { product } from './product';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  http = inject (HttpClient)

  getProducts() {
    return this.http.get<product>(`http://localhost:3000/products`);
  }
 // getProduct(id: string) {
 //   return this.http.get<product>(`http://localhost:3000/products/${id}`);
 // }

 /*  
   addProduct(data: product) {
    return this.http.post('http://localhost:3000/products', data);
  } 
 updateProduct(product: product) {
    return this.http.put<product>(
      `http://localhost:3000/products/${product.id}`,
      product
    );
  }

  deleteProduct(id: number) {
    return this.http.delete(`http://localhost:3000/products/${id}`);
  }
*/
}
