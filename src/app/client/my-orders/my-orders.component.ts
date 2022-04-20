import {Component, OnInit} from '@angular/core';
import {Order} from "../../model/models";

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent implements OnInit {
  orders: Order[] | undefined;
  filterText: string | undefined;

  constructor() {
  }

  ngOnInit(): void {

    this.orders = [
      {
        id: 1,
      },
      {
        id: 2,
      },
      {
        id: 3,
      },
    ]
  }

  filter() {

  }

  reset() {
    this.filterText = '';
  }
}
