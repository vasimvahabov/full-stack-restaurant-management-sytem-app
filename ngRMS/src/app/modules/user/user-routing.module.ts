import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdersComponent } from './components/orders/orders.component';
import { UserComponent } from './user.component';

const routes: Routes = [ 
  {
    path:'', 
    component:UserComponent,
    children:[
      {
        path:'',
        component:OrdersComponent,
      },
      {
        path:'**',
        redirectTo:''
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
