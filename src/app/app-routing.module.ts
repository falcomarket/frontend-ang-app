import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NouvelleInscriptionComponent } from './membres/nouvelle-inscription/nouvelle-inscription.component';
import { MajInscriptionComponent } from './membres/maj-inscription/maj-inscription.component';
import { ContratMembreComponent } from './membres/contrat-membre/contrat-membre.component';
import { CarteMembreComponent} from './membres/carte-membre/carte-membre.component';
import { ListeMembresComponent } from './membres/liste-membres/liste-membres.component';
//import { LoginComponent } from './profile/login/login.component';
//import { LogoutComponent } from './profile/logout/logout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminTempleteComponent } from './admin-templete/admin-templete.component';
import { MembreComponent } from './membre/membre.component';
import { AuthGuard } from './services/auth.guard'; 
import { NotFoundComponent } from './not-found/not-found.component';
import { DualFormComponent } from './dual-form/dual-form.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { path: 'admin',
    component: AdminTempleteComponent,
    canActivate:[AuthGuard],data: { roles: ['admin','user'] }, children: [
      { path: 'home', component: HomeComponent },
      { path: 'nouvelle', component: NouvelleInscriptionComponent , data: { roles: ['admin'] }},
      { path: 'edit', component: MajInscriptionComponent , data: { roles: ['admin'] } },
      { path: 'contrat', component: ContratMembreComponent },
      { path: 'carte', component: CarteMembreComponent },
      { path: 'liste', component: ListeMembresComponent , data: { roles: ['admin'] }},
      { path: 'dashboard', component: DashboardComponent},
      { path: 'membre', component: MembreComponent },
      { path: 'profil', component: ProfileComponent}
    ]
  },

  
  
  { path: 'not-found', redirectTo: '/login', pathMatch: 'full' },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: DualFormComponent},
  { path: '**', redirectTo: '/not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
