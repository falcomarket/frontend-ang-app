import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTabsModule } from '@angular/material/tabs';
import { CommonModule } from '@angular/common';

import { AuthGuard } from './services/auth.guard';
import { DualFormComponent } from './dual-form/dual-form.component';
import { AdminTempleteComponent } from './admin-templete/admin-templete.component';
import { MembreComponent } from './membre/membre.component';
import { NouvelleInscriptionComponent } from './membres/nouvelle-inscription/nouvelle-inscription.component';
import { MajInscriptionComponent } from './membres/maj-inscription/maj-inscription.component';
import { CarteMembreComponent } from './membres/carte-membre/carte-membre.component';
import { ContratMembreComponent } from './membres/contrat-membre/contrat-membre.component';
import { ListeMembresComponent } from './membres/liste-membres/liste-membres.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfilDialogComponent } from './profil-dialog/profil-dialog.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { InterceptorService } from './services/interceptor.service';
import { HttpClientModule, HttpClient, HttpErrorResponse, provideHttpClient, HttpFeature,HTTP_INTERCEPTORS} from '@angular/common/http';
import { withFetch } from '@angular/common/http';
import { PasswordInputComponent } from './interfaces/password-input/password-input.component'; // Importez withFetch

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
    ProfilDialogComponent,
    NotFoundComponent,
    DualFormComponent,
    PasswordInputComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserAnimationsModule,
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
    MatTabsModule,
    CommonModule,
    HttpClientModule,
  ],
  providers: [
    HttpClient,   
    provideHttpClient(withFetch()),
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


/* {
  provide: HTTP_INTERCEPTORS,
  useClass: InterceptorService,
   multi: true
    }*/
   