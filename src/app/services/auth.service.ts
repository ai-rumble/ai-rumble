import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { Observable } from 'rxjs/Rx';
import { LoginPayload } from 'src/models/user/LoginPayload';
import { SignUpPayload } from 'src/models/user/SignUpPayload';
import { User } from 'src/models/user/User';
import { UserProfile } from 'src/models/user/UserProfile';
import { UserProfilePayload } from 'src/models/user/UserProfilePayload';
import { environment } from '../../environments/environment';
import { StrapiService } from './strapi.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private URL_PREFIX = environment.loginUrlPrefix;

  error: string = null;

  constructor(private http: HttpClient, private strapi: StrapiService) { }

  login(username: string, password: string): Observable<any> {
    const payload: LoginPayload = new LoginPayload(username, password);
    console.log(payload);
    return this.http.post(`${this.URL_PREFIX}`, payload).catch((err) => {
      console.log(`ERR during strapi/auth/local POST: ${JSON.stringify(err)}`);

      return Observable.throw(err);
    }).do((res: User) => {
      console.log(`Got ${JSON.stringify(res)} from login attempt`);

      this.setSession(res);
    }).map((res: User) => res);
  }

  signUp(username: string, password: string, email: string): Observable<any> {
    const payload: SignUpPayload = new SignUpPayload(username, password, email);

    return this.http.post(`${environment.strapiUrlPrefix}auth/local/register`, payload).catch((err) => {
      console.log(`ERR during strapi/auth/local/register POST: ${JSON.stringify(err)}`);

      return Observable.throw(err);
    }).do((res: User) => {
      console.log(`Got ${JSON.stringify(res)} from signup attempt`);

      this.setSession(res);

    }).catch((err: any) => {
      console.log(`Error while setting session & creating userProfile: ${err}`);

      return Observable.throw(err);

    }).map((res: User) => res);
  }

  public createUserProfile(username: string, email: string, user: string, image: null) {
    const payload: UserProfilePayload = new UserProfilePayload(username, email, user);

    console.log(`Trying to create new userprofile with payload: ${JSON.stringify(payload)}`);

    return this.http.post(`${environment.strapiUrlPrefix}userprofiles`, payload).catch((err) => {
      console.log(`ERR during strapi/userprofiles POST: ${JSON.stringify(err)}`);

      return Observable.throw(err);
    }).do((res: UserProfile) => {
      console.log(`Got ${JSON.stringify(res)} from new userprofile attempt`);

    });
  }

  private setSession(authResult: any) {
    const expiresAt = moment().add(1, 'days');

    localStorage.setItem('id_token', authResult.jwt);
    localStorage.setItem('expires_at', JSON.stringify(expiresAt.valueOf()));
    localStorage.setItem('current_user', JSON.stringify(authResult));
  }

  logout() {
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    localStorage.removeItem('current_user');
  }

  public isLoggedIn() {
    return moment().isBefore(this.getExpiration());
  }

  isLoggedOut() {
    return !this.isLoggedIn();
  }

  getExpiration() {
    const expiration = localStorage.getItem('expires_at');
    const expiresAt = JSON.parse(expiration);
    return moment(expiresAt);
  }

  public canAddBlogPosts(): Boolean {
    const user: User = this.getCurrentUser();
    return user.user.role.name === 'Administrator';
  }

  public isAdmin(): Boolean {
    const user: User = this.getCurrentUser();

    if(user != null) {
      return user.user.role.name === 'Administrator';
    }

    return false;
  }

  public getCurrentUser(): User {
    const author: User = JSON.parse(localStorage.getItem('current_user'));
    return author;
  }
}
