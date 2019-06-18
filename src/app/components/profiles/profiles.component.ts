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

  pageIndex = 0;
  pageSize = 9;
  lowValue = 0;
  highValue = 9;
  constructor(private service: UserService) {}

  ngOnInit() {
    this.service.getUsers().subscribe(data => (this.users = data));
  }
  getPaginatorData(event) {
    console.log(event);
    if (event.pageIndex === this.pageIndex + 1) {
      this.lowValue = this.lowValue + this.pageSize;
      this.highValue = this.highValue + this.pageSize;
    } else if (event.pageIndex === this.pageIndex - 1) {
      this.lowValue = this.lowValue - this.pageSize;
      this.highValue = this.highValue - this.pageSize;
    }
    this.pageIndex = event.pageIndex;
  }






}
