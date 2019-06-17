import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/rest-api/services/user.service';

@Component({
  selector: 'app-home-user',
  templateUrl: './home-user.component.html',
  styleUrls: ['./home-user.component.scss']
})
export class HomeUserComponent implements OnInit {
  users: any[];
  panelOpenState = false;
  constructor(private service: UserService) {}

  ngOnInit() {
    this.service.getUsers().subscribe(data => (this.users = data));
  }
}
