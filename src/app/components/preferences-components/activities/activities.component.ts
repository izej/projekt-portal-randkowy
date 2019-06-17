import { Component, OnInit } from '@angular/core';
import { Activities } from 'src/app/rest-api/model/activities';
import { ActivitiesService } from 'src/app/rest-api/services/activities.service';


@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent implements OnInit {

  activitiesList: Array<Activities> = [];

  constructor(private activitiesService: ActivitiesService) {
    this.activitiesService.getActivitiesListObs().subscribe((activities: Array<Activities>) => {
      this.activitiesList = activities;
      this.activitiesList = activities.slice();
    });
  }

  ngOnInit() {
  }

}
