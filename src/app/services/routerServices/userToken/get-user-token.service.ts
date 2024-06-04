import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GetUserTokenService {
  private userToken!: string | null;

  constructor() {}

  public isUserToken() {
    this.userToken = sessionStorage.getItem('token');

    if (!this.userToken) return false;

    return true;
  }
}
