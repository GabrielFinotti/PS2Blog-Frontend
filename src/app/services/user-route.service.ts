import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserRouteService {
  public getUserId() {
    const userId = sessionStorage.getItem('id');

    if (userId !== null) {
      return true;
    } else {
      return false;
    }
  }
}
