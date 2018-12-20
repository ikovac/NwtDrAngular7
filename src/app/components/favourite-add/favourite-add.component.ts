import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { ProductInterface } from 'src/app/ProductInterface';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-favourite-add',
  templateUrl: './favourite-add.component.html',
  styleUrls: ['./favourite-add.component.scss']
})
export class FavouriteAddComponent implements OnInit {
  @Output() message = new EventEmitter;
  @Input() product: ProductInterface;
  currentWishlist: any[];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.wishlist.subscribe(items => this.currentWishlist = items);
  }

  onWishlistAddClick() {
    this.product.favorit = !this.product.favorit;
    if (this.product.favorit) {
      this.message.emit('Proizvod je dodan u favorite');
      this.currentWishlist.push({id: this.product.id, naziv: this.product.naziv});
      this.productService.wishlist.next(this.currentWishlist);
    } else {
      this.message.emit('Proizvod je uklonjen iz favorita');
      this.currentWishlist = this.currentWishlist.filter(item => item.id !== this.product.id);
      this.productService.wishlist.next(this.currentWishlist);
    }
    setTimeout(() => {
      this.message.emit('');
    }, 2000);
  }

}
