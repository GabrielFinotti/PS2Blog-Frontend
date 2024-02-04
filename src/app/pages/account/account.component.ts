import {
  Component,
  ElementRef,
  OnInit,
  QueryList,
  Renderer2,
  ViewChildren,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserDataService } from './../../shared/services/user-data.service';
import { UserDataResponse } from '../../interfaces/user-data-response';
import { NavBarComponent } from '../../shared/components/nav-bar/nav-bar.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { InfoCardComponent } from '../../shared/components/info-card/info-card.component';
import { UpdateFormComponent } from '../../components/forms/update-form/update-form.component';
import { UserDataFormComponent } from '../../components/forms/user-data-form/user-data-form.component';

@Component({
  selector: 'app-account',
  standalone: true,
  templateUrl: './account.component.html',
  styleUrl: './account.component.scss',
  imports: [
    NavBarComponent,
    FooterComponent,
    UpdateFormComponent,
    UserDataFormComponent,
    InfoCardComponent,
  ],
})
export class AccountComponent implements OnInit {
  @ViewChildren('div') private divs!: QueryList<ElementRef<HTMLDivElement>>;
  private userId!: string;
  protected userName!: UserDataResponse;
  protected formEdit!: boolean;
  protected infoMessage!: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private userDataService: UserDataService,
    private render: Renderer2
  ) {
    this.formEdit = false;
  }

  ngOnInit(): void {
    this.userId = this.activatedRoute.snapshot.params['id'];
    this.userDataService.getUserName(this.userId).subscribe((res) => {
      this.userName = res;
    });
  }

  public editFormData() {
    if (this.formEdit) {
      this.formEdit = false;

      setTimeout(() => {
        this.render.setStyle(
          this.divs.get(0)?.nativeElement,
          'height',
          '129px'
        );
      }, 800);

      this.render.setStyle(this.divs.get(1)?.nativeElement, 'height', '0');
    } else {
      this.formEdit = true;
      this.render.setStyle(this.divs.get(0)?.nativeElement, 'height', '0');

      setTimeout(() => {
        this.render.setStyle(
          this.divs.get(1)?.nativeElement,
          'height',
          '275px'
        );
      }, 800);
    }
  }

  protected getInfoMessage(message: string) {
    this.infoMessage = message;

    setTimeout(() => {
      this.infoMessage = '';
    }, 3500);
  }
}
