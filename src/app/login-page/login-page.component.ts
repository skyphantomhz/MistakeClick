import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import {GoogleSignInSuccess} from 'angular-google-signin';
import { AuthService, SocialUser } from "angular4-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angular4-social-login";
import { AuthenticationService } from "../services/authentication.service";
declare var particlesJS: any;

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  constructor(private authService: AuthService, private router:Router, private authenticationService:AuthenticationService) {
    particlesJS.load('particles-js', 'assets/configUI/particles.json', function () {
      console.log('callback - particles.js config loaded');
    });

   }

  ngOnInit() {
    if(this.authenticationService.checkLogin()){
      this.redirectToAfterComplateLogin();
    }
  }
  


  

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then( value =>{
      this.getUserAfterLogin();
    });
  }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID).then( value =>{
      this.getUserAfterLogin();
    });
  }

  redirectToAfterComplateLogin(): void{
    this.router.navigate(['homepage']);
  }

  getUserAfterLogin(){
    this.authService.authState.subscribe((user) => {
      this.authenticationService.completedLogin(user);
      this.redirectToAfterComplateLogin();
    }, (error) => {
      throw error;
    });
  }
}
