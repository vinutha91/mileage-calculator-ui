import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {environment} from '../../environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class LoginUserService{

  constructor(private http: HttpClient) { }
    baseUrl = environment.baseUrl;

  authenticate(data){
     const headers = { 'content-type': 'application/json'};
     const apiUrl  = `${this.baseUrl}/authenticate`;
     let body = data;
    return this.http.post(apiUrl , body, {headers, responseType: 'json'}).pipe(map(
      userData =>{
        sessionStorage.setItem('username',body.email);
        //@ts-ignore
        let tokenStr= 'Bearer '+userData.token;
        sessionStorage.setItem('token', tokenStr);
        return userData;
      }
    )
    );
   }
    getAuthToken(){
       return sessionStorage.getItem('token');
     }
  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    //console.log(!(user === null))
    return !(user === null)
  }
  logOut() {
    sessionStorage.removeItem('username')
  }
}

