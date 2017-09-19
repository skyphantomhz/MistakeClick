import { Component, OnInit, Input } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Subject } from "rxjs/Subject";
import { Message } from "../model/message.model";
import { NgIf } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {
  @Input() userLogin;
  datas: FirebaseListObservable<Message[]>;
  constructor(private db: AngularFireDatabase) {
    
  }

  ngOnInit() {
    this.datas = this.db.list('/message', {
      query: {
        limitToLast: 10,
        orderByKey: true,
      }
    });
  }

}
