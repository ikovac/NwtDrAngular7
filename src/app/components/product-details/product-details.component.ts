import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { ProductInterface } from 'src/app/ProductInterface';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product_id: number;
  product: ProductInterface;

  constructor(
    private router: ActivatedRoute,
    private productService: ProductService
    ) { }

  ngOnInit() {
    this.router.params.subscribe(params => {
      this.product_id = +params['id'];
      this.productService.getProduct(this.product_id).subscribe(prod => {
        this.product = prod;
      });
    });
  }

}
