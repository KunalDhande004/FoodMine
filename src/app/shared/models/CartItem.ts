import { Food } from './food';

export class CartItem {
  food: Food;
  constructor(food: Food) {
    this.food = food;
  }
  quntity: number = 1;

  get price(): number {
    return this.food.price * this.quntity;
  }
}
