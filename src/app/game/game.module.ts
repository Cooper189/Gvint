import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameRoutingModule } from './game-routing.module';

import { CurrentFieldComponent } from '../current-field/current-field.component';
import { FeildBlockComponent } from '../feild-block/feild-block.component';
import { InformationComponent } from '../information/information.component';
import { RandomPipe } from '../pipes/random.pipe';
import { GameFieldComponent } from '../game-field/game-field.component';
import { PlayerInterfaceComponent } from '../player-interface/player-interface.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    CurrentFieldComponent,
    FeildBlockComponent,
    InformationComponent,
    RandomPipe,
    GameFieldComponent,
    PlayerInterfaceComponent
  ],
  imports: [
    CommonModule,
    GameRoutingModule,
    SharedModule
  ],
  exports: [
  ]
})
export class GameModule { }
