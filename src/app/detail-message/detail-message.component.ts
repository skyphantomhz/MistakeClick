import { Component, OnInit, Input } from '@angular/core';
import { Message } from "../model/message.model";

@Component({
  selector: 'app-detail-message',
  templateUrl: './detail-message.component.html',
  styleUrls: ['./detail-message.component.scss'],
  
})
export class DetailMessageComponent implements OnInit {
  @Input() message: Message;
  ngOnInit(): void {
    
  }
  constructor() {

  }
}



