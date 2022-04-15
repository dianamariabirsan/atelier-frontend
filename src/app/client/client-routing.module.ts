import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeClientComponent} from "./home-client/home-client.component";
import {AllProductsComponent} from "./all-products/all-products.component";


const routes: Routes = [
  {
    path: '',
    component: HomeClientComponent,
    children: [
      {
        path: 'products',
        component: AllProductsComponent
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
