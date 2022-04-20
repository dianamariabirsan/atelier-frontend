import {Component, Input, OnInit} from '@angular/core';
import {Order} from "../../model/models";

@Component({
  selector: 'app-order-card',
  templateUrl: './order-card.component.html',
  styleUrls: ['./order-card.component.css']
})
export class OrderCardComponent implements OnInit {
  @Input() order: Order | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
