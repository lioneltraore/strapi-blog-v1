import { CategoryData, CategoryResponse } from './../category/categories';
import { gql } from 'apollo-angular';

export interface ArticleResponseArray {
  articles: ArticleArray;
}

export interface ArticleArray {
  data: ArticleData[];
}

export interface ArticleData {
  id: string;
  attributes: ArticleAttributes;
}

export interface ArticleAttributes {
  title: string;
  content: string;
  category: CategoryResponse;
  image: ImageResponse;
}

export interface ImageResponse {
  data: ImageData;
}

export interface ImageData {
  id: string;
  attributes: ImageAttributes;
}

export interface ImageAttributes {
  url: string;
}

export const ARTICLES_QUERY = gql`
  query GetAllArticles {
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
        }
      }
    }
  }
`;
