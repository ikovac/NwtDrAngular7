import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ProductInterface } from '../ProductInterface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Observable<ProductInterface[]>;

  constructor(private http: HttpClient) {
    this.products = this.http.get<ProductInterface[]>('../../assets/proizvodi.json');
   }

  getProducts(): Observable<ProductInterface[]> {
    return this.products;
  }

  getProduct(id: number): Observable<ProductInterface> {
    return this.products.pipe(
      map(products => products.find((prod) => prod.id === id))
    );
  }
}
