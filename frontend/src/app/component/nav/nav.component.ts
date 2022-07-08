import { Component, OnInit } from '@angular/core';
import { Apollo } from "apollo-angular";
import gql from "graphql-tag";
import { Subscription } from "rxjs";

import * as categoriesQuery from "../../apollo/queries/category/categories";

const { CATEGORIES_QUERY } = categoriesQuery;

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {



  constructor() { }

  ngOnInit(): void {
  }

}
