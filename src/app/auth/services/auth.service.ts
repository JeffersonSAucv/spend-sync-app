import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import { Endpoints } from '../utils/enums/endpoints.enum';
import {
  RegisterRequest,
  RegisterResponse,
  UserLocalStorage,
} from '../utils/interfaces/register-req-res/register-rq-rs.interface';
import { registerMapper } from './mapper/register.mapper';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly _http: HttpClient = inject(HttpClient);

  public register(user: RegisterRequest): Observable<UserLocalStorage> {
    const url: string = `${environment.API_URL}${Endpoints.REGISTER}`;
    return this._http
      .post<RegisterResponse>(url, user)
      .pipe(map((res) => registerMapper(res)));
  }
}
