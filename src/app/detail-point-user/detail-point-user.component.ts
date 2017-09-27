import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-detail-point-user',
  templateUrl: './detail-point-user.component.html',
  styleUrls: ['./detail-point-user.component.scss']

})
export class DetailPointUserComponent implements OnInit {
  @Input() detailPoint: any;
  constructor() {
    console.log(this.detailPoint);
   }

  ngOnInit() {
  }

}
