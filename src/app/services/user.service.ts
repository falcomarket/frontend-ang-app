import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserDto } from './../interfaces/data'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = 'http://localhost:8080/users';

  constructor(private http: HttpClient) { }

  register(user: UserDto): Observable<any> {
    return this.http.post(`${this.baseUrl}/register`, user);
  }

  login(user: UserDto): Observable<any> {
    return this.http.post(`${this.baseUrl}/authenticate`, user);
  }

  recover(user: UserDto): Observable<any> {
    return this.http.post(`${this.baseUrl}/recover`, user);
  }
}
