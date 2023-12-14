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
  selector: 'app-form-cadastro',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form-cadastro.component.html',
  styleUrl: './form-cadastro.component.scss',
})
export class FormCadastroComponent {
  // Seletores de elementos
  @ViewChildren('input') private inputs!: QueryList<ElementRef>;
  @ViewChildren('label') private labels!: QueryList<ElementRef>;

  // Variáveis do componente
  protected formCadastro!: FormGroup;

  constructor(private formBuilder: FormBuilder, private render: Renderer2) {
    this.formCadastro = this.formBuilder.group({
      user: [
        '',
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(16),
        ],
      ],
      email: ['', [Validators.email, Validators.required]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(20),
        ],
      ],
      confPassword: ['', Validators.required],
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
