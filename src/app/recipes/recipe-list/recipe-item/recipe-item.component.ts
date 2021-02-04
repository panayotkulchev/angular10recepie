import {Component, Input, OnInit, Output} from '@angular/core';
import {Recipe} from '../../recipies.model';
import {EventEmitter} from 'events';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  @Output() recipeSelectedEvent = new EventEmitter<Recipe>();
  constructor() { }

  ngOnInit(): void {
  }
  selectRecipe(recipe: Recipe) {
    this.recipeSelectedEvent.emit(recipe);
  }
}
