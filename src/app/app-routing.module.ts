import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {HomeComponent} from "./client/home/home.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'client',
    loadChildren: () => import('./client/client.module').then(mod => mod.ClientModule),
    // canActivate: [ClientGuardService]
  }
  // {
  //   path: '**',
  //   redirectTo: ''  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
