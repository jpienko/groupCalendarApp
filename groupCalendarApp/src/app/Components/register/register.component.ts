import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserPostRequests } from 'src/app/Helpers/Requests/post-requests/user/user-post-requests';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  newProfileForm = new FormGroup({
    username: new FormControl('', Validators.required),
    signature: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    repeatPassword: new FormControl('', Validators.required),
  });

  constructor(private loginUser: UserPostRequests) { }

  ngOnInit() {
  }

  onSubmit() {
    this.registerNewProfile();
  }

  private registerNewProfile() {
    if (this.newProfileForm.valid) {
      const value = this.newProfileForm.value;

      if (value.password === value.repeatPassword) {
        // this.loginUser.signup(value.username, value.password).subscribe(data => {
        //   if (data.error === 201) {
        //     console.log(data);
        //   }
        // });
      } else {
        console.log('podane hasła różnią się');
      }

    } else {
      console.log('Niepowodzenie');
    }
  }
}
