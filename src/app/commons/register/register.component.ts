import { Component, OnInit } from '@angular/core';
import {User} from "../../model/models";
import {UserService} from "../../service/user.service";
import {ToastService} from "../../service/toast.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: User = {
    email: '',
    name: '',
    phoneNumber: '',
    password: '',
    rewritePassword: '',
  };

  constructor(private userService: UserService, private toastService: ToastService) { }

  ngOnInit(): void {
  }

  register() {
    console.log('register')
    if (this.user.password !== this.user.rewritePassword) {
      this.toastService.addError('Passwords do not match')
    }
      this.userService.register(this.user).subscribe((response) => {
          this.toastService.addSuccess('User registered!')
      }, (error) => {
        this.toastService.addError('Register could not be performed!')

      })


    // if (!success) {
    //   this.toastService.addError('Invalid user!')
    // } else {
    //   this.toastService.addSuccess('Logged in successfully!')
    // }
  }

}
