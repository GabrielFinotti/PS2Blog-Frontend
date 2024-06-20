import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  QueryList,
  Renderer2,
  ViewChildren,
} from '@angular/core';

@Component({
  selector: 'app-game-card',
  standalone: true,
  imports: [],
  templateUrl: './game-card.component.html',
  styleUrl: './game-card.component.scss',
})
export class GameCardComponent implements AfterViewInit {
  @Input() public list!: Array<{ name: string; size: string; href: string }>;
  @ViewChildren('card') private cards!: QueryList<ElementRef<HTMLDivElement>>;

  constructor(private render: Renderer2) {}

  ngAfterViewInit(): void {
    this.cards.changes.subscribe((res) => {
      this.setClass();
    });
  }

  private setClass() {
    const cardsArray = this.cards.toArray();

    let count = 250;

    cardsArray.forEach((card) => {
      this.render.removeClass(card.nativeElement, 'show-card');
      setTimeout(() => {
        this.render.addClass(card.nativeElement, 'show-card');
      }, count);

      count += 250;
    });
  }
}
