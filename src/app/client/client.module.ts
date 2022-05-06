import {NgModule} from '@angular/core';
import {ClientRoutingModule} from "./client-routing.module";
import {ButtonModule} from "primeng/button";
import {ToastModule} from "primeng/toast";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SidebarModule} from "primeng/sidebar";
import {CommonModule} from "@angular/common";
import {HomeClientComponent} from "./home-client/home-client.component";
import {AllProductsComponent} from "./all-products/all-products.component";
import {MyBasketComponent} from "./my-basket/my-basket.component";
import {MyAccountComponent} from "./my-account/my-account.component";
import {MyOrdersComponent} from "./my-orders/my-orders.component";
import {CommonsModule} from "../commons/commons.module";
import {HttpClient} from "@angular/common/http";
import {ProductService} from "../service/product.service";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [HomeClientComponent, AllProductsComponent, MyBasketComponent, MyOrdersComponent, MyAccountComponent],
    imports: [
        CommonModule,
        ClientRoutingModule,
        SidebarModule,
        ButtonModule,
        ToastModule,
        FormsModule,
        ReactiveFormsModule,
        CommonsModule,
        MatButtonModule
    ],
  providers: [HttpClient, ProductService]
})
export class ClientModule {
}
