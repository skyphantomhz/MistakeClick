import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { AuthService, SocialUser } from "angular4-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angular4-social-login";
import { AuthenticationService } from "../services/authentication.service";

@Component({
  selector: 'app-simple-homepage',
  templateUrl: './simple-homepage.component.html',
  styleUrls: ['./simple-homepage.component.scss']
})
export class SimpleHomepageComponent implements OnInit {

  private user: SocialUser;
  private loggedIn: boolean;

  constructor(private authService: AuthService, private router: Router, private authenticationService: AuthenticationService) {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
    });
  }

  ngOnInit() {

  }
  signOut(): void {
    this.authService.signOut().then((value) => { 
      this.authenticationService.logout();
      this.router.navigate(['']); 
    });
    
  }

}
