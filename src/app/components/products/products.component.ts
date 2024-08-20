import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products.service';
import { ValueService } from 'src/app/services/value.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  products: Product[] = [];

  constructor(
    private productsService: ProductsService,
    private valueService: ValueService,
  ) { }

  ngOnInit(): void {
    this.getAllProducts();
  }


  getAllProducts() {
    this.productsService.getAllSimple()
    .subscribe(response => {
      this.products = response;
    });
  }

}
