import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeCardsComponent } from './poke-cards.component';

describe('PokeCardsComponent', () => {
  let component: PokeCardsComponent;
  let fixture: ComponentFixture<PokeCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokeCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokeCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
