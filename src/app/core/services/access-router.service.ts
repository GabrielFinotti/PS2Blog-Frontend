import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AccessRouterService {
  constructor() {}
  // Função para pegar os dados da session
  public getData() {
    // Recuperando os dados
    const email = sessionStorage.getItem('email');
    const password = sessionStorage.getItem('password');
    // Verificando se os dados existem, se sim, retorna verdadiero, se não, retorna falso
    if (email != (null || undefined) && password != (null || undefined)) {
      return true;
    } else {
      return false;
    }
  }
}
