import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { CardService} from '../services/card.service';
import { Product } from '../shared/product';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  
  constructor(private productservice : ProductService,
    private cardService : CardService) { }

  ngOnInit(): void {
  }

  products = this.productservice.getProducts();

  addToCard(product : Product){
    this.cardService.addToCard(product);
  }

}
