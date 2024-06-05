import { Injectable } from '@angular/core';
import { Cart } from '../../shared/models/Cart';
import { CartItem } from '../../shared/models/CartItem';
import { Food } from '../../shared/models/food';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: Cart = new Cart();
  addToCart(food: Food): void {
    let cartItem = this.cart.item.find((item) => item.food.id === food.id);
    if (cartItem) {
      this.changeQuntity(food.id, cartItem.quntity + 1);
      return;
    }
    this.cart.item.push(new CartItem(food));
  }
  removeFromCart(foodId: number): void {
    this.cart.item = this.cart.item.filter((item) => item.food.id != foodId);
  }
  changeQuntity(foodId: number, quntity: number) {
    let cartItem = this.cart.item.find((item) => item.food.id === foodId);
    if (!cartItem) return;
    cartItem.quntity = quntity;
  }

  getCart(): Cart {
    return this.cart;
  }
}
