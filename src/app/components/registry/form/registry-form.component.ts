import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import {startWith, map} from 'rxjs/operators';

export interface CityGroup {
  letter: string;
  names: string[];
}

export const _filter = (opt: string[], value: string): string[] => {
  const filterValue = value.toLowerCase();

  return opt.filter(item => item.toLowerCase().indexOf(filterValue) === 0);
};


@Component({
  selector: 'app-form',
  templateUrl: './registry-form.component.html',
  styleUrls: ['./registry-form.component.scss']
})
export class RegistryFormComponent implements OnInit {

  date = new FormControl(new Date());
  serializedDate = new FormControl((new Date()).toISOString());
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourthFormGroup: FormGroup;
  fifthFormGroup: FormGroup;
  sixthFormGroup: FormGroup;
  seventhFormGroup: FormGroup;

  cityForm: FormGroup = this._formBuilder.group({
    cityGroup: '',
  });

  cityGroups: CityGroup[] = [{
    letter: 'A',
    names: ['Aleksandrów Kujawski', 'Aleksandrów Łódzki', 'Alwernia', 'Annopol']
  }, {
    letter: 'B',
    names: ['Bydgoszcz', 'Białystok', 'Bielsko-Biała', 'Bytom']
  }, {
    letter: 'C',
    names: ['Częstochowa', 'Chorzów']
  },
   {
    letter: 'D',
    names: ['Dąbrowa Górnicza']
  }, {
    letter: 'E',
    names: ['Elbrąg']
  },
  {
    letter: 'F',
    names: ['Frombork', 'Frampol']
  }, {
    letter: 'G',
    names: ['Gdańsk', 'Gdynia', 'Gliwice', 'Gorzów Wielkopolski']
  }, {
    letter: 'H',
    names: ['Hel']
  }, {
    letter: 'I',
    names: ['Iława', 'Iłowa', 'Inowrocław', 'Iłża']
  }, {
    letter: 'K',
    names: ['Kraków', 'Katowice', 'Kielce', 'Koszalin', 'Kalisz']
  }, {
    letter: 'L',
    names: ['Lublin']
  },
  {
    letter: 'Ł',
    names: ['Łódź']
  }, {
    letter: 'M',
    names: ['Maków Mazowiecki', 'Malbork', 'Małogoszcz', 'Mielec',
      'Mielno', 'Młynary', 'Mińsk Mazowiecki', 'Myślenice']
  }, {
    letter: 'N',
    names: ['Nałęczów', 'Namysłów', 'Nowa Słupia', 'Nowe Brzesko',
      'Nowogard', 'Nowogród', 'Nowy Sącz', 'Nysa']
  }, {
    letter: 'O',
    names: ['Olsztyn', 'Opole']
  }, {
    letter: 'P',
    names: ['Poznań', 'Płock']
  }, {
    letter: 'R',
    names: ['Radom', 'Rzeszów', 'Rybnik', 'Ruda Śląska']
  }, {
    letter: 'S',
    names: ['Szczecin', 'Sosnowiec']
  }, {
    letter: 'T',
    names: ['Toruń', 'Tychy', 'Tarnów']
  }, {
    letter: 'U',
    names: ['Ustka']
  },  {
    letter: 'W',
    names: ['Warszawa', 'Wrocław', 'Wałbrzych', 'Włocławek'],
  }, {
      letter: 'Z',
      names: ['Zabrze', 'Zielona Góra']
  }];

  cityGroupOptions: Observable<CityGroup[]>;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      thirdCtrl: ['', Validators.required]
    });
    this.fourthFormGroup = this._formBuilder.group({
      fourthCtrl: ['', Validators.required]
    });
    this.fifthFormGroup = this._formBuilder.group({
      fifthCtrl: ['', Validators.required]
    });
    this.sixthFormGroup = this._formBuilder.group({
      fifthCtrl: ['', Validators.required]
    });
    this.seventhFormGroup = this._formBuilder.group({
      fifthCtrl: ['', Validators.required]
    });


    this.cityGroupOptions = this.cityForm.get('cityGroup')!.valueChanges
    .pipe(
      startWith(''),
      map(value => this._filterGroup(value))
    );
  }

  private _filterGroup(value: string): CityGroup[] {
    if (value) {
      return this.cityGroups
        .map(group => ({letter: group.letter, names: _filter(group.names, value)}))
        .filter(group => group.names.length > 0);
    }

    return this.cityGroups;
  }

  formatLabel(value: number | null) {
    if (!value) {
      return 0;
    }

    if (value > 0) {
      return value;
    }

    return value;
  }

}
