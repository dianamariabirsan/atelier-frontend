import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {User} from "../model/models";
import {map} from "rxjs";
import {userLogout, userSaveAccountSettings} from "./url";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  httpHeaders: HttpHeaders;

  constructor(private http: HttpClient) {
    this.httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': '*/*',
      'Access-Control-Allow-Origin': '*'
    });
  }

  saveAccountSettings(user: User) {
    const obj = JSON.parse(JSON.stringify(user));
    delete obj.picture;
    delete obj.id;
    delete obj.role;
    this.httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.put(userSaveAccountSettings, JSON.stringify(obj), { headers: this.httpHeaders });
  }

  public setCurrentUserInLocalStorage(obj: User) {
    localStorage.setItem('currentUser', JSON.stringify(obj));
  }

  logout() {
    return this.http.get(userLogout, { headers: this.httpHeaders }).pipe(
      map((resp: any) => {
        this.removeUserFromLocalStorage();
        return resp;
      })
    );
  }

  removeUserFromLocalStorage() {
    localStorage.removeItem('currentUser');
  }

  getCurrentUser(): User | undefined {
    // @ts-ignore
    const obj = JSON.parse(localStorage.getItem('currentUser'));
    if (obj) {
      return obj;
    }
    return undefined;
  }
}
