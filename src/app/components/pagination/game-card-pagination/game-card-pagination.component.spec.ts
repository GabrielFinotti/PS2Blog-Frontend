import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameCardPaginationComponent } from './game-card-pagination.component';

describe('GameCardPaginationComponent', () => {
  let component: GameCardPaginationComponent;
  let fixture: ComponentFixture<GameCardPaginationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GameCardPaginationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GameCardPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
