import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  user = {
    name: 'Renata',
    surname: 'Test',
    province: 'Sandomierskie',
    country: 'Polska',
    about: 'Jestem cudowna i piękna i pachnę jak kwiatuszek',
    eye: 'niebieskie',
    age: 21,
    education: 'licencjat',
    proffesion: 'Nauczyciel zajęć wyrównawczych',
    growth: '160cm',
    figure: 'szczupła',
    religion: 'katolik',
    hair: 'brązowe'
  };


  constructor() { }

  ngOnInit() {
  }

}
