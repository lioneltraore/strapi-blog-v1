import { CategoryData, CategoryResponseArray } from './../../apollo/queries/category/categories';
import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { CATEGORIES_QUERY } from '../../apollo/queries/category/categories';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  data: CategoryData[] = [];
  loading = true;
  errors: any;

  constructor(private apollo: Apollo) {}

  ngOnInit() {
    this.getCategories();
  }

  getCategories() {
    this.apollo
      .watchQuery({
        query: CATEGORIES_QUERY,
      })
      .valueChanges.subscribe(({data, loading, errors}) => {// CategoryResponseArray
        console.log('-- result --', data);
        const result = data as CategoryResponseArray;
        this.data = result.categories.data;
        this.loading = loading;
        this.errors = errors;
      });
  }
}
