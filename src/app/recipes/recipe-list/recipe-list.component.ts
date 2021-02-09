import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from '../recipies.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test',  'https://www.seriouseats.com/2019/07/20190618-grilled-turkish-chicken-wings-vicky-wasik-13.jpg'),
    new Recipe('A Test Recipe', 'This is simply a test',  'https://www.seriouseats.com/2019/07/20190618-grilled-turkish-chicken-wings-vicky-wasik-13.jpg')];
  constructor() { }

  ngOnInit(): void {
  }
  onRecipeSelected(recipeEl: Recipe) {
    this.recipeWasSelected.emit(recipeEl);
  }
}
