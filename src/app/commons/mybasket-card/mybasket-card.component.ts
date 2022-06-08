import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {BASKET_PRODUCTS, Order, Product} from "../../model/models";
import {Subscription} from "rxjs";
import {Router} from "@angular/router";
import {ProductService} from "../../service/product.service";

@Component({
  selector: 'app-mybasket-card',
  templateUrl: './mybasket-card.component.html',
  styleUrls: ['./mybasket-card.component.css']
})
export class MybasketCardComponent implements OnInit {
  @Input() product: Product | undefined;
  @Input() order: Order | undefined;
  @Output() messageToShow = new EventEmitter<any>();
  subscriptions: Subscription[] = [];
  display = false;
  quantityForProduct: any;

  constructor(
    private router: Router
  ) {
  }

  ngOnInit() {
    this.quantityForProduct = this.product?.orderQuantity;
  }

  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  deleteProductFromBasket() {
    // @ts-ignore
    let products = JSON.parse(localStorage.getItem(BASKET_PRODUCTS));
    products.forEach((element: Product, index: number) => {
      if (element == this.product) delete products[index];
    });
    localStorage.setItem(BASKET_PRODUCTS, JSON.stringify(products));
  }
}
