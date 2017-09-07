import { Injectable } from '@angular/core';
import { AuthService, SocialUser } from "angular4-social-login";

@Injectable()
export class AuthenticationService {
  private check:boolean;
  constructor() { }

  completedLogin(user: SocialUser){
    localStorage.setItem('currentUser', JSON.stringify({username: user.name}));
    if (localStorage.getItem('currentUser')) {
      this.setLogin(true);
    } else {
      this.setLogin(false);
    }
  }

  logout(): void {
    // clear token remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.check=false;
  }

  setLogin(value: boolean){
    this.check=value;
  }
  checkLogin(){
    return this.check;
  }
  
}
