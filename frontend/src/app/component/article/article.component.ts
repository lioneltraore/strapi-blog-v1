import { Article, ArticleResponse } from './../../apollo/queries/article/article';
import { Apollo } from 'apollo-angular';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ARTICLE_QUERY } from 'src/app/apollo/queries/article/article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  article: Article = {};
  loading = true;
  errors: any;

  constructor(private apollo: Apollo, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getArticle();
    console.log("-- route id ---", this.route.snapshot.paramMap.get("id"))
  }

  getArticle() {
    this.apollo
      .watchQuery({
        query: ARTICLE_QUERY,
        variables: {
          id: this.route.snapshot.paramMap.get("id")
        }
      })
      .valueChanges.subscribe(({ data, loading, errors }) => {
        const result = data as ArticleResponse;
        this.article = result.article;
        console.log("-- article --", this.article);
        this.loading = loading;
        this.errors = errors;
      });
  }

}
