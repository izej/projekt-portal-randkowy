import { Injectable } from "@angular/core";
import { of, Observable } from "rxjs";
import { USERS } from "../mock/users";

@Injectable({
  providedIn: "root"
})
export class UserService {
  constructor() {}

  getUsers(): Observable<any> {
    return of(USERS);
  }
}
