import { Component, OnInit } from "@angular/core";
import { Food } from "src/app/rest-api/model/food";
import { FoodService } from "src/app/rest-api/services/food.service";

@Component({
  selector: "app-food",
  templateUrl: "./food.component.html",
  styleUrls: ["./food.component.css"]
})
export class FoodComponent implements OnInit {
  foodList: Array<Food> = [];

  constructor(private foodService: FoodService) {
    this.foodService.getFoodListObs().subscribe((food: Array<Food>) => {
      this.foodList = food;
      this.foodList = food.slice();
    });
  }

  ngOnInit() {}
}
