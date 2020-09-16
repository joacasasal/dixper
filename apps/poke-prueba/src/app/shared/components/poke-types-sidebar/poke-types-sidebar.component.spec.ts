import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeTypesSidebarComponent } from './poke-types-sidebar.component';

describe('PokeTypesSidebarComponent', () => {
  let component: PokeTypesSidebarComponent;
  let fixture: ComponentFixture<PokeTypesSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokeTypesSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokeTypesSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
