import { Component } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css'
})
export class LogoutComponent {
  
  constructor(private authService : AuthenticationService,
    private router : Router ){ }

  public username!: string;
  public password!: string;
  public roles!: any;
  public loggedInUser: string | null = null;
  public redirectUrl: string | null = null;

  logout(): void {
    this.username = '';
    this.roles = [];
    this.loggedInUser = null;
    this.redirectUrl = null;
    
    this.router.navigateByUrl('/');
  }
}
