import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  products = [];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.wishlist.subscribe(items => {
      this.products = items;
    });
  }

}
