import {NgModule} from '@angular/core';
import {AdminRoutingModule} from "./admin-routing.module";
import {ButtonModule} from "primeng/button";
import {ToastModule} from "primeng/toast";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SidebarModule} from "primeng/sidebar";
import {CommonModule} from "@angular/common";
import {CommonsModule} from "../commons/commons.module";
import {HttpClient} from "@angular/common/http";
import {ProductService} from "../service/product.service";
import {MatButtonModule} from "@angular/material/button";
import {TableModule} from "primeng/table";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatSelectModule} from "@angular/material/select";
import {HomeAdminComponent} from './home-admin/home-admin.component';
import {OrdersManagementComponent} from "./orders-management/orders-management.component";


@NgModule({
  declarations: [HomeAdminComponent, OrdersManagementComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
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
export class AdminModule {
}
