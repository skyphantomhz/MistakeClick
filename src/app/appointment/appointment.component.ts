import {Component, OnInit} from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import {Appointment} from '../model/appointment';
import {DatePipe} from '@angular/common';


@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.scss']
})
export class AppointmentComponent implements OnInit {

  datas: FirebaseListObservable<Appointment[]>;
  today: number;

  constructor(private db: AngularFireDatabase) {
  }

  ngOnInit() {
    this.datas = this.db.list('/appointmentDetail', {
      query: {
        limitToLast: 100,
        orderByChild: 'dateTime',
      }
    });
    this.today = Date.now();
  }
}
