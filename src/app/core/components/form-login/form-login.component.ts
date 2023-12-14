import {
  Component,
  ElementRef,
  QueryList,
  Renderer2,
  ViewChildren,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-form-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form-login.component.html',
  styleUrl: './form-login.component.scss',
})
export class FormLoginComponent {
  // Seletores de elementos.
  @ViewChildren('input') private inputs!: QueryList<ElementRef>;
  @ViewChildren('label') private labels!: QueryList<ElementRef>;

  // Variáveis do componente.
  protected formLogin!: FormGroup;

  constructor(private formBuilder: FormBuilder, private render: Renderer2) {
    // Criação do grupo do formulário de login.
    this.formLogin = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      userSave: [''],
    });
  }

  // Função para modificar o valor do label quando o input estiver focado.
  protected onFocus(index: number) {
    this.render.setStyle(
      this.labels.toArray()[index].nativeElement,
      'top',
      '-17px'
    );
  }

  // Função para modificar o valor do label quando o input perder o foco.
  protected onBlur(index: number) {
    // Verificando se o input está vazio antes de retornar o label para a posição inicial.
    if (this.inputs.toArray()[index].nativeElement.value.length == 0) {
      this.render.setStyle(
        this.labels.toArray()[index].nativeElement,
        'top',
        '25%'
      );
    }
  }
}
