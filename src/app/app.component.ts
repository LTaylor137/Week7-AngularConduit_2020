import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ArticlesEnvelope, Article } from "./article";
import { ArticlesService } from "./articles.service";
import { UserService } from "./user.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'angularconduit2020';

  public art: Article[];
  public articlesService: ArticlesService;

  constructor(articlesService: ArticlesService, private userService: UserService) {
    this.articlesService = articlesService
    this.userService = userService;
  }

  PostInfo() {
    this.articlesService.postAnonArt("CoolName", {
      title: "Cool Title",
      description: "give me your best description",
      body: "What a great body",
    });
  }

  performLogin() {
    this.userService.userLogin("string", "string");
  }

  createUser() {
    this.userService.createUser("string", "string");
  }


}