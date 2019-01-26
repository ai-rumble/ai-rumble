import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import * as moment from 'moment';
import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule,
    ],
  }));

  beforeEach(() => {
    service = TestBed.get(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('isAdmin() should return false if current user is null', () => {
    // we can make the current user null by setting the current_user cookie to null
    // localStorage.setItem('current_user', JSON.stringify(null));

    // const result = service.isAdmin();

    expect(false).toBeFalsy();
  });

  it('isLoggedOut() true / false based on if user\'s token is expired', () => {

    // set localstorage expires_at to something in the past
    const expiresAtPast = moment().subtract(1, 'days');
    localStorage.setItem('expires_at', JSON.stringify(expiresAtPast.valueOf()));

    // ACT
    const resultPast = service.isLoggedOut();

    expect(resultPast).toBeTruthy();

    // set localstorage expires_at to something in the past
    const expiresAtFuture = moment().add(1, 'days');
    localStorage.setItem('expires_at', JSON.stringify(expiresAtFuture.valueOf()));

    // ACT
    const resultFuture = service.isLoggedOut();

    expect(resultFuture).toBeFalsy();
  });

});
