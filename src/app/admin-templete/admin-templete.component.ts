import { Component , ViewChild} from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { AuthenticationService } from '../services/authentication.service';
import { MatDialog } from '@angular/material/dialog';
import { ProfilDialogComponent } from '../profil-dialog/profil-dialog.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-templete',
  templateUrl: './admin-templete.component.html',
  styleUrl: './admin-templete.component.css'
})
export class AdminTempleteComponent {
  @ViewChild('sidenav') sidenav?: MatSidenav | undefined;

  isAdmin: boolean = false;

  public username!: string;
  public password!: string;
  public roles!: any;
  
  public loggedInUser: string | null = null;
  public redirectUrl: string | null = null;
  constructor(public authService : AuthenticationService,
  private router : Router ){ }

  
  

  ngOnInit(): void {
    const userRole = this.authService.getUserRole() || 'guest';
    this.isAdmin = ['admin', 'anotherRole'].includes(userRole);
    this.loggedInUser = this.authService.loggedInUser;
  }

  
 

  toggleSidenav() {
    this.sidenav?.toggle();
  }

  profil(): void {
    
   
  }
  
  logout(): void {
    this.username = '';
    this.roles = [];
    this.loggedInUser = null;
    this.redirectUrl = null;
    
    this.router.navigateByUrl('/');
  }

  getUserRole(): string {
    const userRole = this.roles && this.roles.length > 0 ? this.roles[0] : 'guest';
    if (typeof userRole !== 'string') {
      throw new Error('User role is not a string');
    }
    return userRole;
  }
}


