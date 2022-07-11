import {
  ArticleData,
  ARTICLES_QUERY,
  ArticleResponseArray,
} from '../../apollo/queries/article/articles';
import { Apollo } from 'apollo-angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss'],
})
export class ArticlesComponent implements OnInit {
  data: ArticleData[] = [];
  loading = true;
  errors: any;
  leftArticlesCount: any;
  leftArticles: ArticleData[] = [];
  rightArticles: ArticleData[] = [];

  constructor(private apollo: Apollo) {}

  ngOnInit(): void {
    this.getArticles();
  }

  getArticles() {
    this.apollo
      .watchQuery({
        query: ARTICLES_QUERY,
      })
      .valueChanges.subscribe(({ data, loading, errors }) => {
        const result = data as ArticleResponseArray;
        this.data = result.articles.data;
        console.log("-- articles --", this.data);
        console.log("-- first item url --", this.data[0].attributes.image.data.attributes.url);
        this.leftArticlesCount = Math.ceil(this.data.length / 5);
        this.leftArticles = this.data.slice(0, this.leftArticlesCount);
        this.rightArticles = this.data.slice(
          this.leftArticlesCount,
          this.data.length
        );
        this.loading = loading;
        this.errors = errors;
      });
  }
}
