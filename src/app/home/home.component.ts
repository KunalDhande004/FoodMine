import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FoodService } from '../services/food/food.service';
import { Food } from '../shared/models/food';
import { SearchComponent } from '../search/search.component';
import { TagsComponent } from '../tags/tags.component';
import { NotFoundComponent } from '../not-found/not-found.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule,
    SearchComponent,
    TagsComponent,
    NotFoundComponent,
  ],

  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  foods: Food[] = [];
  constructor(
    private foodService: FoodService,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const searchTerm = params['searchTerm'];
      const tag = params['tag'];
      if (searchTerm) {
        this.foods = this.foodService.getAllFoodBySearchTerm(searchTerm);
      } else if (tag) {
        this.foods = this.foodService.getAllFoodsByTag(tag);
      } else {
        this.foods = this.foodService.getAll();
      }
    });
  }
}
