import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA ,MatDialogRef} from '@angular/material/dialog';
import { MatDialogConfig } from '@angular/material/dialog';
import { UserDataStorageService } from '../services/user-data-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profil-dialog',
  templateUrl: './profil-dialog.component.html',
  styleUrl: './profil-dialog.component.css'
})
export class ProfilDialogComponent {
  constructor(private userDataStorageService: UserDataStorageService,
    private dialogRef: MatDialogRef<ProfilDialogComponent>,
    private router: Router,
  ) {}
  loggedInUser = this.userDataStorageService.getUsername();



  logout(): void {
    localStorage.removeItem('username');
    localStorage.removeItem('role');
    localStorage.removeItem('token');
    this.dialogRef.close()
    this.router.navigate(['/login']);
  }
}
