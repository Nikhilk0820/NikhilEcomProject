import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartPageComponent } from './cart-page/cart-page.component';
import { HomeComponent } from './home/home.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { UserAuthComponent } from './user-auth/user-auth.component';
import { EmptyComponent } from './empty/empty.component';

const routes: Routes = [
  {
    component: HomeComponent,
    path: '',
  },
  {
    component: EmptyComponent,
    path: 'empty',
  } ,{
    component: ProductDetailsComponent,
    path: 'details/:productId'
  }, {
    component: UserAuthComponent,
    path: 'user-auth'
  }, {
    component: CartPageComponent,
    path: 'cart-page'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
