import { Component, OnInit ,Input,Output,EventEmitter } from '@angular/core';
import { RecipeModel } from '../../recipe.model'

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() item:RecipeModel;
  @Output() recipeSelected=new EventEmitter<void>();
  constructor() { }

  ngOnInit() {
  }
  onSelected(){
this.recipeSelected.emit();
  }

}
