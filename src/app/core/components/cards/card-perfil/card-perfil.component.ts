import { Component } from '@angular/core';

@Component({
  selector: 'app-card-perfil',
  standalone: true,
  imports: [],
  templateUrl: './card-perfil.component.html',
  styleUrl: './card-perfil.component.scss',
})
export class CardPerfilComponent {
  // Variáveis do componente
  protected userImg!: string;

  constructor() {
    this.userImg = '';
  }
  // Função para atualizar a imagem da conta
  protected uploudImg() {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = 'image/*';
    fileInput.onchange = () => {
      if (fileInput.files) {
        this.userImg = URL.createObjectURL(fileInput.files[0]);
      }
    };
    fileInput.click();
  }
}
