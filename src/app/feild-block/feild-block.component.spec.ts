import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeildBlockComponent } from './feild-block.component';

describe('FeildBlockComponent', () => {
  let component: FeildBlockComponent;
  let fixture: ComponentFixture<FeildBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeildBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeildBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
