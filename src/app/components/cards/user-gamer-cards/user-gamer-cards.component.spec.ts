import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserGamerCardsComponent } from './user-gamer-cards.component';

describe('UserGamerCardsComponent', () => {
  let component: UserGamerCardsComponent;
  let fixture: ComponentFixture<UserGamerCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserGamerCardsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserGamerCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
