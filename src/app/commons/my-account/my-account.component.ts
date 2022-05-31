import {Component, OnInit} from '@angular/core';
import {User} from "../../model/models";
import {ToastService} from "../../service/toast.service";
import {isNotNullUndefinedEmpty} from "../../utils/functions-utils";
import {UserService} from "../../service/user.service";

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent implements OnInit {
  currentUser: User;
  previewURL: any = '../../../assets/user_blue_logo.png';

  constructor(private userService: UserService,
              private toastService: ToastService,) {
    // @ts-ignore
    this.currentUser = this.userService.getCurrentUser();
  }

  ngOnInit() {
  }

  saveSettings() {
    this.userService.saveAccountSettings(this.currentUser).subscribe(() => {
      if (isNotNullUndefinedEmpty(this.currentUser.newPassword) &&
        isNotNullUndefinedEmpty(this.currentUser.rewritePassword)
        && this.currentUser.newPassword === this.currentUser.rewritePassword) {
        this.currentUser.password = this.currentUser.newPassword;
        delete this.currentUser.newPassword;
        delete this.currentUser.rewritePassword;
      }
      this.userService.setCurrentUserInLocalStorage(this.currentUser);
      this.toastService.addSuccess('Changes successfully saved!');
    }, (err: { error: { message: string; }; }) => {
      console.log(err);
      this.toastService.addError(err.error.message);
    })
  }
}
