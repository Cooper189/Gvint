import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';
import { CardsImageDirective } from '../directives/cards-image.directive';

@NgModule({
  declarations: [
    CardComponent,
    CardsImageDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CardComponent,
    CardsImageDirective
  ]
})
export class SharedModule { }
