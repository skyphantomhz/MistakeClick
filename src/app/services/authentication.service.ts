import { Injectable } from '@angular/core';
import { AuthService, SocialUser } from "angular4-social-login";

@Injectable()
export class AuthenticationService {
  private check:boolean;
  constructor() { }

  completedLogin(user: SocialUser){
    localStorage.setItem('currentUser', user.name);
    localStorage.setItem('informationUser', JSON.stringify({
      "name": user.name,
      "photoUrl": user.photoUrl,
      "email": user.email
    }));
    if (localStorage.getItem('currentUser')) {
      this.setLogin(true);
    } else {
      this.setLogin(false);
    }
  }

  logout(): void {
    // clear token remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    localStorage.removeItem('informationUser');
    this.check=false;
  }

  setLogin(value: boolean){
    this.check=value;
  }
  checkLogin(){
    return this.check;
  }
  
}
