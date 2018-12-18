import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductInterface } from 'src/app/ProductInterface';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: Observable<ProductInterface[]>;
  message: string;

  constructor(private productService: ProductService) {
    this.message = '';
  }

  ngOnInit() {
    this.products = this.productService.getProducts();
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

}
