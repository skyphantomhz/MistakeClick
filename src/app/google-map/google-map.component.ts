import { Component, OnInit } from '@angular/core';
import { GeoService } from "../services/geo.service";
import { SocialUser } from "angular4-social-login";
import { AuthService } from "angular4-social-login";
import { Router } from "@angular/router";
import { AuthenticationService } from "../services/authentication.service";
import {MdDialog, MdDialogRef, MD_DIALOG_DATA} from '@angular/material';
import { DialogMakeAppointmentComponent } from "../dialog-make-appointment/dialog-make-appointment.component";
import { Appointment } from "../model/appointment";
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

  apppointmentNeedSave: Appointment;

  constructor(private geo: GeoService,private authService: AuthService, private router: Router, private authenticationService: AuthenticationService,private dialog: MdDialog) {
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

  placeMarker($event){
    
    let latAppointment = $event.coords.lat;
    let lngAppointment = $event.coords.lng;
    this.openDialog(latAppointment,lngAppointment);
  }

  openDialog(latAppointment: number,lngAppointment: number): void {
    let dialogRef = this.dialog.open(DialogMakeAppointmentComponent, {
      width: '500px',
      data: {  }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.apppointmentNeedSave = new Appointment(result.nameAppointment,result.dateTime,result.addressAppointment,latAppointment,lngAppointment);
      this.geo.makeAppointment(this.apppointmentNeedSave);
    });

  }

  signOut(): void {
    this.authService.signOut().then((value) => { 
      this.authenticationService.logout();
      this.router.navigate(['']); 
    });
  }


}
