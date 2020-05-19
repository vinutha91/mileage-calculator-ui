import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {environment} from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class TripDetailsService{
  constructor(private http: HttpClient) { }
  baseUrl = environment.baseUrl;

  addTrip(data): Observable<any>{
    const headers = { 'content-type': 'application/json'};
    const apiUrl  = `${this.baseUrl}/userVehicle/addTrip`;
    const body = data;
    return this.http.post(apiUrl , body, {headers, responseType: 'text'});
  }
}
