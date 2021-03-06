import {NgModule} from '@angular/core';
import {ClientRoutingModule} from "./client-routing.module";
import {ButtonModule} from "primeng/button";
import {ToastModule} from "primeng/toast";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SidebarModule} from "primeng/sidebar";
import {CommonModule} from "@angular/common";
import {HomeClientComponent} from "./home-client/home-client.component";
import {MyBasketComponent} from "./my-basket/my-basket.component";
import {MyAccountComponent} from "../commons/my-account/my-account.component";
import {MyOrdersComponent} from "./my-orders/my-orders.component";
import {CommonsModule} from "../commons/commons.module";
import {HttpClient} from "@angular/common/http";
import {ProductService} from "../service/product.service";
import {MatButtonModule} from "@angular/material/button";
import {TableModule} from "primeng/table";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatSelectModule} from "@angular/material/select";


@NgModule({
  declarations: [HomeClientComponent, MyBasketComponent, MyOrdersComponent, MyAccountComponent],
    imports: [
        CommonModule,
        ClientRoutingModule,
        SidebarModule,
        ButtonModule,
        ToastModule,
        FormsModule,
        ReactiveFormsModule,
        CommonsModule,
        MatButtonModule,
        TableModule,
        MatCheckboxModule,
        MatSelectModule
    ],
  providers: [HttpClient, ProductService]
})
export class ClientModule {
}
