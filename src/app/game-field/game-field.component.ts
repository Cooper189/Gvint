import { Component } from '@angular/core';
import { AvailableCardsService } from '../helpers/available-cards.service';
import { HttpClient } from '@angular/common/http';


const ElementsArray = ['war', 'far', 'siege'];
@Component({
  selector: 'app-game-field',
  templateUrl: './game-field.component.html',
  styleUrls: ['./game-field.component.scss']
})
export class GameFieldComponent {
  public cards: any;
  public enemy: any;
  public totalCards = 0;
  public allEnemy = 0;

  constructor(private availableCards: AvailableCardsService, private http: HttpClient) {
    this.availableCards.subjectCard.subscribe(item => {
      console.log('cards', item);
      this.cards = item.cards;
      this.totalCards = this.allScore(ElementsArray, this.cards);
    });
    this.availableCards.sublectEnemy.subscribe(item => {
      console.log('enemy', item);
      this.enemy = item;
      this.allEnemy = this.allScore(ElementsArray, this.enemy);
    });
  }

  public allScore(keys: Array<string>, obj): number {
    let counter = 0;
    keys.forEach(elements => {
      obj[elements].forEach(elem => {
        counter += elem.specialPoints;
      });
    });
    return counter;
  }

}
