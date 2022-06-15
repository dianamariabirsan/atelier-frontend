import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeClientComponent} from "./home-client/home-client.component";
import {AllProductsComponent} from "../commons/all-products/all-products.component";
import {MyOrdersComponent} from "./my-orders/my-orders.component";
import {MyBasketComponent} from "./my-basket/my-basket.component";
import {MyAccountComponent} from "../commons/my-account/my-account.component";


const routes: Routes = [
  {
    path: '',
    component: HomeClientComponent,
    children: [
      {
        path: 'products',
        component: AllProductsComponent
      },
      {
        path: 'orders',
        component: MyOrdersComponent
      },
      {
        path: 'basket',
        component: MyBasketComponent
      },
      {
        path: 'account',
        component: MyAccountComponent
      },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule {
}
