import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

import * as io from 'socket.io-client';
import { validate } from './decorators/validate';

class BehaviorCards {
  war: Array<any>;
  warSpecial: Array<any>;
  siege: Array<any>;
  siegeSpecial: Array<any>;
  far: Array<any>;
  farSpecial: Array<any>;

  constructor() {
    this.war = [];
    this.warSpecial = [];
    this.siege = [];
    this.siegeSpecial = [];
    this.far = [];
    this.farSpecial = [];
  }
}
const connectionOptions =  {
  'force new connection' : true,
  reconnectionAttempts: 'Infinity',
  timeout : 10000,
  transports : ['websocket'],
  extraHeaders: {
    Authorization: '1111'
  }
};
@Injectable({
  providedIn: 'root'
})
export class AvailableCardsService {
  private currentHand: Array<any>;
  private url = 'http://localhost:4500';
  public socket;
  private statusCode = true;

  public subjectHand = new Subject<any>();
  public subjectCard = new BehaviorSubject<any>({cards: new BehaviorCards()});
  public sublectEnemy = new BehaviorSubject<any>(new BehaviorCards());

  constructor() {
    this.socket = io(this.url, connectionOptions);
    this.socket.emit('user', {user: sessionStorage.getItem('id')});
    this.socket.on('add', (message) => {
      this.subjectCard.next({ cards: message.cards, turn: message.turn});
      this.subjectHand.next(message.hand);
    });

    this.socket.on('enemy', message => {
      this.sublectEnemy.next(message);
    });
  }

  @validate
  public addCards(element, index) {
    this.socket.emit('add', {elm: element, user: sessionStorage.getItem('id')});
  }

  public set currentHandCards(items) {
    this.currentHand = items;
  }
}
