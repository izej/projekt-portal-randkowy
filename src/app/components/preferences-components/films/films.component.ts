import { Component, OnInit } from '@angular/core';
import { FilmsService } from 'src/app/rest-api/services/films.service';
import { Films } from 'src/app/rest-api/model/films';


@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {

 filmsList: Array<Films> = [];

  constructor(private filmsService: FilmsService) {
    this.filmsService.getFilmsListObs().subscribe((films: Array<Films>) => {
      this.filmsList = films;
      this.filmsList = films.slice();
    });
  }

  ngOnInit() {
  }

}
