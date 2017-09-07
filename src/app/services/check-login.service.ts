import { Injectable, OnDestroy } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService, SocialUser } from "angular4-social-login";
import 'rxjs/add/operator/do';

@Injectable()
export class CheckLoginService implements CanActivate {
  // private user: SocialUser;
  // private loggedIn: boolean;
  // constructor(private authService: AuthService) {
    // this.authService.authState.subscribe((user) => {
    //   this.user = user;
    //   this.loggedIn = (user != null);
    // }, (error) => {
    //   throw error;
    // }, () => { 
    // });
  // }
  canActivate(): boolean {
    if (localStorage.getItem('currentUser')) {
      return true;
    } else {
      return false;
    }
  }

}
