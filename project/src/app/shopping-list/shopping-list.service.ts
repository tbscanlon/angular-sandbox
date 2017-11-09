import { Injectable, EventEmitter } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';

@Injectable()
export class ShoppingListService {
  ingredientAdded = new EventEmitter<Ingredient[]>();

  private _ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ];

  constructor() { }

  addItem(ingredient: Ingredient) {
    this._ingredients.push(ingredient);
    this.ingredientAdded.emit(this.ingredients.slice());
  }

  get ingredients() {
    return this._ingredients.slice();
  }
}
