import { Directive, Input, OnInit, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCardsImage]'
})
export class CardsImageDirective implements OnInit {
  @Input('appCardsImage') imageUrl;

  constructor(private elementRef: ElementRef) {
  }

  ngOnInit() {
    this.elementRef.nativeElement.style.backgroundImage = `url('${this.imageUrl}')`;
  }
}
