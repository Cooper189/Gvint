import { Component, Input, OnInit, Output, EventEmitter, OnChanges } from '@angular/core';
import { cards, ICards } from '../cards';
import { AvailableCardsService } from '../helpers/available-cards.service';

@Component({
  selector: 'app-feild-block',
  templateUrl: './feild-block.component.html',
  styleUrls: ['./feild-block.component.scss']
})
export class FeildBlockComponent implements OnInit, OnChanges {
  @Input() cards: any;
  @Input() special: boolean;
  @Output() userNameChange = new EventEmitter<string>();
  @Output() fieldClick = new EventEmitter<any>();
  public totalCost: number;

  constructor(private service: AvailableCardsService) {

  }

  ngOnChanges(e) {

    this.totalCost = 0;
    this.cards.forEach(element => {
      this.totalCost += element.specialPoints;
    });
  }

  ngOnInit() {
  }

}
