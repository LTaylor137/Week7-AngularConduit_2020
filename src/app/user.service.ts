import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserLoginCommand, User, CreateUserCommand } from './user';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  user: User;
  loading: boolean = false;

  constructor(
    private httpClient: HttpClient
  ) { }

  // 
  // 
  // 

  userLogin(email: string, password: string) {
    let request = this.httpClient.post<UserLoginCommand>("https://swindev.me/users/login",
      {
        user: {
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
        if (error.status == 401) {
          alert("Login failed, wrong username or password.")
        }
      }
    );

  }

  createUser(email: string, password: string) {
    let request = this.httpClient.post<CreateUserCommand>("http://swindev.me/users",
      {
        user: {
          email: email,
          password: password
        }
      } as CreateUserCommand);

    request.subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log("Error from http://swindev.me", error);
        }
    );

  }

}


