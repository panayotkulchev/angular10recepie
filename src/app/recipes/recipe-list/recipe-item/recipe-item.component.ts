import {Component, Input, OnInit, EventEmitter, Output} from '@angular/core';
import {Recipe} from '../../recipies.model';
import {RecipeService} from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
  }
  selectRecipe(): void {
    // this.recipeSelectedEvent.emit();
    this.recipeService.recipeSelected.emit(this.recipe);
  }
}
