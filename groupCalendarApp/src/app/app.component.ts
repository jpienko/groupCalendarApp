import { Component, OnInit } from '@angular/core';
import { UserGetRequests } from './Helpers/Requests/get-requests/user/user-get-requests';
import { UserPostRequests } from './Helpers/Requests/post-requests/user/user-post-requests';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'groupCalendarApp';

  constructor(private getList: UserGetRequests, private postUser: UserPostRequests) { }


  ngOnInit() {
    this.getList.getUserList();
    this.postUser.login('pinezzka', 'aaa');
    // this.signup();
    // this.login();
    // this.get();
  }



}





