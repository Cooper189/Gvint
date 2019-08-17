import { Component, Output, EventEmitter } from '@angular/core';
import { AvailableCardsService } from '../helpers/available-cards.service';
import { ConnectionServiceService } from '../helpers/connection-service.service';
import { HttpClient } from '@angular/common/http';
import { cards } from '../cards';

@Component({
  selector: 'app-current-field',
  templateUrl: './current-field.component.html',
  styleUrls: ['./current-field.component.scss']
})
export class CurrentFieldComponent {
  public items: any;
  private event: any;
  @Output() hoverEvent = new EventEmitter<any>();
  @Output() currentCard = new EventEmitter<any>();

  constructor(
    private cardsAvailable: AvailableCardsService,
    private service: ConnectionServiceService,
    private http: HttpClient
    ) {
    this.cardsAvailable.subjectHand
    .subscribe(item => {
      this.items = item;
    });
  }

  public onFieldClick(item, i) {
    this.currentCard.next({item, index: i});
  }

  public onHover(item) {
    this.service.connectionSubject.next(item);
  }
}
