import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/rest-api/services/user.service';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.scss']
})
export class ProfilesComponent implements OnInit {
  users: any[];
  panelOpenState = false;

  constructor(private service: UserService) {}

  ngOnInit() {
    this.service.getUsers().subscribe(data => (this.users = data));
  }
}
