import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { ProductInterface } from '../ProductInterface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Observable<ProductInterface[]>;
  public wishlist: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);

  constructor(private http: HttpClient) {
    this.products = this.http.get<ProductInterface[]>('../../assets/proizvodi.json')
      .pipe(
        map(proizvodi => {
          let newProizvodi = proizvodi;
          let initialWL = newProizvodi
          .filter(proizvod => proizvod.favorit === true)
          .map(proizvod => {
            return {id: proizvod.id, naziv: proizvod.naziv};
          });

          this.wishlist.next(initialWL);
          return proizvodi;
        })
      );
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
