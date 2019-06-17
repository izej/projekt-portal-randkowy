import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Films } from '../model/films';

@Injectable({
  providedIn: 'root'
})
export class FilmsService {

  private filmsList: Array<Films> = [];

  private filmsListObs = new BehaviorSubject<Array<Films>>([]);

  constructor() {
    this.filmsList = [
      {id: 1, name: 'akcji'},
      {id: 2, name: 'przygodowe'},
      {id: 3, name: 'animacje'},
      {id: 4, name: 'biograficzne'},
      {id: 5, name: 'komediowe'},
      {id: 6, name: 'kryminały'},
      {id: 7, name: 'dramaty'},
      {id: 8, name: 'fantastyczne'},
      {id: 9, name: 'historyczne'},
      {id: 10, name: 'horrory'},
      {id: 11, name: 'romanse'},
      {id: 12, name: 'science fiction'},
      {id: 13, name: 'westerny'},
      {id: 14, name: 'thrillery'},
      {id: 15, name: 'dokumentalne'}
    ];
    this.filmsListObs.next(this.filmsList);
  }
  getFilmsListObs(): Observable<Array<Films>> {
    return this.filmsListObs.asObservable();
  }
}
