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
          this.router.navigateByUrl(this.authService.redirectUrl!)
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
  
}
