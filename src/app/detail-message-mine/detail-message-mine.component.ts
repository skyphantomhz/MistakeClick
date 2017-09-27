import { Component, OnInit, Input } from '@angular/core';
import { Message } from '../model/message.model';


@Component({
  selector: 'app-detail-message-mine',
  templateUrl: './detail-message-mine.component.html',
  styleUrls: ['./detail-message-mine.component.scss']
})
export class DetailMessageMineComponent implements OnInit {
  @Input() message: Message;
  color: string;
  constructor() { }

  ngOnInit() {
    this.color='';
  }


}

