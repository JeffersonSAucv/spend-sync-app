import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import { Endpoints } from '../utils/enums/endpoints.enum';
import { userMapper } from './mapper/user.mapper';
import {
  AuthResponse,
  RegisterRequest,
  UserLocalStorage,
} from '../utils/interfaces/auth/auth.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly _http: HttpClient = inject(HttpClient);

  public register(user: RegisterRequest): Observable<UserLocalStorage> {
    const url: string = `${environment.API_URL}${Endpoints.REGISTER}`;
    return this._http
      .post<AuthResponse>(url, user)
      .pipe(map((res) => userMapper(res)));
  }

  public login(email: string, password: string): Observable<UserLocalStorage> {
    const url: string = `${environment.API_URL}${Endpoints.LOGIN}`;
    return this._http
      .post<AuthResponse>(url, { email, password })
      .pipe(map((res) => userMapper(res)));
  }
}
