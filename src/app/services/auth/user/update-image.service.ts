import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Update } from '../../../interfaces/response/update';

@Injectable({
  providedIn: 'root',
})
export class UpdateImageService {
  private url!: string;

  constructor(private http: HttpClient) {
    this.url = environment.API_URL;
  }

  public updateProfileImage(data: FormData, token: string) {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    return this.http.put<Update>(`${this.url}/user/image`, data, { headers });
  }
}
