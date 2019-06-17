import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';


@Component({
  selector: 'app-registry-home',
  templateUrl: './registry-home.component.html',
  styleUrls: ['./registry-home.component.scss']
})

export class RegistryHomeComponent implements OnInit {
  hide = true;
  constructor() { }
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);

  getErrorMessage() {
    return this.email.hasError('required') ? 'Musisz podać wartość' :
        this.email.hasError('email') ? 'Nieprawidłowy e-mail' :
        this.password.hasError('required') ? 'Musisz podać wartość' :
            '';
  }


  ngOnInit() {
  }

}


