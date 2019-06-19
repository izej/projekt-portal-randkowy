import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/rest-api/services/user.service';
import {MatTableDataSource} from '@angular/material/table';
import { DataSource } from '@angular/cdk/table';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {

  displayedColumns = [ 'avatar', 'name', 'surname'];
  users: any[];
  dataSource: MatTableDataSource<any>;

  constructor(private service: UserService) { }



  ngOnInit() {
    this.service.getUsers().subscribe(data => (this.users = data));
    this.dataSource = new MatTableDataSource(this.users);
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
