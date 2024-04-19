import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  public username: string | null = null;
  public password!: string;
  public roles: string[] = [];
  public loggedInUser: string | null = null;
  public redirectUrl: string | null = null;

  
  private users = [
    { username: 'admin', password: '4321', roles: ['admin'] },
    { username: 'user1', password: '1234', roles: ['user'] },
    { username: 'user2', password: '2345', roles: ['user'] },
    { username: 'user3', password: '3456', roles: ['user'] }
  ];
  constructor(private http: HttpClient) { }

  login(usernameOrEmail: string, password: string): Observable<boolean> {
   
   
    const user = this.users.find(u => u.username === usernameOrEmail && u.password === password);
    
    if (user) {
      this.username = user.username;
      this.roles = user.roles;
      this.loggedInUser = this.username;
      return new Observable<boolean>(observer => {
        observer.next(true);  // Authentification réussie
        observer.complete();
        console.log('Authentification réussie');
      });
    } else {
      return new Observable<boolean>(observer => {
        observer.next(false);  // Authentification échouée
        observer.complete();
        console.log('Authentification echoue');
      });
    }
   
  }

  isLoggedIn(): boolean {
    return !!this.username;
  }

  getUserRole(): string {
    const userRole = this.roles && this.roles.length > 0 ? this.roles[0] : 'guest';
    if (typeof userRole !== 'string') {
      throw new Error('User role is not a string');
    }
    return userRole;
  }
 
}
