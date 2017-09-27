import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database'
import * as GeoFire from "geofire"
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Appointment, AppointmentJSON } from "../model/appointment";
@Injectable()
export class GeoService {
  dbRef: any;
  geoFire: any;
  hits = new BehaviorSubject([])
  constructor( private db: AngularFireDatabase) {
    this.dbRef = this.db.list('/locations');
    this.geoFire = new GeoFire(this.dbRef.$ref);
  }
  
  setLocation(key: string, coords: Array<number>){
    this.geoFire.set(key, coords)
    .then(_ => console.log('location updated'))
    .catch(err => console.log(err))
  }
  
  makeAppointment(apm: Appointment){
    const itemObservable = this.db.list('/appointmentDetail');
    itemObservable.push(AppointmentJSON.encodeAppointment(apm));
  }

  // getAppointments(): FirebaseListObservable<Appointment[]>{
  //   return this.db.list('/appointmentDetail');
  // }

  getLocations(radius: number, coords:Array<number>){
    this.geoFire.query({
      center: coords,
      radius: radius
    })
    .on('key_entered', (key, location, distance) => {
      let hit = {
        location: location,
        distance: distance
      }

      let currentHits = this.hits.value;
      currentHits.push(hit);
      this.hits.next(currentHits);
    });
  }
  
}
