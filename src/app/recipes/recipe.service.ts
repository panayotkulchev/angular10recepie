import {EventEmitter} from '@angular/core';
import {Recipe} from './recipies.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test',
      'https://www.seriouseats.com/2019/07/20190618-grilled-turkish-chicken-wings-vicky-wasik-13.jpg'),
    new Recipe('Another Test Recipe', 'This is simply a test',
      'https://www.seriouseats.com/2019/07/20190618-grilled-turkish-chicken-wings-vicky-wasik-13.jpg')
  ];

  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }
}
