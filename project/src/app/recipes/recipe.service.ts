import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      '1',
      'Normal Pancakes',
      'Boring normal pancakes',
      'http://ghk.h-cdn.co/assets/16/38/980x490/landscape-1474822198-how-to-make-pancakes.jpg',
      [
        new Ingredient('Milk', 1),
        new Ingredient('Rainbow', 10),
        new Ingredient('Love', 9)
      ]),
    new Recipe(
      '2',
      'Cool Pancakes',
      'Cool unique pancakes',
      'http://ghk.h-cdn.co/assets/16/38/980x490/landscape-1474822198-how-to-make-pancakes.jpg',
      [
        new Ingredient('Flour', 1),
        new Ingredient('Hope', 20),
        new Ingredient('Pure luck', 15)
      ])
  ];

  constructor(private slService: ShoppingListService) { }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(id: string): Recipe {
    return this.recipes[id];
  }

  addToShoppingList(ingredients: Ingredient[]) {
    ingredients.forEach(ingredient => {
      this.slService.addItem(ingredient);
    });
  }
}
