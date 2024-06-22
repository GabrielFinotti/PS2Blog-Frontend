import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Update } from '../../../interfaces/response/update';
import { UserUpdate } from '../../../interfaces/user/user-update';

@Injectable({
  providedIn: 'root',
})
export class UpdateService {
  private url!: string;

  constructor(private http: HttpClient) {
    this.url = environment.API_URL;
  }

  public userUpdate(data: UserUpdate, token: string) {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    return this.http.put<Update>(`${this.url}/user/update`, data, { headers });
  }

  public userImageUpdate(image: Blob, token: string) {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    return this.http.put(`${this.url}/user/image`, image, { headers });
  }
}
