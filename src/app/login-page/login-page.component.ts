import { Component, OnInit } from '@angular/core';
import {GoogleSignInSuccess} from 'angular-google-signin';
import { environment } from '../../environments/environment';
declare var particlesJS: any;

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  ImageUrl: String;
  private myClientId: string ;
  constructor() {
    this.myClientId = environment.myClientId;
   }

  ngOnInit() {
    particlesJS.load('particles-js', 'assets/configUI/particles.json', function () {
      console.log('callback - particles.js config loaded');
    });
  }
  onGoogleSignInSuccess(event: GoogleSignInSuccess) {
    let googleUser: gapi.auth2.GoogleUser = event.googleUser;
    let id: string = googleUser.getId();
    let profile: gapi.auth2.BasicProfile = googleUser.getBasicProfile();
    console.log('ID: ' +
      profile
        .getId()); // Do not send to your backend! Use an ID token instead.
        console.log('Full Name: ' + profile.getName());
        console.log("Image URL: " + profile.getImageUrl());
        console.log("Email: " + profile.getEmail());
        this.ImageUrl=profile.getEmail();
        // The ID token you need to pass to your backend:
        var id_token = googleUser.getAuthResponse().id_token;
        console.log("ID Token: " + id_token);
  }

}
