import {Component, OnDestroy, OnInit} from '@angular/core';
import {Order, Status} from "../../model/models";
import {Subscription} from "rxjs";
import {ToastService} from "../../service/toast.service";
import {OrderService} from "../../service/order.service";

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent implements OnInit, OnDestroy {
  orders: Order[] = [];
  filterText: string | undefined;
  subscriptions: Subscription[] = [];

  constructor(private orderService: OrderService,
              private toastService: ToastService) {
  }

  ngOnInit(): void {
    this.getAllOrders();

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

  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  private getAllOrders() {
    // @ts-ignore
    this.subscriptions.push(this.orderService.getAllOrders().subscribe((data: Order[]) => {
      this.orders = data;
      // this.orders.forEach((course) => {
      //   this.subscriptions.push(this.coursesService.getNumberStudentsForCourse(course.id).subscribe(
      //     (res: { studentsNumber: number }) => {
      //       const id = this.courses.findIndex((c) => c.id === course.id);
      //       this.courses[id].studentsSignedIn = res.studentsNumber;
      //     },
      //     (err) => {
      //       this.toastService.addError(err.error.message);
      //       console.log(err);
      //     }
      //   ))
      // });
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
}
