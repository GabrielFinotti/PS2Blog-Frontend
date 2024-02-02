import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnChanges,
  Renderer2,
  SimpleChanges,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-info-card',
  standalone: true,
  imports: [],
  templateUrl: './info-card.component.html',
  styleUrl: './info-card.component.scss',
})
export class InfoCardComponent implements AfterViewInit, OnChanges {
  @ViewChild('text') private p!: ElementRef<HTMLParagraphElement>;
  @ViewChild('div') private div!: ElementRef<HTMLDivElement>;
  @Input() public infoMessage!: string;
  private initWidth!: number;

  constructor(private render: Renderer2) {}

  ngAfterViewInit(): void {
    this.initWidth = this.div.nativeElement.offsetWidth;
  }

  ngOnChanges(changes: SimpleChanges): void {
    setTimeout(() => {
      if (
        changes['infoMessage'].currentValue !==
        changes['infoMessage'].previousValue
      ) {
        this.calcWidth();
      }
    }, 0);
  }

  private calcWidth() {
    const pWidth = this.p.nativeElement.offsetWidth;

    if (pWidth !== 0) {
      setTimeout(() => {
        this.render.setStyle(
          this.div.nativeElement,
          'width',
          `${this.initWidth + pWidth + 22}px`
        );
      }, 1200);
    }
  }
}
