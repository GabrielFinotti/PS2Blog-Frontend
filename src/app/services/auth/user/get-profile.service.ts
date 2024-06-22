import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GetProfile } from '../../../interfaces/response/get-profile';

@Injectable({
  providedIn: 'root',
})
export class GetProfileService {
  private url!: string;

  constructor(private http: HttpClient) {
    this.url = environment.API_URL;
  }

  public getProfile(token: string) {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    return this.http.post<GetProfile>(`${this.url}/user/data`, undefined, { headers });
  }
}
