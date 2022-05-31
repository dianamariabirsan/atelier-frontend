import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeAdminComponent} from "./home-admin/home-admin.component";
import {OrdersManagementComponent} from "./orders-management/orders-management.component";
import {MyAccountComponent} from "../commons/my-account/my-account.component";


const routes: Routes = [
  {
    path: '',
    component: HomeAdminComponent,
    children: [
      {
        path: 'orders-management',
        component: OrdersManagementComponent
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
export class AdminRoutingModule {
}
