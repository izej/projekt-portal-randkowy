import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Activities } from '../model/activities';


@Injectable({
  providedIn: 'root'
})
export class ActivitiesService {

private activitiesList: Array<Activities> = [];

private activitiesListObs = new BehaviorSubject<Array<Activities>>([]);

  constructor() {
    this.activitiesList = [
      {id: 1, name: 'taniec', picture: 'assets/img/activities/1.jpg'},
      {id: 2, name: 'siatkówka', picture: 'assets/img/activities/2.jpg'},
      {id: 3, name: 'pływanie', picture: 'assets/img/activities/3.jpg'},
      {id: 4, name: 'koszykówka', picture: 'assets/img/activities/4.jpg'},
      {id: 5, name: 'badminton', picture: 'assets/img/activities/5.jpg'},
      {id: 6, name: 'sporty walki', picture: 'assets/img/activities/6.jpg'},
      {id: 7, name: 'jazda na rolkach', picture: 'assets/img/activities/7.jpg'},
      {id: 8, name: 'aerobik', picture: 'assets/img/activities/8.jpg'},
      {id: 9, name: 'jazda rowerem', picture: 'assets/img/activities/9.jpg'},
      {id: 10, name: 'narciarstwo', picture: 'assets/img/activities/10.jpg'},
      {id: 11, name: 'piłka nożna', picture: 'assets/img/activities/11.jpg'},
      {id: 12, name: 'jazda konna', picture: 'assets/img/activities/12.jpg'}

    ];
    this.activitiesListObs.next(this.activitiesList);
  }
  getActivitiesListObs(): Observable<Array<Activities>> {
    return this.activitiesListObs.asObservable();
  }
}
