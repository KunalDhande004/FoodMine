import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FoodPageComponent } from './food-page/food-page.component';
import { CartPageComponent } from './cart-page/cart-page.component';
export const routes: Routes = [
  { path: '', component: HomeComponent }, //home route link
  { path: 'search/:searchTerm', component: HomeComponent }, //search route link
  { path: 'tag/:tag', component: HomeComponent }, //tag route link
  { path: 'food/:id', component: FoodPageComponent }, //foodpage route link
  { path: 'cart-page', component: CartPageComponent }, //cart route link
];
