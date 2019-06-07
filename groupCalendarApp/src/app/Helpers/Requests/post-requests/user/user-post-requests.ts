import { BasePostRequest } from '../../base-for-requests/base-post';
import { RootObject } from 'src/app/Helpers/Interfaces/object-response-interfaces';
import { User } from 'src/app/Helpers/Interfaces/objects-interfaces';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })

export class UserPostRequests {

  constructor(private request: BasePostRequest) { }

  public signup(login: string, userpassword: string) {
    const body = {
      username: login,
      password: userpassword
    };
    const aaa = this.request.baseHttpOneHeader<RootObject>('user/signup', body);
    aaa.subscribe(data => {
      console.log(data);

    });
  }

  public login(login: string, userpassword: string) {
    const body: User = {
      username: login,
      password: userpassword,
      _id: ''
    };

    const aaa = this.request.baseHttpOneHeader<RootObject>('user/login', body);
    aaa.subscribe(data => {
      console.log(data);

    });
  }
}
