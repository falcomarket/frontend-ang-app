import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { RecoveryResponse} from './../interfaces/data';

@Component({
  selector: 'app-dual-form',
  templateUrl: './dual-form.component.html',
  styleUrls: ['./dual-form.component.css']
})
export class DualFormComponent implements OnInit {
  loginForm!: FormGroup;
  signupForm!: FormGroup;
  recoverForm!: FormGroup;
  
  errorHandlingService:any;
  selectedIndex = 0;
  hide = true;
  public errorMessage = '';

  constructor(private fb: FormBuilder, private authService: AuthenticationService, private router: Router) {
    this.initForms();
  }

  ngOnInit(): void {
  }

  initForms(): void {
    this.loginForm = this.fb.group({
      usernameOrEmail: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });

    this.signupForm = this.fb.group({
      usernameOrEmail: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });

    this.recoverForm = this.fb.group({
      userName: ['', [Validators.required]],
      userEmail: ['', [Validators.required, Validators.email]]
    });

   
  }

  
  login(): void {
    this.authService.login(this.loginForm.value.usernameOrEmail, this.loginForm.value.password)
      .subscribe({
        next: (isAuthenticated) => {
          if (isAuthenticated) {
            
            //this.router.navigate(['/admin']);
            this.router.navigate(['/admin/nouvelle']);

          }
        },
        error: (error) => {
          
          this.errorMessage = error.message;
        }
      });
  }



  
  

  signUp(): void {
    if (this.signupForm.valid) {
      const { usernameOrEmail, password } = this.signupForm.value;
      this.authService.signup(usernameOrEmail, password).subscribe({
        next: (response) => {
          this.router.navigate(['/login']); // ou une autre logique appropriée
        },
        error: (error) => {
          const errorMessage = this.errorHandlingService.getErrorMessage(error.status);
          this.errorMessage = errorMessage;
        }
      });
    } else {
      this.errorMessage = 'Veuillez remplir correctement tous les champs.';
    }
  
  }

  recover(): void {
    if (this.recoverForm.valid) {
      const username = this.recoverForm.value.userName;
      const userEmail = this.recoverForm.value.userEmail;
  
      this.authService.recoverPassword(username, userEmail).subscribe({
        next: (response: RecoveryResponse) => {
          console.log('Recovery email sent', response.message);
          this.router.navigate(['/recovery-sent']); // Redirection vers une page de confirmation
        },
        error: (error: HttpErrorResponse) => {
          console.error('Recovery error', error);
          if (error && error.error && error.error.message) {
            this.errorMessage = error.error.message;
          } else {
            this.errorMessage = 'Failed to send recovery email. Please try again.';
          }
          
        }
      });
    } else {
      this.errorMessage = 'Please provide a valid email address and username.';
    }
  }


  onSubmit(): void {
    switch (this.selectedIndex) {
      case 0: this.login(); break;
      case 1: this.signUp(); break;
      case 2: this.recover(); break;
      default: break;
    }
  }

  changeTab(index: number): void {
    this.selectedIndex = index;
    this.errorMessage = ''; // Clear error message on tab change
  }
  
  
}





















/*

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-dual-form',
  templateUrl: './dual-form.component.html',
  styleUrls: ['./dual-form.component.css']
})
export class DualFormComponent implements OnInit {

  loginForm: FormGroup;
  signupForm: FormGroup;
  restoreForm: FormGroup;
  selectedIndex = 0;
  hide = true;
  public errorMessage = '';

  constructor(private fb: FormBuilder, private authService: AuthenticationService, private router: Router) {
    this.loginForm = this.fb.group({
      usernameOrEmail: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.signupForm = this.fb.group({
      usernameOrEmail: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });

    this.restoreForm = this.fb.group({
      userEmail: ['', [Validators.required, Validators.email]]
    });
  }

  ngOnInit(): void {
  }
  login(username: string, password: string): Observable<boolean> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<{ isAuthenticated: boolean }>(
      this.apiUrl,
      { username, password },
      { headers }
    ).pipe(
      map(response => response.isAuthenticated),
      catchError(error => {
        console.error('Erreur lors de la connexion:', error);
        return throwError(() => new Error('Erreur lors de la connexion avec des détails supplémentaires'));
      })
    );
  }
  
  onSubmit(): void {
    this.login();
  }

  changeTab(index: number): void {
    this.selectedIndex = index;
  }

  signUp(): void {
    if (this.signupForm.valid) {
      // Logique d'inscription
    } else {
      this.errorMessage = 'Veuillez remplir correctement tous les champs du formulaire d’inscription.';
    }
  }

  recover(): void {
    if (this.restoreForm.valid) {
      // Logique de récupération de mot de passe
    } else {
      this.errorMessage = 'Veuillez fournir une adresse email valide.';
    }
  }
}




*/






/*
  login() {
    const usernameOrEmail = this.loginForm.value['usernameOrEmail'];
    const password = this.loginForm.value['password'];

    this.authService.authenticate(usernameOrEmail, password).subscribe({
      next: (response) => console.log('Login successful', response),
      error: (error) => console.log('Login failed', error)
    });
  }*/
  /*
  login(): void {
    if (this.loginForm.valid) {
      const usernameOrEmail = this.loginForm.value['usernameOrEmail'];
      const password = this.loginForm.value['password'];
      console.log(usernameOrEmail, password);
      
      // Appel à la méthode login du service d'authentification
      this.authService.login(usernameOrEmail, password).subscribe({
        next: () => {
          
          // L'authentification réussie sera gérée par le flux is_authenticated$
          this.router.navigateByUrl('/admin');
        },
        error: (error) => {
          this.router.navigateByUrl('/login');
        }
      });
    
    }
  }
  
  onSubmit(): void {
    this.login();
  }

changeTab(Index:number):void{
  this.selectedIndex=Index;
};

signUp():void{

}
recover():void{*/