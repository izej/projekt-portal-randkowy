import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Books } from '../model/books';


@Injectable({
  providedIn: 'root'
})
export class BooksService {

private booksList: Array<Books> = [];

private booksListObs = new BehaviorSubject<Array<Books>>([]);


  constructor() {
    this.booksList = [
      {id: 1, name: 'akcja i przygoda'},
      {id: 2, name: 'literatura współczesna'},
      {id: 3, name: 'kryminał'},
      {id: 4, name: 'fantasy'},
      {id: 5, name: 'horror'},
      {id: 6, name: 'religia i duchowość'},
      {id: 7, name: 'science fiction'},
      {id: 8, name: 'thriller'},
      {id: 9, name: 'romans'},
      {id: 10, name: 'literatura psychologiczna'},
      {id: 11, name: 'literatura edukacyjna'}
    ];
    this.booksListObs.next(this.booksList);
  }
  getBooksListObs(): Observable<Array<Books>> {
    return this.booksListObs.asObservable();
  }
}
