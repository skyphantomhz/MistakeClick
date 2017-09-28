import { Component, OnInit, Input, ViewChild, ElementRef, AfterContentChecked } from '@angular/core';
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
  userLogin: String;
  datas: FirebaseListObservable<Message[]>;
  numberClickMessage : number = 2 ;

  //
  @ViewChild('scroller') private feedContainer: ElementRef;

  constructor(private db: AngularFireDatabase) {
    this.userLogin = localStorage.getItem('currentUser')
  }
  ngOnInit() {
    this.datas=null;
    this.datas = this.db.list('/message', {
      query: {
        limitToLast: 10,
        orderByKey: true,
      }
    });
  }
  loadMessageOld(){
    this.datas=null;
    this.datas = this.db.list('/message', {
      query: {
        limitToLast: 10 * this.numberClickMessage,
        orderByKey: true,
      }
    });
    this.numberClickMessage++;
  }

  scrollToBottom(): void {
    this.feedContainer.nativeElement.scrollTop = this.feedContainer.nativeElement.scrollHeight;
  }

  ngAfterViewChecked(){
    this.scrollToBottom();
  }
}
