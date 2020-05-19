import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class RegisterUserService {
  constructor(private http: HttpClient) { }
  baseUrl = environment.baseUrl;

  register(data): Observable<any>{
    const headers = { 'content-type': 'application/json'};
    const apiUrl  = `${this.baseUrl}/register`;
    const body = data;
    return this.http.post(apiUrl , body, {headers, responseType: 'json'});
  }
}
