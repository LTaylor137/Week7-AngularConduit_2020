import { Injectable } from '@angular/core';
import { ArticlesEnvelope, Article, ArticleEnvelope, CreateAnonymousCommand } from './article';
import { HttpClient } from '@angular/common/http';
// import { Token } from '@angular/compiler/src/ml_parser/lexer';

@Injectable({
  providedIn: 'root'
})

export class ArticlesService {

  public articlesCount: number;
  public articles: Article[] = [];
  public loading: boolean = false;
  public loaded: boolean = false;
  public username: string;

  constructor(private httpClient: HttpClient) {
    this.httpClient = httpClient;
  }


  // the below will go and get and ArticlesEnvelope from the server and store it locally
  // ("https://swindev.me/articles");
  // ("https://conduit.productionready.io/api/articles")


  get() {
    let request = this.httpClient.get<ArticlesEnvelope>("https://swindev.me/articles");
    this.loading = true;
    this.loaded = false;

    request.subscribe((response) => {
      this.articles = response.articles;
      this.articlesCount = response.articlesCount;
      this.loading = false;
      this.loaded = true;
      this.username = response.username;
      console.log(response);
    },

      (error) => {
        console.log("Error from https://swindev.me/articles", error);
      }
    );
  }

  postAnonArt(username: string, article: Article) {
    //this line sets up the request, similar to a commit or stage.
    let request = this.httpClient.post<ArticleEnvelope>("https://swindev.me/articles/anonymous", {
      username: username,
      article: article
    } as CreateAnonymousCommand);
    //this is like a push
    request.subscribe((response) => {
      this.articles = [...this.articles, response.articles];
      this.get();
    });
  }

}