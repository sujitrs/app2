import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipes.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
 recipes: Recipe[] =[
   new Recipe('Gulabjamun', 'Hot Milk with Sugar syrup',
 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5e7JKkGaP7eALFuxdUnvfPLwVupMJ1lqubkTeSs2_4uWTnH-uCw'),
 new Recipe('Barfi', 'Mango Pulp',
 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkxTHuAT1iB8BsIg2OsGeQPW3KS8rsF8ZsYWadwUS4nXdpWu3a_Q'
];
  constructor() { }

  ngOnInit() {
  }

}
