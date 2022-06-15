import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Role, User, UserCredentials} from "../model/models";
import {map} from "rxjs";
import {userLogout, userRegister, userSaveAccountSettings} from "./url";

const users = [{
  email: 'ana.pop@yahoo.com',
  name: 'Pop Ana',
  phoneNumber: '0758576857',
  password: 'popana',
  role: Role.CLIENT
}, {
  email: 'admin@yahoo.com',
  name: 'admin',
  phoneNumber: '0758576857',
  password: 'admin',
  role: Role.ADMIN
}]

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
    delete obj.id;
    delete obj.role;
    this.httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.put(userSaveAccountSettings, JSON.stringify(obj), { headers: this.httpHeaders });
  }

  register(user: User) {
    const obj = JSON.parse(JSON.stringify(user));
    delete obj.id;
    delete obj.role;
    this.httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.post(userRegister, JSON.stringify(obj), { headers: this.httpHeaders });
  }

  public setCurrentUserInLocalStorage(obj: User) {
    localStorage.setItem('currentUser', JSON.stringify(obj));
  }

  login(credentials: UserCredentials): boolean {
    const user = this.getUser(credentials);
    if (user) {
      this.setCurrentUserInLocalStorage(user)
      return true;
    }
    return false;
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

  getUser(credentials: UserCredentials): User | undefined {
    return users.find(u => u.email === credentials.email && u.password === credentials.password)
  }

  getCurrentUser(): User | undefined {
    // @ts-ignore
    const obj = JSON.parse(localStorage.getItem('currentUser'));
    if (obj) {
      return obj;
    }
    return undefined;
  }


  isAuthenticated(): boolean {
    const user = this.getCurrentUser();
    if (user) {
      return true;
    } else{
      return false;
    }
  }

  isAuthenticatedAdmin(): boolean {
    const user = this.getCurrentUser();
    if (user && user.role === 'ADMIN') {
      return true;
    }
    return false;
  }

  isAuthenticatedClient(): boolean {
    const user = this.getCurrentUser();
    if (user && user.role === 'CLIENT') {
      return true;
    }
    return false;
  }
}
