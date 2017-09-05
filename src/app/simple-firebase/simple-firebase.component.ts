import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import {trigger, transition,query, animate, keyframes,stagger,style} from '@angular/animations'


@Component({
  selector: 'app-simple-firebase',
  templateUrl: './simple-firebase.component.html',
  styleUrls: ['./simple-firebase.component.scss'],
  animations: [
    trigger('explainerAnim',[
      transition('*=>*',[
         query('.col', style({opacity: 0, transform: 'translateX(-40px'})),
         query('.col', stagger('500ms',[
          animate('800ms 1.2s ease-out', keyframes([
            style({opacity:1, transform: 'translateX(0px)'}),
          ]))
        ]),{optional:true}),
      ])
    ])
  ],
})
export class SimpleFirebaseComponent implements OnInit {

  items: FirebaseListObservable<any[]>;
  constructor(db: AngularFireDatabase) {
    // const itemObservable = db.object('/aboutProject');
    // itemObservable.set({ groupName: 'CousinTeam',
    // projectName: 'MistakeClick',
    // createDay: '5/9/2017'}); //"auth != null"
    this.items = db.list('/aboutProject');
   }
  ngOnInit() {
    
  }

}
