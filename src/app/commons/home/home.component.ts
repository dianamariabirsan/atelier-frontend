import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  logoImage: string = '../../../assets/logo.png'

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  logout() {

  }
}
