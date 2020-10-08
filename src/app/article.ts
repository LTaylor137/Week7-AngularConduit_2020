export interface ArticlesEnvelope {
    articles: Article[];
    articlesCount: number;
    username: string;
}

export interface ArticleEnvelope {
    articles: Article;
}

export interface CreateAnonymousCommand {
    username: string;
    article: Article;
}

export interface Article {
    articleId?: number; // the ? denotes that the variable can also be NULL
    title: string;
    description: string;
    body: string;
    // slug: string;
}

export interface UserEnvelope {
    username: string;
    email: string;
    password: string;
    token: string;
}
