import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamesCardsComponent } from './games-cards.component';

describe('GamesCardsComponent', () => {
  let component: GamesCardsComponent;
  let fixture: ComponentFixture<GamesCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GamesCardsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GamesCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
