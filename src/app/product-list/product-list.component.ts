import { Component, inject, OnInit } from '@angular/core';
import {product} from '../product'
import { ProductService } from '../product.service';
@Component({
  selector: 'app-product-list',
  imports: [],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit{
oroducts: product[]=[];
productService = inject(ProductService);

ngOnInit(): void {
    
}
}
