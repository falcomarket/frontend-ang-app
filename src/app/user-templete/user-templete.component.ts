import { Component , ViewChild} from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { AuthenticationService } from '../services/authentication.service';
import { MatDialog } from '@angular/material/dialog';
import { ProfilDialogComponent } from '../profil-dialog/profil-dialog.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-templete',
  templateUrl: './user-templete.component.html',
  styleUrl: './user-templete.component.css'
})
export class UserTempleteComponent {
  @ViewChild('sidenav') sidenav?: MatSidenav | undefined;
  public username!: string;
  public password!: string;
  public roles!: any;
  public loggedInUser: string | null = null;
  public redirectUrl: string | null = null;
  constructor(private authService : AuthenticationService,
  private router : Router ){ }

  


  ngOnInit(): void {
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

}


