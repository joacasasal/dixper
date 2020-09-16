import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeDetailsSidebarComponent } from './poke-details-sidebar.component';

describe('PokeDetailsSidebarComponent', () => {
  let component: PokeDetailsSidebarComponent;
  let fixture: ComponentFixture<PokeDetailsSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokeDetailsSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokeDetailsSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
