import { gql } from 'apollo-angular';

export interface ArticleResponse {
  article: Article;
}

export interface Article {
  data?: {
    id?: string;
    attributes?: {
      title?: string;
      content?: string;
      published_at?: string;
      category?: {
        data?: {
          id?: string;
          attributes?: {
            name?: string;
          };
        };
      };
      image?: {
        data?: {
          id?: string;
          attributes?: {
            url?: string;
          };
        };
      };
    };
  };
}

export const ARTICLE_QUERY = gql`
  query Article ($id: ID!)  {
    article(id: $id) {
      data {
        id
        attributes {
          title
          content
          category {
            data {
              id
              attributes {
                name
              }
            }
          }
          image {
            data {
              id
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`;
