import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConnectionServiceService {
  public connectionSubject = new Subject<any>();
  private currentItem: any;

  constructor() { }

  public setValue(item) {
    this.currentItem = item;
    this.connectionSubject.next(item);
  }
}
