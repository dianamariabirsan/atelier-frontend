import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {AllProductsComponent} from "./all-products/all-products.component";
import {MyOrdersComponent} from "./my-orders/my-orders.component";
import {MyBasketComponent} from "./my-basket/my-basket.component";
import {MyAccountComponent} from "./my-account/my-account.component";


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
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
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule {
}
