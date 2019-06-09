import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserPostRequests } from 'src/app/Helpers/Requests/post-requests/user/user-post-requests';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  profileForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  constructor(private loginUser: UserPostRequests) { }

  ngOnInit() {
  }

  onSubmit() {
    if (this.profileForm.valid) {
      const value = this.profileForm.value;
      this.loginUser.login(value.username, value.password).subscribe(data => {
        console.log(data);
        if (data.error === 200) {
          sessionStorage.setItem('token', data.token);
        }
      });

    } else {
      console.log('Niepowodzenie');
    }
  }

}
