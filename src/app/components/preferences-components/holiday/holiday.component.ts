import { Component, OnInit } from "@angular/core";
import { Holiday } from "src/app/rest-api/model/holiday";
import { HolidayService } from "src/app/rest-api/services/holiday.service";

@Component({
  selector: "app-holiday",
  templateUrl: "./holiday.component.html",
  styleUrls: ["./holiday.component.css"]
})
export class HolidayComponent implements OnInit {
  holidayList: Array<Holiday> = [];

  constructor(private holidayService: HolidayService) {
    this.holidayService
      .getHolidayListObs()
      .subscribe((holiday: Array<Holiday>) => {
        this.holidayList = holiday;
        this.holidayList = holiday.slice();
      });
  }

  ngOnInit() {}
}
