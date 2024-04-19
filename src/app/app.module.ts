import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AdminTempleteComponent } from './admin-templete/admin-templete.component';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon'; 
import { MatListModule } from '@angular/material/list'; 
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MembreComponent } from './membre/membre.component';
import { NouvelleInscriptionComponent } from './membres/nouvelle-inscription/nouvelle-inscription.component';
import { MajInscriptionComponent } from './membres/maj-inscription/maj-inscription.component';
import { CarteMembreComponent } from './membres/carte-membre/carte-membre.component';
import { ContratMembreComponent } from './membres/contrat-membre/contrat-membre.component';
import { ListeMembresComponent } from './membres/liste-membres/liste-membres.component';
import { HomeComponent } from './home/home.component';
import { MatCardModule } from '@angular/material/card';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './profile/login/login.component';
import { LogoutComponent } from './profile/logout/logout.component'
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';
import { ProfilDialogComponent } from './profil-dialog/profil-dialog.component';
import { AuthenticationService } from './services/authentication.service';
import { AuthGuard } from './services/auth.guard';
import { NotFoundComponent } from './not-found/not-found.component';
import { UserTempleteComponent } from './user-templete/user-templete.component'; 
@NgModule({
  declarations: [
    AppComponent,
    AdminTempleteComponent,
    MembreComponent,
    NouvelleInscriptionComponent,
    MajInscriptionComponent,
    CarteMembreComponent,
    ContratMembreComponent,
    ListeMembresComponent,
    HomeComponent,
    DashboardComponent,
    ProfileComponent,
    LoginComponent,
    LogoutComponent,
    AdminTempleteComponent,
    ProfilDialogComponent,
    NotFoundComponent,
    UserTempleteComponent,
    ],
  
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatDividerModule,
    MatTooltipModule,
    MatDialogModule,
  
  ],
  
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    AuthGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
