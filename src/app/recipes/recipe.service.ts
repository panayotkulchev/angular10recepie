import {EventEmitter, Injectable} from '@angular/core';
import {Recipe} from './recipies.model';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping.list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe('Tasty Shicel',
      'This is simply a Tasty Shicel',
      'https://www.supichka.com/files/images/2980/resize_536_2000.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20)
      ]),
    new Recipe('Big fat burger',
      'Big fat burger description',
      'https://i1.wp.com/www.eatthis.com/wp-content/uploads/2018/02/xxxl-fatburger.jpg?resize=640%2C360&ssl=1',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Meat', 1)
      ])
  ];

  constructor(private shoppingListService: ShoppingListService) {
  }

  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]): void {
    this.shoppingListService.addIngrediets(ingredients);
  }
}
