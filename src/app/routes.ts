import { Route, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { SignupComponent } from './signup/signup.component';

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
  indexRoute,
  fallbackRoute,
];
