import { Component, OnInit, Input } from '@angular/core';
import { ConnectionServiceService } from '../helpers/connection-service.service';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss']
})
export class InformationComponent {
  public currentCard: any;

  constructor(private service: ConnectionServiceService) {
    this.service.connectionSubject.subscribe(item => {
      this.currentCard = item;
    });
  }
}
