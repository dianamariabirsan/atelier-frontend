import {Component, OnDestroy, OnInit} from '@angular/core';
import {Order, Status} from "../../model/models";
import {Subscription} from "rxjs";
import {ToastService} from "../../service/toast.service";
import {OrderService} from "../../service/order.service";
import {StepState} from "@angular/cdk/stepper";

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent implements OnInit, OnDestroy {
  orders: Order[] = [];
  filterText: string | undefined;
  subscriptions: Subscription[] = [];
  statuses: Status[] = Object.keys(Status).map(v => v as Status);

  constructor(private orderService: OrderService,
              private toastService: ToastService) {
  }

  ngOnInit(): void {
    this.getAllOrders();
    // this.mockOrders();
  }

  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  private getAllOrders() {
    // @ts-ignore
    this.subscriptions.push(this.orderService.getAllOrders().subscribe((data: Order[]) => {
      this.orders = data;
      console.log(data);
    }, (err: { error: { message: string; }; }) => {
      this.toastService.addError(err.error.message);
      console.log(err);
    }))
  }

  getOrders() {
    if (this.filterText && this.filterText.length > 0){
      this.filter();
    } else {
      this.getAllOrders();
    }
  }

  filter() {
    // @ts-ignore
    this.subscriptions.push(this.orderService.filterOrders(this.filterText).subscribe((res: Order[]) => {
      this.orders = res;
    }, (err: { error: { message: string; }; }) => {
      this.toastService.addError(err.error.message);
      console.log(err);
    }));
  }

  reset() {
    this.filterText = '';
    this.getAllOrders();
  }

  getOrderStatus() {
    let orderStatus = []

    for (const [propertyKey, propertyValue] of Object.entries(Status)) {
      if (!Number.isNaN(Number(propertyKey))) {
        continue;
      }
      orderStatus.push({ id: propertyValue, name: propertyKey });
    }

    return orderStatus;
  }

  private mockOrders() {
    this.orders = [
      {
        id: 7,
        products: [
          {
            id: 3,
            type: 'jucarie',
            description: 'Trenulet de lemn pentru copii',
            price: 50,
            image: '../../assets/products/tren.png',
            orderQuantity: 0
          }
        ],
        clientId: 1,
        shippingAddress: 'Aleea Fabricii, 67, Cluj-Napoca',
        dateOfOrderAsTs: 1654625982,
        status: Status.APPROVED
      }
    ]
  }
}
