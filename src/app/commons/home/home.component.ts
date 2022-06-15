import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Role, UserCredentials} from "../../model/models";
import {UserService} from "../../service/user.service";
import {ToastService} from "../../service/toast.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  logoImage: string = '../../../assets/logo.png'
  user: UserCredentials = {
    email: '',
    password: ''
  };
  isAdmin: boolean = false;
  isLoggedIn: boolean = false;
  isRegistering: boolean = false;

  constructor(private router: Router, private userService: UserService, private toastService: ToastService) {
  }

  ngOnInit() {
  }

  login() {
    const success = this.userService.login(this.user)
    if (!success) {
      this.toastService.addError('Invalid user!')
    } else {
      this.toastService.addSuccess('Logged in successfully!')
      this.isLoggedIn = true;

      if (this.userService.isAuthenticatedAdmin()) {
        this.isAdmin = true;
      }
    }
  }

  toggleRegister() {
    this.isRegistering = true;
  }

  logout() {

  }
}
