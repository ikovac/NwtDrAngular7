import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { map, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { ProductInterface } from 'src/app/ProductInterface';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit, OnDestroy {
  products: Observable<ProductInterface[]>;
  allProducts: Observable<ProductInterface[]>;
  message: string;
  typing = new Subject();
  subscription: any;

  constructor(private productService: ProductService) {
    this.message = '';
  }

  ngOnInit() {
    this.allProducts = this.productService.getProducts();
    this.products = this.allProducts;

    this.subscription = this.typing
    .pipe(
      debounceTime(500),
      distinctUntilChanged()
    )
    .subscribe((pojam: string) => {
      const searched_value = pojam.toUpperCase();
      if (pojam === '') {
        this.products = this.allProducts;
      } else {
        this.products = this.allProducts.pipe(
          map(items =>
            items.filter(item =>
              item.naziv
              .toUpperCase()
              .includes(searched_value) ||
              item.opis
              .toUpperCase()
              .includes(searched_value)))
        );
      }
    });
  }

  onWishlistAddClick(product: ProductInterface) {
    product.favorit = !product.favorit;
    if (product.favorit) {
      this.message = 'Proizvod je dodan u favorite';
    } else {
      this.message = 'Proizvod je uklonjen iz favorita';
    }
    setTimeout(() => {
      this.message = '';
    }, 3000);
  }

  onSearch(value: string) {
    this.typing.next(value);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
