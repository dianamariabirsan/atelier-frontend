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
        id: 1,
        client: {
          id: 1,
          name: 'Pop Maria',
          email: 'pop_maria@yahoo.com',
          phoneNumber: '0756475839'
        },
        status: Status.PENDING
      },
      {
        id: 2,
        client: {
          id: 2,
          name: 'Pop Ion',
          email: 'pop_ion@yahoo.com',
          phoneNumber: '0756475839'
        },
        status: Status.ON_SHIPPING
      }
    ]
  }
}
