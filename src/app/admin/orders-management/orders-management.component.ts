import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {Order, Status} from "../../model/models";
import {Subscription} from "rxjs";
import {Router} from "@angular/router";
import {OrderService} from "../../service/order.service";
import {ToastService} from "../../service/toast.service";

@Component({
  selector: 'app-orders-management',
  templateUrl: './orders-management.component.html',
  styleUrls: ['./orders-management.component.css']
})
export class OrdersManagementComponent implements OnInit, OnDestroy {
  @Input() orders: Order[] = [];
  filterText: string | undefined;
  subscriptions: Subscription[] = [];
  @Output() messageToShow = new EventEmitter<any>();

  constructor(
    private router: Router,
    private orderService: OrderService,
    private toastService: ToastService) {
  }

  ngOnInit(): void {
    this.getAllOrders();
    this.mockData();
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
    if (this.filterText && this.filterText.length > 0) {
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
      orderStatus.push({id: propertyValue, name: propertyKey});
    }

    return orderStatus;
  }

  showMessage(message: string) {
    if (message === 'ok') {
      this.messageToShow.emit({type: 'success', message: 'Emails sent successfully'});
    } else if (message = 'delete') {
      this.messageToShow.emit({type: 'success', message: 'Course deleted successfully'});
    } else {
      this.messageToShow.emit({message, type: 'error'});
    }
  }

  editOrder() {
    this.router.navigate([`client/my-order-admin/${this.orders}`]);
  }

  deleteOrder(orderId: number) {
    // @ts-ignore
    this.subscriptions.push(this.orderService.deleteOrderById(orderId).subscribe((res) => {
      this.showMessage('delete');
    }, (err: { error: { message: string; }; }) => {
      this.showMessage(err.error.message);
      console.log(err);
    }))
    this.getAllOrders()
  }

  private mockData() {
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
