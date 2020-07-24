import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../_models/user';
import { Observable } from 'rxjs';
import { Response } from '../_models/response';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  headers = { 
    'accept': 'application/json',
    'Content-Type': 'application/json',
  };

  url: string = 'http://localhost/v2';

  constructor(private http: HttpClient) { }

  registerUser(user: User): Observable<Response> {
    console.log('api');
    return this.http.post<Response>(this.url + '/user', user, {headers: this.headers});
  }

  loginUser(username: string, password: string): Observable<Response> {
    console.log('login api');
    const data = '/user/login?' + `username=${username}` + '&' + `password=${password}`;
    return this.http.get<Response>(this.url + data, {headers: this.headers});
  }

  logOut(): Observable<Response> {
    console.log('logout api');
    return this.http.get<Response>(this.url + '/user/logout', {headers: this.headers});
  }
}
