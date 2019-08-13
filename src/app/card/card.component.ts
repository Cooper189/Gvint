import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() card: any;
  @Output() changeds = new EventEmitter<any>();
  @Output() changedw = new EventEmitter<any>();


  constructor() { }

  ngOnInit() {
  }

  public onClick() {
    this.changedw.next(this.card);
  }

  public mouseEnter(event: boolean) {
    if (event) {
      this.changeds.next(this.card);
    } else {
      this.changeds.next();
    }
  }
}
