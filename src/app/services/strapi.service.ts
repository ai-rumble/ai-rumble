import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Competition } from 'src/models/Competition';
import { UserProfile } from 'src/models/user/UserProfile';
import * as Strapi from 'strapi-sdk-javascript';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class StrapiService {
  private URL_PREFIX = environment.strapiUrlPrefix;
  private strapi = new Strapi.default(environment.strapiUrlPrefix);

  constructor(private http: HttpClient) { }

  public uploadFile(file: any, token: string) {
    const formData: FormData = new FormData();
    formData.append('files', file);

    return this.http.post(`${this.URL_PREFIX}upload/`, formData, {
      headers: new HttpHeaders(
        {
          Authorization: token,
        },
      ),
    }).catch((err) => {
      console.log(`ERR during strapi/upload/ POST: ${JSON.stringify(err)}`);

      return Observable.throw(err);
    }).map((res: any) => res);
  }

  public getUserProfileByUsername(username: string) {

    return this.http.get(`${environment.strapiUrlPrefix}userprofiles/?username=${username}`).catch((err) => {
      console.log(`ERR during strapi/userprofiles/?username=${username} GET: ${JSON.stringify(err)}`);

      return Observable.throw(err);
    }).map((res: UserProfile) => res[0]);

  }

  public getAllCompetitions() {

    return this.http.get(`${environment.strapiUrlPrefix}competitions`).catch((err) => {
      console.log(`ERR during strapi/competitions GET: ${JSON.stringify(err)}`);

      return Observable.throw(err);
    }).map((res: Competition[]) => res);
  }
}
