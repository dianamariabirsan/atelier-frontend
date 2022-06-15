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
import {MybasketCardComponent} from './mybasket-card/mybasket-card.component';
import {MatSelectModule} from "@angular/material/select";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {AllProductsComponent} from "./all-products/all-products.component";
import {RegisterComponent} from "./register/register.component";
import {MatCheckboxModule} from "@angular/material/checkbox";

@NgModule({
  declarations: [
    ProductCardComponent, HomeComponent, MybasketCardComponent, AllProductsComponent, RegisterComponent
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
    RouterModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    MatCheckboxModule,
  ],
  exports: [
    ProductCardComponent, HomeComponent, MybasketCardComponent
  ]
})
export class CommonsModule {
}
