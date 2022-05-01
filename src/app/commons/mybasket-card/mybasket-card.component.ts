import {Component, Input, OnInit} from '@angular/core';
import {Order} from "../../model/models";

@Component({
  selector: 'app-mybasket-card',
  templateUrl: './mybasket-card.component.html',
  styleUrls: ['./mybasket-card.component.css']
})
export class MybasketCardComponent implements OnInit {
  @Input() order: Order | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
