import {Component, OnDestroy, OnInit} from '@angular/core';
import {Product} from "../../model/models";
import {Subscription} from "rxjs";
import {ToastService} from "../../service/toast.service";
import {OrderService} from "../../service/order.service";

@Component({
  selector: 'app-my-basket',
  templateUrl: './my-basket.component.html',
  styleUrls: ['./my-basket.component.css']
})
export class MyBasketComponent implements OnInit, OnDestroy {
  products: Product[] | undefined;
  subscription: Subscription[] = [];

  constructor(
    private toastService: ToastService,
    private orderService: OrderService) {
  }

  ngOnInit() {
    this.getBasketProducts();
    // this.mockBasket();
  }

  ngOnDestroy() {
    this.subscription.forEach(s => s.unsubscribe());
  }

  private getBasketProducts() {
    // @ts-ignore
    this.subscriptions.push(this.orderService.getBasketProducts().subscribe((data: Product[]) => {
      this.products = data;
    }, (err: { error: { message: string; }; }) => {
      this.toastService.addError(err.error.message);
      console.log(err);
    }))
  }

  messageReceived(msg: any) {
    switch (msg.type) {
      case 'error': {
        this.toastService.addError(msg.message);
        break;
      }
      case 'info': {
        this.toastService.addInfo(msg.message);
        break;
      }
      case 'success': {
        this.toastService.addSuccess(msg.message);
        if (msg.message.indexOf('Product deleted') > -1) {
          this.getBasketProducts();
        }
        break;
      }
      case 'warning': {
        this.toastService.addWarning(msg.message);
        break;
      }
      default: {
        this.toastService.addInfo(msg.message);
        break;
      }
    }
  }

  private mockBasket() {
    this.products = [
      {
        id: 1,
        type: "Tip1",
        price: 20,
        image: '../../../assets/product-image-placeholder.jpg',
        orderQuantity: 2
      },
      {
        id: 2,
        type: "Tip2",
        price: 30,
        image: '../../../assets/product-image-placeholder.jpg',
        orderQuantity: 2
      },
      {
        id: 3,
        type: "Tip3",
        price: 40,
        image: '../../../assets/product-image-placeholder.jpg',
        orderQuantity: 1
      }
    ];
  }
}
