import {
  Component,
  ElementRef,
  OnInit,
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
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form-login.component.html',
  styleUrl: './form-login.component.scss',
})
export class FormLoginComponent implements OnInit {
  // Seletores de elementos.
  @ViewChildren('input') private inputs!: QueryList<ElementRef>;
  @ViewChildren('label') private labels!: QueryList<ElementRef>;

  // Variáveis do componente.
  protected formLogin!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private render: Renderer2,
    private router: Router
  ) {
    // Criação do grupo do formulário de login.
    this.formLogin = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      userSave: [''],
    });
  }
  // Função ativada na inicialização
  ngOnInit(): void {
    // Verificando se o codigo está sendo executado no cliente antes de buscar dados no local Storage
    if (typeof window !== 'undefined') {
      // Recebendo os valores
      const email = localStorage.getItem('email');
      const password = localStorage.getItem('password');
      // Se os valores não forem nulos, redirecionar automaticamente para a página de downloads e setar os valores para a session
      if (email != null && password != null) {
        sessionStorage.setItem('email', email);
        sessionStorage.setItem('password', password);
        this.router.navigate(['downloads']);
      }
    }
  }

  // Função para modificar a posição do label quando o input estiver focado.
  protected onFocus(index: number) {
    this.render.setStyle(
      this.labels.toArray()[index].nativeElement,
      'top',
      '-17px'
    );
  }

  // Função para modificar a posição do label quando o input perder o foco.
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
  // Função de entrada de usuário.
  protected login() {
    // Verificando se o formulário é valido
    if (this.formLogin.valid) {
      // Script executado se o usuário quiser salvar seus dados de login
      if (this.formLogin.value.userSave) {
        localStorage.setItem('email', this.formLogin.value.email);
        localStorage.setItem('password', this.formLogin.value.password);
        sessionStorage.setItem('email', this.formLogin.value.email);
        sessionStorage.setItem('password', this.formLogin.value.password);
        this.router.navigate(['downloads']);
      } else {
        // Script executado se o usuário não quiser salvar seus dados de login
        sessionStorage.setItem('email', this.formLogin.value.email);
        sessionStorage.setItem('password', this.formLogin.value.password);
        this.router.navigate(['downloads']);
      }
    }
  }
}
