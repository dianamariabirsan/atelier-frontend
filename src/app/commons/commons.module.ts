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

@NgModule({
  declarations: [
    ProductCardComponent, HomeComponent, MybasketCardComponent,
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
    MatIconModule
  ],
  exports: [
    ProductCardComponent, HomeComponent, MybasketCardComponent
  ]
})
export class CommonsModule {
}
