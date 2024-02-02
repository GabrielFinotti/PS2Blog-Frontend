import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  Renderer2,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-info-card',
  standalone: true,
  imports: [],
  templateUrl: './info-card.component.html',
  styleUrl: './info-card.component.scss',
})
export class InfoCardComponent implements AfterViewInit {
  @ViewChild('text') private p!: ElementRef<HTMLParagraphElement>;
  @ViewChild('div') private div!: ElementRef<HTMLDivElement>;
  @Input() public infoMessage!: string;
  private initWidth!: number;

  constructor(private render: Renderer2) {}

  ngAfterViewInit(): void {
    this.initWidth = this.div.nativeElement.offsetWidth;
    this.calcWidth();
  }

  private calcWidth() {
    const pWidth = this.p.nativeElement.offsetWidth;

    if (pWidth !== 0) {
      setTimeout(() => {
        this.render.setStyle(
          this.div.nativeElement,
          'width',
          `${this.initWidth + pWidth + 12}px`
        );
      }, 1200);
    }
  }
}
