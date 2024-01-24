import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, map, throwError } from 'rxjs';
import { User } from '../Models/user';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  baseUrl = 'https://localhost:44316/api';

  login(username: string, password: string): Observable<any> {
    const loginData = {
      email: username,
      password: password,
    };
    return this.http.post<any>(this.baseUrl + '/User/login', loginData).pipe(
      map((response) => {
        return response;
      }),
      catchError((error: HttpErrorResponse) => {
        console.error('Login Failed', error);
        return throwError(error);
      })
    );
  }
}
