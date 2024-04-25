
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpErrorResponse} from '@angular/common/http';
import { Observable, of ,throwError} from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { BehaviorSubject, } from 'rxjs';
import { RecoveryResponse} from './../interfaces/data';
import { Router } from '@angular/router';
import { UserDataStorageService } from './user-data-storage.service';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  

  private loginUrl = 'http://localhost:8080/users/authenticate'; 

  public roles: string[] = [];
  public loggedInUser: string | null = null;

  constructor(private http: HttpClient,private router: Router,private userDataStorageService: UserDataStorageService) {}
  

  login(username: string, password: string): Observable<boolean> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<{ isAuthenticated: boolean, token: string, username: string ,role: string}>(
      this.loginUrl,
      { username, password },
      { headers }
    ).pipe(
      map(response => {
        if (response.isAuthenticated) {
          //this.router.navigate(['/admin']);
          this.userDataStorageService.setUserData(response.username, response.role, response.token);
          //this.router.navigate(['nouvelle']);
        }
        return response.isAuthenticated;
      }),      
      catchError(error => {
        let errorMessage = "Authentication failed. Please check your credentials and try again.";
        if (error.status === 401) {
          errorMessage = "Unauthorized: Incorrect username or password.";
        }
        return throwError(new Error(errorMessage));
      })
    );
  }
/*
private setUserInfo(username: string, role: string, token: string): void {
  // Stockage du nom d'utilisateur, du rôle et du token dans le stockage local
  localStorage.setItem('username', username);
  localStorage.setItem('role', role);
  localStorage.setItem('token', token);
}*/
  
  signup(username: string, password: string): Observable<any> {
    const url = 'http://localhost:8080/users/register'; 
    return this.http.post(url, { username, password });
  }

  recoverPassword(username: string, email: string): Observable<any> {
    const apiUrl = 'http://localhost:8080/users'
    return this.http.post<any>(`${apiUrl}/recover-password`, { username, email })
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }

isLoggedIn(): boolean {
  return !!this.userDataStorageService.getToken();
  //!!localStorage.getItem('token');  // Vérifie si le token est stocké
}

logout(): void {
  this.userDataStorageService.removeUserData;
  //localStorage.removeItem('token');  // Supprimer le token du localStorage
}

}

/*
private username: string | undefined;
  private role: string[] | undefined;

 

  // Méthodes pour récupérer le nom d'utilisateur et le rôle
  getUsername(): string | undefined {
    return this.username;
  }

  getRole(): string[] | undefined {
    return this.role;
  }

/*
  getUsernameFromLocalStorage(): string {
    const usernameFromStorage = localStorage.getItem('username');
    return usernameFromStorage !== null ? usernameFromStorage : '';
  }
  
  getRoleFromLocalStorage(): string {
    const roleFromStorage = localStorage.getItem('role');
    return roleFromStorage !== null ? roleFromStorage : '';
  }*/
  






/*
signup(userDto: UserDto): Observable<UserDto> {
    return this.http.post<UserDto>(`${this.apiUrl}/register`, userDto)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    let errorMessage = 'An unknown error occurred!';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${error.error.message}`;
    } else {
      errorMessage = `Server returned code ${error.status}, body was: ${error.message}`;
    }
    console.error(errorMessage);
    return throwError(() => new Error(errorMessage));
  }
*/









/*
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
*/