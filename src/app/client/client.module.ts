import {NgModule} from '@angular/core';
import {ClientRoutingModule} from "./client-routing.module";
import {ButtonModule} from "primeng/button";
import {ToastModule} from "primeng/toast";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SidebarModule} from "primeng/sidebar";
import {CommonModule} from "@angular/common";
import {HomeComponent} from "./home/home.component";
import {AllProductsComponent} from "./all-products/all-products.component";
import {MyBasketComponent} from "./my-basket/my-basket.component";
import {MyAccountComponent} from "./my-account/my-account.component";
import {MyOrdersComponent} from "./my-orders/my-orders.component";


@NgModule({
  declarations: [HomeComponent, AllProductsComponent, MyBasketComponent, MyOrdersComponent, MyAccountComponent],
  imports: [
    CommonModule,
    ClientRoutingModule,
    SidebarModule,
    ButtonModule,
    ToastModule,
    FormsModule,
    ReactiveFormsModule
  ],
})
export class ClientModule {
}
