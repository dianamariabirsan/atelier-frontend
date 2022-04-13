import {NgModule} from '@angular/core';
import {ProductCardComponent} from "./product-card/product-card.component";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {TooltipModule} from "primeng/tooltip";
import {ToastModule} from "primeng/toast";
import {ButtonModule} from "primeng/button";
import {DialogModule} from "primeng/dialog";
import {TableModule} from "primeng/table";

@NgModule({
  declarations: [
    ProductCardComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    DialogModule,
    TooltipModule,
    TableModule,
    ToastModule
  ],
  exports: [
    ProductCardComponent,
  ]
})
export class CommonsModule {
}
