import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { UserGetRequests } from './Helpers/Requests/get-requests/user/user-get-requests';
import { UserPostRequests } from './Helpers/Requests/post-requests/user/user-post-requests';
import { BaseGetRequest } from './Helpers/Requests/base-for-requests/base-get';
import { BasePostRequest } from './Helpers/Requests/base-for-requests/base-post';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'register',
        component: RegisterComponent,
      },
    ])
  ],
  providers: [
    UserGetRequests, UserPostRequests, BaseGetRequest, BasePostRequest],
  bootstrap: [AppComponent]
})
export class AppModule { }
