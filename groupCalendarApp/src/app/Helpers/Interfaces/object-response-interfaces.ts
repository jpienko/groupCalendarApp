import {User} from './objects-interfaces';

export class RootObjectError {
  error: number;
}


export interface RootObjectUserList {
  count: number;
  users: User[];
  error: number;
}

export interface RootObject {
  error: number;
  token: string;
}
