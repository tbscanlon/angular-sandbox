import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe(
      'A test Recipe',
      'Just another test recipe',
      'http://ghk.h-cdn.co/assets/16/38/980x490/landscape-1474822198-how-to-make-pancakes.jpg'),
      new Recipe(
        'Normal Pancakes',
        'Boring normal pancakes',
        'http://ghk.h-cdn.co/assets/16/38/980x490/landscape-1474822198-how-to-make-pancakes.jpg'),
      new Recipe(
        'Cool Pancakes',
        'Cool unique pancakes',
        'http://ghk.h-cdn.co/assets/16/38/980x490/landscape-1474822198-how-to-make-pancakes.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
