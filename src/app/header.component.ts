import {Component, OnInit, OnDestroy} from '@angular/core';
import {RecipeService} from "./recipes/recipe.service";
import {Subscription} from "rxjs/Rx";

@Component({
  selector: 'rb-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit, OnDestroy {
  private subscription: Subscription;

  constructor(private recipeService: RecipeService) {
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onStore() {
    this.subscription = this.recipeService.storeData().subscribe(
      data => console.log(data),
      error => console.log(error)
    );
  }

  onFetch() {
    this.recipeService.fetchData();
  }
}
