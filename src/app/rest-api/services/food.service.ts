import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Food } from '../model/food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

private foodList: Array<Food> = [];

private foodListObs = new BehaviorSubject<Array<Food>>([]);


  constructor() {
this.foodList = [
 {id: 1, name: 'grecka', picture: 'assets/img/food/1.jpg' },
 {id: 2, name: 'włoska', picture: 'assets/img/food/2.jpg'},
{id: 3, name: 'meksykańska', picture: 'assets/img/food/3.jpg'},
{id: 4, name: 'azjatycka', picture: 'assets/img/food/4.jpg'},
{id: 5, name: 'francuska', picture: 'assets/img/food/5.jpg'},
{id: 6, name: 'hinduska', picture: 'assets/img/food/6.jpg'},
{id: 7, name: 'lokalne specjały', picture: 'assets/img/food/7.jpg'},
{id: 8, name: 'wege', picture: 'assets/img/food/8.jpg'}

];
this.foodListObs.next(this.foodList);
  }

getFoodListObs(): Observable<Array<Food>> {
  return this.foodListObs.asObservable();
}


}
