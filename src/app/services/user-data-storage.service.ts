import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDataStorageService {
  private username: string = '';
  private role: string = '';
  private token: string = '';

  constructor() { }

  setUserData(username: string, role: string, token: string): void {
    this.username = username;
    this.role = role;
    this.token = token;
  }
  removeUserData(): void {
    this.username ='';
    this.role = '';
    this.token = '';
  }
  getUsername(): string {
    return this.username;
  }

  getRole(): string {
    return this.role;
  }

  getToken(): string {
    return this.token;
  }
}
