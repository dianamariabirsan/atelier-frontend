import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {BASKET_PRODUCTS, Product} from "../../model/models";
import {Subscription} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  @Input() product: Product | undefined;
  @Output() messageToShow = new EventEmitter<any>();
  subscriptions: Subscription[] = [];
  display = false;

  constructor(
    private router: Router
  ) {
  }

  ngOnInit() {
  }

  addToBasket(product: Product) {
    // @ts-ignore
    let basketProducts = JSON.parse(localStorage.getItem(BASKET_PRODUCTS));

    if (basketProducts == null) {
      basketProducts = [];
    }

    basketProducts.push(product);
    console.log("PC: " + product)
    localStorage.setItem(BASKET_PRODUCTS, JSON.stringify(basketProducts));
  }
}
