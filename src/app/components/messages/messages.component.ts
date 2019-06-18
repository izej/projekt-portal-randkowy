import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/rest-api/services/user.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {
  users: any[];
  panelOpenState = false;

  constructor(private service: UserService) { }

  ngOnInit() {
    this.service.getUsers().subscribe(data => (this.users = data));
  }

}
