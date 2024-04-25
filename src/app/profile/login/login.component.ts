
/*
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpErrorResponse} from '@angular/common/http';
import { Observable, of ,throwError} from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { BehaviorSubject, } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  // Mise à jour de l'URL de l'API pour pointer vers le chemin correct

  private apiUrl = 'http://localhost:8080/users/authenticate';  // Nouvelle URL de l'API backend

  public roles: string[] = [];
  public loggedInUser: string | null = null;

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<boolean> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<{ isAuthenticated: boolean }>(
      this.apiUrl,
      { username, password },
      { headers }
    ).pipe(
      map(response => response.isAuthenticated),
      catchError(error => {
        let errorMessage = "Authentication failed. Please check your credentials and try again.";
        if (error.status === 401) {
          errorMessage = "Unauthorized: Incorrect username or password.";
        }
        return throwError(new Error(errorMessage));
      })
    );
  }

isLoggedIn(): boolean {
  return !!localStorage.getItem('token');  // Vérifie si le token est stocké
}

logout(): void {
  localStorage.removeItem('token');  // Supprimer le token du localStorage
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


/*
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpErrorResponse} from '@angular/common/http';
import { Observable, of ,throwError} from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { BehaviorSubject, } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  // Mise à jour de l'URL de l'API pour pointer vers le chemin correct

  private apiUrl = 'http://localhost:8080/users/authenticate';  // Nouvelle URL de l'API backend

  public roles: string[] = [];
  public loggedInUser: string | null = null;

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<boolean> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<{ isAuthenticated: boolean }>(
      this.apiUrl,
      { username, password },
      { headers }
    ).pipe(
      map(response => response.isAuthenticated),
      catchError(error => {
        let errorMessage = "Authentication failed. Please check your credentials and try again.";
        if (error.status === 401) {
          errorMessage = "Unauthorized: Incorrect username or password.";
        }
        return throwError(new Error(errorMessage));
      })
    );
  }

isLoggedIn(): boolean {
  return !!localStorage.getItem('token');  // Vérifie si le token est stocké
}

logout(): void {
  localStorage.removeItem('token');  // Supprimer le token du localStorage
}
getUserRole(): string {
  const userRole = this.roles && this.roles.length > 0 ? this.roles[0] : 'guest';
  if (typeof userRole !== 'string') {
    throw new Error('User role is not a string');
  }
  return userRole;
}

}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpErrorResponse} from '@angular/common/http';
import { Observable, of ,throwError} from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { BehaviorSubject, } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  // Mise à jour de l'URL de l'API pour pointer vers le chemin correct

  private apiUrl = 'http://localhost:8080/users/authenticate';  // Nouvelle URL de l'API backend

  public roles: string[] = [];
  public loggedInUser: string | null = null;

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<boolean> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<{ isAuthenticated: boolean }>(
      this.apiUrl,
      { username, password },
      { headers }
    ).pipe(
      map(response => response.isAuthenticated),
      catchError(error => {
        let errorMessage = "Authentication failed. Please check your credentials and try again.";
        if (error.status === 401) {
          errorMessage = "Unauthorized: Incorrect username or password.";
        }
        return throwError(new Error(errorMessage));
      })
    );
  }

isLoggedIn(): boolean {
  return !!localStorage.getItem('token');  // Vérifie si le token est stocké
}

logout(): void {
  localStorage.removeItem('token');  // Supprimer le token du localStorage
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
/*
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  public loginForm!: FormGroup;
  hide = true;
  username='';
  roles: any ;
  public errorMessage = '';
 

  constructor(private fb : FormBuilder, private authService : AuthenticationService,
    private router : Router ){ }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      usernameOrEmail: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  
  login(): void {
    if (this.loginForm.valid) {
      const usernameOrEmail = this.loginForm.get('usernameOrEmail')!.value;
      const password = this.loginForm.get('password')!.value;
  
      this.authService.login(usernameOrEmail, password).subscribe(auth => {
        if (auth) {
        //  this.router.navigateByUrl(this.authService.redirectUrl!)
          this.router.navigateByUrl('/admin');
        
        } else {
          this.errorMessage = 'Nom d\'utilisateur ou mot de passe incorrect';
        }
      });
    }
  }

  get usernameOrEmail() {
    return this.loginForm.get('usernameOrEmail');
  }
  
  get password() {
    return this.loginForm.get('password');
  }
  
}*/
