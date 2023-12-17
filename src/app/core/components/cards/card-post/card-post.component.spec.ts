import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPostComponent } from './card-post.component';

describe('CardDescricaoComponent', () => {
  let component: CardPostComponent;
  let fixture: ComponentFixture<CardPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardPostComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
