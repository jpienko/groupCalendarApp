import { Injectable, ErrorHandler } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RootObjectError } from '../../Interfaces/object-response-interfaces';




@Injectable({ providedIn: 'root' })

export class BasePostRequest {
  api = 'http://localhost:3000/';
  constructor(private http: HttpClient,
              private handleError: ErrorHandler) { }

  public baseHttpOneHeader<T extends RootObjectError>(endpoint, body) {
    const options = {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    };
    const post = this.http.post<T>(this.api + endpoint, body, options);
    return post;
  }

  baseHttpTwoHeaders<T extends RootObjectError>(endpoint, body) {

    const options = {
      headers: new HttpHeaders().set('Authorization', sessionStorage.getItem('currentUserToken'))
        .set('Content-Type', 'application/x-www-form-urlencoded')
    };
    const post = this.http.post<T>(this.api + endpoint, body, options).pipe();
    return post;
  }


  public baseHttpOneHeaderGet<T extends RootObjectError>(endpoint) {

    const options = {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    };
    const post = this.http.get<T>(this.api + endpoint, options);
    return post;
  }

}


