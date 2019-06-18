import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  hide = true;
  constructor() { }
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);
  ngOnInit() {
  }

  getErrorMessage() {
    return this.email.hasError('required') ? 'Musisz podać wartość' :
        this.email.hasError('email') ? 'Nieprawidłowy e-mail' :
        this.password.hasError('required') ? 'Musisz podać wartość' :
            '';
  }

}
