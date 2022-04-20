import {NgModule} from '@angular/core';
import {ProductCardComponent} from "./product-card/product-card.component";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {TooltipModule} from "primeng/tooltip";
import {ToastModule} from "primeng/toast";
import {ButtonModule} from "primeng/button";
import {DialogModule} from "primeng/dialog";
import {TableModule} from "primeng/table";
import {HomeComponent} from "./home/home.component";
import {SidebarModule} from "primeng/sidebar";
import {RouterModule} from "@angular/router";
import { OrderCardComponent } from './order-card/order-card.component';

@NgModule({
  declarations: [
    ProductCardComponent,HomeComponent, OrderCardComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    DialogModule,
    TooltipModule,
    TableModule,
    ToastModule,
    SidebarModule,
    RouterModule
  ],
    exports: [
        ProductCardComponent, HomeComponent, OrderCardComponent
    ]
})
export class CommonsModule {
}
