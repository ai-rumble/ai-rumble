import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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
}
