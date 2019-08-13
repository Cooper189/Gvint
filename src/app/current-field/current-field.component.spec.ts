import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentFieldComponent } from './current-field.component';

describe('CurrentFieldComponent', () => {
  let component: CurrentFieldComponent;
  let fixture: ComponentFixture<CurrentFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
