import { Route, Routes } from '@angular/router';
import { CompetitionsComponent } from './competitions/competitions.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { SignupComponent } from './signup/signup.component';
import { UserprofileComponent } from './userprofile/userprofile.component';

const indexRoute: Route = {
  path: '',
  redirectTo: '/home',
  pathMatch: 'full',
};

const fallbackRoute: Route = {
  path: '**',
  redirectTo: '/home',
  pathMatch: 'full',
};

export const routes: Routes = [
  {
    path: 'login', component: LoginComponent,
  },
  {
    path: 'signup', component: SignupComponent,
  },
  {
    path: 'logout', component: LogoutComponent,
  },
  {
    path: 'home', component: HomeComponent,
  },
  {
    path: 'profile', component: UserprofileComponent,
  },
  {
    path: 'profile/:username', component: UserprofileComponent,
  },
  {
    path: 'competitions', component: CompetitionsComponent,
  },
  indexRoute,
  fallbackRoute,
];
