import { BaseGetRequest } from '../../base-for-requests/base-get';
import { RootObjectUserList } from 'src/app/Helpers/Interfaces/object-response-interfaces';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })

export class UserGetRequests {
  constructor(private request: BaseGetRequest) {

  }

  public getUserList() {
    const aaa = this.request.baseHttpOneHeaderGet<RootObjectUserList>('user/list');
    aaa.subscribe(data => {
      console.log(data);
    });
  }
}
