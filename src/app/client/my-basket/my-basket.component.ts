import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {AUTHENTICATED_USER, BASKET_PRODUCTS, Order, Product, Status} from "../../model/models";
import {Subscription} from "rxjs";
import {ToastService} from "../../service/toast.service";
import {OrderService} from "../../service/order.service";

@Component({
  selector: 'app-my-basket',
  templateUrl: './my-basket.component.html',
  styleUrls: ['./my-basket.component.css']
})
export class MyBasketComponent implements OnInit, OnDestroy {
  order: Order = {};
  subscription: Subscription[] = [];
  form = FormGroup;

  constructor(
    private toastService: ToastService,
    private orderService: OrderService) {
  }

  ngOnInit() {
    this.order = {shippingAddress: ''}
    this.getBasketProducts();
    // this.mockBasket();
  }

  ngOnDestroy() {
    this.subscription.forEach(s => s.unsubscribe());
  }

  private getBasketProducts() {
    // @ts-ignore
    const productsBasket = JSON.parse(localStorage.getItem(BASKET_PRODUCTS));
    this.order.products = productsBasket ? [...productsBasket] : [];
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
    this.order.products = [
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

  placeOrder() {
    this.prepareOrder()
    console.log("MB: " + JSON.stringify(this.order));

    if (this.order.products) {
      this.orderService.placeOrder(this.order).subscribe(() => {
        this.toastService.addSuccess('Ordered successfully!');
      }, (err: { error: { message: string; }; }) => {
        console.log(err);
        this.toastService.addError(err.error.message);
      })
    } else {
      this.toastService.addError("Cannot place order with empty basket!");
    }

    this.removeOrderFromLocalStorage();
  }

  private prepareOrder() {
    // @ts-ignore
    this.order.products = JSON.parse(localStorage.getItem(BASKET_PRODUCTS));
    // @ts-ignore
    let clientId = JSON.parse(localStorage.getItem(AUTHENTICATED_USER));
    if (!clientId) {
      clientId = 1;
    }
    this.order.clientId = clientId;
    this.order.status = Status.APPROVED;
    this.order.dateOfOrderAsTs = Date.now();
  }

  private removeOrderFromLocalStorage() {
    localStorage.removeItem(BASKET_PRODUCTS);
  }
}
