import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import {Recipe} from "../recipe";
import {RecipeService} from "../recipe.service";

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];   /*[
    new Recipe('Schnitzel', 'Very tasty', 'http://www.daringgourmet.com/wp-content/uploads/2014/03/Schnitzel-5.jpg', []),
    new Recipe('Summer Salad', 'Okayish', 'http://ohmyveggies.com/wp-content/uploads/2013/06/the_perfect_summer_salad.jpg', [])
  ];*/

  //@Output() recipeSelected = new EventEmitter<Recipe>();
  ////recipe = new Recipe('Dummy', 'Dummy', 'http://i.ebayimg.com/images/g/tKsAAOSwgY9Xf6m3/s-l1600.jpg');

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();

    this.recipeService.recipesChanged.subscribe(
      (recipes: Recipe[]) => this.recipes = recipes
    );
  }

  onSelected(recipe: Recipe){
    //this.recipeSelected.emit(recipe);
  }

}
