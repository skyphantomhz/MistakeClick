import {Component, Input, OnInit} from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import {DatePipe} from '@angular/common';
import {SocialUser} from 'angular4-social-login';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-sendmessage',
  templateUrl: './sendmessage.component.html',
  styleUrls: ['./sendmessage.component.scss']
})
export class SendmessageComponent implements OnInit {
  contenMessageControl = new FormControl();
  @Input() user: SocialUser;

  content: any;

  constructor(private db: AngularFireDatabase , private datePipe: DatePipe) {
  }

  ngOnInit() {
    // this.sendmessage.push({
    //   content: this.content,
    //   dateCreate: this.datePipe.transform(new Date(), 'dd-MM-yy HH-mm'),
    //   id: Date.now(),
    //   email: this.user.email,
    //   linkAva: this.user.photoUrl,
    //   userName: this.user.name,
    // });
  }
  sendMessage() {
    console.log('bam');
    const sendmessage = this.db.list('/message');
    sendmessage.push({
      content: this.contenMessageControl.value,
      dateCreate: this.datePipe.transform(new Date(), 'dd-MM-yy HH-mm'),
      email: this.user.email,
      id: Date.now(),
      linkAva: this.user.photoUrl,
      userName: this.user.name,
    });
  }
}
