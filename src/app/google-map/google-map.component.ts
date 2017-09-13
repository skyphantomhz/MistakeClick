import { Component, OnInit } from '@angular/core';
import { GeoService } from "../services/geo.service";
import { SocialUser } from "angular4-social-login";
import { AuthService } from "angular4-social-login";
import { Router } from "@angular/router";
import { AuthenticationService } from "../services/authentication.service";

@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.scss']
})
export class GoogleMapComponent implements OnInit {
  
  lat: number;
  lng: number;
  markers: any;

  private user: SocialUser;
  private loggedIn: boolean;

  constructor(private geo: GeoService,private authService: AuthService, private router: Router, private authenticationService: AuthenticationService) {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
    });
  }
  ngOnInit() {
    this.getUserLocation();
    this.geo.hits.subscribe(hits => this.markers =hits)
  }
  getUserLocation() {
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(position =>{
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
        this.geo.getLocations(500,[this.lat, this.lng]);
      })
    }
  }

  signOut(): void {
    this.authService.signOut().then((value) => { 
      this.authenticationService.logout();
      this.router.navigate(['']); 
    });
  }

}
