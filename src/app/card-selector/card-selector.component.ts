import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-selector',
  templateUrl: './card-selector.component.html',
  styleUrls: ['./card-selector.component.scss']
})
export class CardSelectorComponent  {
  public available: Array<any>;
  public hand: Array<any>;

  constructor(private http: HttpClient, private router: Router) {
    this.http.post('/api/get-all', {user: 'north'}).subscribe((item: Array<any>) => {
      this.hand = [];
      this.available = item;
    });
  }

  public deleteNewCard(item) {
    this.available.push(item);
    this.hand = this.deleteCard(this.hand, item);
  }

  private deleteCard(available, item) {
    return available.filter((el) => {
      if (el.cardId !== item.cardId) {
        return el;
      }
    });
  }
  public addNewCard(item) {
    this.hand.push(item);
    this.available = this.deleteCard(this.available, item);
  }

  public saveDate() {
    this.http.post('/api/save-hand', {pull: this.hand, user: sessionStorage.getItem('id')}).subscribe((item) => {
      this.router.navigate(['/game']);
    });
  }

}
