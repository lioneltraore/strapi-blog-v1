import { Category } from './../../apollo/queries/category/articles';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Apollo } from 'apollo-angular';
import { Component, OnInit } from '@angular/core';
import { CATEGORY_ARTICLES_QUERY } from 'src/app/apollo/queries/category/articles';
import { Article } from 'src/app/apollo/queries/article/article';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  category: Category = {};
  loading = true;
  errors: any;
  leftArticlesCount: any;
  leftArticles: any[] | undefined = [];
  rightArticles: any[] | undefined = [];
  id: any;

  constructor(private apollo: Apollo, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getCategoryArticles();
  }

  getCategoryArticles() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get("id");
      this.apollo
        .watchQuery({
          query: CATEGORY_ARTICLES_QUERY,
          variables: {
            id: this.id
          }
        })
        .valueChanges.subscribe(({ data, loading, errors }) => {
          this.category = data.category;
          console.log("--- response --",data.category)
          const count = this.category?.data?.attributes?.articles?.data?.length;

          if(count) {
            this.leftArticlesCount = Math.ceil( count/ 5);
          }

          this.leftArticles = this.category?.data?.attributes?.articles?.data?.slice(0, this.leftArticlesCount);
          this.rightArticles = this.category?.data?.attributes?.articles?.data?.slice(
            this.leftArticlesCount,
            this.category?.data?.attributes?.articles?.data?.length
          );
          console.log("-- left articles --", this.leftArticles);
          console.log("-- right articles --", this.rightArticles);
          this.loading = loading;
          this.errors = errors;
        });
    });
  }

}
