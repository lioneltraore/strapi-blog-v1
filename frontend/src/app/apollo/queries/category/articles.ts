import { Article } from './../article/article';
import { gql } from 'apollo-angular';

export interface CategoryResponse {
  category: Category;
}

export interface Category {
  data?: {
    id: string;
    attributes?: {
      name?: string;
      articles?: {
        data: Article[];
      }
      // articles?: {
      //   data?: [{
      //     id?: string;
      //     attributes?: {
      //       title?: string;
      //       content?: string;
      //       image?: {
      //         data?: {
      //           id?: string;
      //           attributes?: {
      //             url?: string;
      //           };
      //         };
      //       };
      //       category?: {
      //         data?: {
      //           id?: string;
      //           attributes?: {
      //             name?: string;
      //           };
      //         };
      //       };
      //     };
      //   }];
      // }
    };
  };
}

export const CATEGORY_ARTICLES_QUERY = gql<CategoryResponse, any>`
  query Category($id: ID!) {
    category(id: $id) {
      data {
        id
        attributes {
          name
          articles {
            data {
              id
              attributes {
                title
                content
                image {
                  data {
                    id
                    attributes {
                      url
                    }
                  }
                }
                category {
                  data {
                    id
                    attributes {
                      name
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
