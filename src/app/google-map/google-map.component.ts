import { Component, OnInit } from '@angular/core';
import { GeoService } from "../services/geo.service";
import { SocialUser } from "angular4-social-login";
import { AuthService } from "angular4-social-login";
import { Router } from "@angular/router";
import { AuthenticationService } from "../services/authentication.service";
import {MdDialog, MdDialogRef, MD_DIALOG_DATA} from '@angular/material';
import { DialogMakeAppointmentComponent } from "../dialog-make-appointment/dialog-make-appointment.component";
import { Appointment } from "../model/appointment";
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database'
import { Users } from "../model/users";
@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.scss']
})
export class GoogleMapComponent implements OnInit {
  
  lat: number;
  lng: number;
  markers: any;

  users: any;
  items: FirebaseListObservable<Users[]>;

  private user: SocialUser;
  private loggedIn: boolean;

  apppointmentNeedSave: Appointment;

  appointments: FirebaseListObservable<Appointment[]>;

  constructor(private db: AngularFireDatabase,private geo: GeoService,private authService: AuthService, private router: Router, private authenticationService: AuthenticationService,private dialog: MdDialog) {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
    });

    this.items = db.list('/users');
    this.items.forEach(item => {
        console.log('Item:', item);
    });
    this.users = db.object('/users/'+this.user.name);
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(position =>{
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
        this.users.set({ email: this.user.email,
                          link: this.user.photoUrl,
                          lat: this.lat,
                          lng: this.lng,
                          name: this.user.name}); 
      })
    }
    console.log(this.user);

  }
  ngOnInit() {
    this.getUserLocation();
    this.geo.hits.subscribe(hits => this.markers =hits);
    this.appointments=this.db.list('/appointmentDetail');
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
