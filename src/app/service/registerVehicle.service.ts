import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {environment} from '../../environments/environment';
import {LoginUserService} from './loginUserService';

@Injectable({
  providedIn: 'root'
})
export class RegisterVehicleService {

  constructor(private http: HttpClient,
            private loginService :LoginUserService ) { }
  baseUrl = environment.baseUrl;

 // apiUrl = baseUrl + '/userVehicle/signup';
  // headers = new HttpHeaders().set('Content-Type', 'application/json');

  signUpUser(data): Observable<any>{
    const headers = { 'content-type': 'application/json',
                      'Authorization':this.loginService.getAuthToken()};

    const apiUrl  = `${this.baseUrl}/userVehicle/registerVehicle`;
    const body = data;
    return this.http.post(apiUrl , body, {headers, responseType: 'text'});
  }
  getVehicleDetails(vehileNo: string): Observable<any>{
    const apiUrl  = `${this.baseUrl}/userVehicle/details/${vehileNo}`;
    return this.http.get(apiUrl);
  }
}
