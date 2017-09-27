import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-detail-point-appointment',
  templateUrl: './detail-point-appointment.component.html',
  styleUrls: ['./detail-point-appointment.component.scss']
})
export class DetailPointAppointmentComponent implements OnInit {
  @Input() detailAppointment: any;
  constructor() { }

  ngOnInit() {
  }

}
