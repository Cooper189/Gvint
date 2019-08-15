import { Component, OnInit, Input } from '@angular/core';
import { AvailableCardsService } from '../helpers/available-cards.service';

@Component({
  selector: 'app-player-interface',
  templateUrl: './player-interface.component.html',
  styleUrls: ['./player-interface.component.scss']
})
export class PlayerInterfaceComponent implements OnInit {
  public user: string;

  constructor(private service: AvailableCardsService) {
    this.service.socket.on('currentUser', (user): void => {
      console.log(user);
      this.user = user.value;
    });
   }

  ngOnInit() {
  }

}
