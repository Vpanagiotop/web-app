import { Component } from '@angular/core';
import { Product, ProductsService } from './test';
@Component({
  selector: 'app-strip-foundation',
  templateUrl: './strip-foundation.component.html',
  styleUrls: ['./strip-foundation.component.scss']
})
export class StripFoundationComponent {
  products: Product[];

  constructor(service: ProductsService) {
    this.products = service.getProducts();
  }

}
