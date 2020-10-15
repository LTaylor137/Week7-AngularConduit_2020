import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ArticlesEnvelope, Article } from "./article";
import { ArticlesService } from "./articles.service";
import { UserService } from "./user.service";
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'angularconduit2020';

  // public user: User;
  public art: Article[];
  public articlesService: ArticlesService;

  constructor(articlesService: ArticlesService, private userService: UserService) {
    this.articlesService = articlesService;
    this.userService = userService;
    // this.user.username = user.username;
  }

  PostInfo() {
    this.articlesService.postAnonArt("CoolName", {
      title: "Nice Title",
      slug: "Slug it to me",
      description: "Give me your best description",
      body: "Great Body",
    });
  }

  performLogin(usernameL: string, emailL: string, passwordL: string) {
    this.userService.userLogin(usernameL, emailL, passwordL);
  }

  performCreateUser(usernameC: string, emailC: string, passwordC: string) {
    this.userService.createUser(usernameC, emailC, passwordC);
  }


}