import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { ProductInterface } from 'src/app/ProductInterface';
import { Location } from '@angular/common';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product_id: number;
  product: ProductInterface;
  message: string;

  constructor(
    private router: ActivatedRoute,
    private productService: ProductService,
    private _location: Location
    ) {
      this.message = '';
    }

  ngOnInit() {
    this.router.params.subscribe(params => {
      this.product_id = +params['id'];
      this.productService.getProduct(this.product_id).subscribe(prod => {
        this.product = prod;
      });
    });
  }

  onMessage(value: string) {
    this.message = value;
  }

  onBtnBack() {
    this._location.back();
  }

  createRange(no) {
    const range = [];
    for (let i = 0; i < no; i++) {
      range.push(i);
    }
    return range;
  }
}
