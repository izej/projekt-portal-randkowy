import { Component, OnInit } from '@angular/core';
import { Books } from 'src/app/rest-api/model/books';
import { BooksService } from 'src/app/rest-api/services/books.service';


@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  booksList: Array<Books> = [];

  constructor(private booksService: BooksService) {
    this.booksService.getBooksListObs().subscribe((books: Array<Books>) => {
      this.booksList = books;
      this.booksList = books.slice();
    });
   }

  ngOnInit() {
  }

}
