import { AuthService } from "src/app/auth/auth.service";
import { HolidayService } from "./holiday.service";
import { MusicService } from "./music.service";
import { UserService } from "./user.service";
import { FoodService } from "./food.service";
import { AuthGuard } from "src/app/auth/auth.guard";
import { ActivitiesService } from "./activities.service";
import { BooksService } from "./books.service";
import { FilmsService } from "./films.service";

export const services = [
  AuthService,
  AuthGuard,
  ActivitiesService,
  BooksService,
  FilmsService,
  FoodService,
  HolidayService,
  MusicService,
  UserService
];
