import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Order, Product} from "../../model/models";
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
    private router: Router,
    private productService: ProductService
  ) {
  }

  ngOnInit() {
    this.quantityForProduct = this.product?.orderQuantity;
  }

  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  deleteProductFromBasket() {

  }
}
