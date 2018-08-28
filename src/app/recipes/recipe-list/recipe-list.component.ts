import { Component, OnInit } from '@angular/core';
import { RecipeModel } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes:RecipeModel[]=[
    new RecipeModel('A Test Recipe','This is test description','https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fcdn-image.foodandwine.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_2x%2Fpublic%2F1474468244%2Froasted-kabocha-with-maple-syrup-and-ginger-XL-RECIPE1116.jpg%3Fitok%3DS1k9seN7&w=800&q=85')
  ,new RecipeModel('A Test Recipe','This is test description','https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fcdn-image.foodandwine.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_2x%2Fpublic%2F1474468244%2Froasted-kabocha-with-maple-syrup-and-ginger-XL-RECIPE1116.jpg%3Fitok%3DS1k9seN7&w=800&q=85')

];
  constructor() { }

  ngOnInit() {
  }

}
