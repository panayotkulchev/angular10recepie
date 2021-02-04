import {Component, Input, OnInit, EventEmitter, Output} from '@angular/core';
import {Recipe} from '../../recipies.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  @Output() recipeSelectedEvent = new EventEmitter<void>();
  constructor() { }

  ngOnInit(): void {
  }
  selectRecipe() {
    this.recipeSelectedEvent.emit();
  }
}
