import { Component , ViewChild} from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { AuthenticationService } from '../services/authentication.service';
import { MatDialog } from '@angular/material/dialog';
import { ProfilDialogComponent } from '../profil-dialog/profil-dialog.component';
import { Router } from '@angular/router';
import { MatDialogConfig } from '@angular/material/dialog';
import { UserDataStorageService } from '../services/user-data-storage.service';
import { MatDialogRef } from '@angular/material/dialog';
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
  public role: any;
  
  public loggedInUser: string | null = null;
  public loggedInRole: string | null = null;
  
  public redirectUrl: string | null = null;
 
  
  
  
  dialogConfig: MatDialogConfig;
  constructor(
    private router: Router,
    public authService: AuthenticationService,
    private userDataStorageService: UserDataStorageService, 
    private dialog: MatDialog,
    
    ) 
    {
      this.dialogConfig = new MatDialogConfig();
      this.dialogConfig.position = { right: '0' };
   }
   openDialog(): void {
    this.dialog.open(ProfilDialogComponent, this.dialogConfig);
  }
    
  closeDialog(): void {
   //this.dialogRef.close()
  }


  ngOnInit(): void {
      // Récupérer le nom d'utilisateur à partir du stockage local
      this.loggedInUser = this.userDataStorageService.getUsername();
      //localStorage.getItem('username');
      //this.authService.getUsernameFromLocalStorage();
      this.loggedInRole = this.userDataStorageService.getRole();
      //localStorage.getItem('role');
      //this.authService.getRoleFromLocalStorage();
      this.isAdmin = ['admin', 'anotherRole'].includes(this.loggedInRole);

    }
 
  toggleSidenav() {
    this.sidenav?.toggle();
  }

  profil(): void {

  }
  
  logout(): void {
    localStorage.removeItem('username');
    localStorage.removeItem('role');
    localStorage.removeItem('token');
  }


  
}



  
/*import { Component, ViewChild, Inject, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { AuthenticationService } from '../services/authentication.service';
import { MatDialog } from '@angular/material/dialog';
import { ProfilDialogComponent } from '../profil-dialog/profil-dialog.component';
import { Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID } from '@angular/core';
import { User } from '../interfaces/data';

@Component({
  selector: 'app-admin-templete',
  templateUrl: './admin-templete.component.html',
  styleUrls: ['./admin-templete.component.css']
})
export class AdminTempleteComponent  {
  
  @ViewChild('sidenav') sidenav?: MatSidenav;

  isAdmin: boolean = false;

  public loggedInUser: User | null = null;
  public redirectUrl: string | null = null;

  constructor(
    public authService: AuthenticationService,
    @Inject(PLATFORM_ID) private platformId: Object,
    private router: Router,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.authService.isLoggedIn$.subscribe(
      isLoggedIn => {
        if (isLoggedIn) {
          this.authService.currentUser$.subscribe(user => {
            this.loggedInUser = user;
            const userRoles = user?.roles || [];
            const userRole = this.authService.getUserRole(userRoles) || 'guest';
            this.isAdmin = ['admin', 'anotherRole'].includes(userRole);
          });
        } else {
          this.router.navigateByUrl('/login');
        }
      }
    );
  }

  toggleSidenav(): void {
    this.sidenav?.toggle();
  }

  openProfilDialog(): void {
    this.dialog.open(ProfilDialogComponent, {
      width: '400px',
      data: this.loggedInUser
    });
  }

  logout(): void {
    this.authService.logout();
  }


getUserRole(roles: string[]): string | null {
  // Logic to determine user role
  // For simplicity, returning the first role
  return roles.length > 0 ? roles[0] : null;
}
}*/
