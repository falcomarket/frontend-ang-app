import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-profil-dialog',
  templateUrl: './profil-dialog.component.html',
  styleUrl: './profil-dialog.component.css'
})
export class ProfilDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }
}
