import { TestBed } from '@angular/core/testing';

import { AvailableCardsService } from './available-cards.service';

describe('AvailableCardsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AvailableCardsService = TestBed.get(AvailableCardsService);
    expect(service).toBeTruthy();
  });
});
