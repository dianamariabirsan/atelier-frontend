import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from "../../model/models";
import {Subscription} from "rxjs";
import {ProductService} from "../../service/product.service";
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
    private router: Router,
    private productService: ProductService
  ) {
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }
}
