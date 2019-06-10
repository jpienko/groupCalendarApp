import { BasePostRequest } from '../../base-for-requests/base-post';
import { RootObject, RootObjectSignup } from 'src/app/Helpers/Interfaces/object-response-interfaces';
import { User } from 'src/app/Helpers/Interfaces/objects-interfaces';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })

export class UserPostRequests {

  constructor(private request: BasePostRequest) { }

  public signup(login: string, userpassword: string) {
    const body: User = {
      username: login,
      password: userpassword,
      _id: ''
    };
    return this.request.baseHttpOneHeader<RootObjectSignup>('user/signup', body);
  }

  public login(login: string, userpassword: string) {
    const body: User = {
      username: login,
      password: userpassword,
      _id: ''
    };

    return this.request.baseHttpOneHeader<RootObject>('user/login', body);
  }
}
