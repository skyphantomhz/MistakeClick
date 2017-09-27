import {Component, Input, OnInit} from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import {DatePipe} from '@angular/common';
import {SocialUser} from 'angular4-social-login';
import { FormControl, FormGroup } from '@angular/forms';
import {ColorPickerService} from 'angular4-color-picker';

@Component({
  selector: 'app-sendmessage',
  templateUrl: './sendmessage.component.html',
  styleUrls: ['./sendmessage.component.scss']
})
export class SendmessageComponent implements OnInit {
 
  contenMessageControl = new FormControl();
  @Input() user: SocialUser;
  @Input() color: string;
  content: any;

  constructor(private db: AngularFireDatabase , private datePipe: DatePipe,private cpService: ColorPickerService) {
    this.color = '#0000FF';
  }

  ngOnInit() {
    
  }
  sendMessage() {

    console.log('bam');
    console.log('co mau: '+this.color);
    const sendmessage = this.db.list('/message');
    let content = this.detectLink();
    sendmessage.push({
      content: content,
      dateCreate: this.datePipe.transform(new Date(), 'dd-MM-yy HH-mm'),
      email: this.user.email,
      id: Date.now(),
      linkAva: this.user.photoUrl,
      userName: this.user.name,
      color: this.color,
    });
          this.contenMessageControl.reset();
          this.color = '#0000FF';

    this.contenMessageControl.setValue("");
  }
  detectLink(): any {
    let value = this.contenMessageControl.value;
    // let retval = value;
    if(value != null) {
        var urlRegex = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
        var retval = value.replace(urlRegex, function (url) {
          return '<a href="' + url + '" target="_blank">' + url + '</a>';
        });
    }
    return retval;
  }
}
