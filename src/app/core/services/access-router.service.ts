import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AccessRouterService {
  constructor() {}

  public getData() {
    if (typeof window !== 'undefined') {
      const email = sessionStorage.getItem('email');
      const password = sessionStorage.getItem('password');

      if (email != (null || undefined) && password != (null || undefined)) {
        return true;
      }
    }
    return false;
  }
}
