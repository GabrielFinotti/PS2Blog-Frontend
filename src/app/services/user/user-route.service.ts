import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserRouteService {
  public getUserId() {
    if (typeof window !== 'undefined') {
      const sessionId = sessionStorage.getItem('id');
      const localId = localStorage.getItem('id')

      if (sessionId !== null || localId !== null) {
        return true;
      } else {
        return false;
      }
    }
    return false;
  }
}
