import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Holiday } from '../model/holiday';

@Injectable({
  providedIn: 'root'
})
export class HolidayService {

  private holidayList: Array<Holiday> = [];
  private holidayListObs = new BehaviorSubject<Array<Holiday>>([]);

  constructor() {
    this.holidayList = [
      { id: 1, name: 'plaża', picture: 'assets/img/holiday/1.jpg' },
      { id: 2, name: 'relaks', picture: 'assets/img/holiday/2.jpg' },
      { id: 3, name: 'zwiedzanie', picture: 'assets/img/holiday/3.jpg' },
      { id: 4, name: 'egzotyczne przygody', picture: 'assets/img/holiday/4.jpg' },
      { id: 5, name: 'spędzanie czasu w domu', picture: 'assets/img/holiday/5.jpg' },
      { id: 6, name: 'góry', picture: 'assets/img/holiday/6.jpg' },
      { id: 7, name: 'spędzanie czasu z przyjaciółmi', picture: 'assets/img/holiday/7.jpg' },
      { id: 8, name: 'sporty na świeżym powietrzu', picture: 'assets/img/holiday/8.jpg' }
    ];
    this.holidayListObs.next(this.holidayList);
  }
  getHolidayListObs(): Observable<Array<Holiday>> {
    return this.holidayListObs.asObservable();
  }
}
