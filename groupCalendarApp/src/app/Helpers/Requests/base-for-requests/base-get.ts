import { Injectable, ErrorHandler } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RootObjectError } from '../../Interfaces/object-response-interfaces';




@Injectable({ providedIn: 'root' })

export class BaseGetRequest {
  api = 'http://localhost:3000/';
  constructor(private http: HttpClient,
              private handleError: ErrorHandler) { }

  public baseHttpOneHeaderGet<T extends RootObjectError>(endpoint) {

    const options = {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    };
    const get = this.http.get<T>(this.api + endpoint, options);
    return get;
  }


  baseHttpTwoHeaders<T extends RootObjectError>(endpoint) {

    const options = {
      headers: new HttpHeaders().set('Authorization', sessionStorage.getItem('currentUserToken'))
        .set('Content-Type', 'application/x-www-form-urlencoded')
    };
    const get = this.http.get<T>(this.api + endpoint, options).pipe();
    return get;
  }
}


