import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserLoginCommand, User, CreateUserCommand } from './user';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  user: User;
  loading: boolean = false;
 
  email: string;
  password: string;

  constructor(
    private httpClient: HttpClient
  ) { }

  // 
  // 
  // 

  userLogin(username: string, email: string, password: string) {
    let request = this.httpClient.post<UserLoginCommand>("https://swindev.me/users/login",
      {
        user: {
          username: username,
          email: email,
          password: password
        }
      } as UserLoginCommand
    );

    request.subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        if (error.status == 422) {
          alert("Login Error: Username, email, or password cannot be blank")
        } else if (error.status == 401) {
          alert("Login failed, wrong username or password.")
        }
      }
    );

  }


  createUser(username: string, email: string, password: string) {
    let request = this.httpClient.post<CreateUserCommand>("http://swindev.me/users",
    {
      user: {
        username: username,
        email: email,
        password: password
      }
    } as CreateUserCommand);

    request.subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        if (error.status == 422) {
          alert("Create Error: Username, email, or password cannot be blank")
        } else if (error.status == 400) {
          alert("Error. Possible cause: username already exists.")
        }
      }
    );

  }

}


