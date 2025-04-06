import { Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { AddProductComponent } from './add-product/add-product.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'path' },
    { path: 'productList', component: ProductListComponent},
    { path: 'productDetails', component: ProductdetailsComponent },
    { path: 'addProduct', component: AddProductComponent},
    { path: '**', component: PageNotFoundComponent },
];
