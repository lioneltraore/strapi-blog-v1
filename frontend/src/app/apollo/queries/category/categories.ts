import gql from "graphql-tag";

export interface CategoryResponseArray {
  categories: CategoryArray;
}

export interface CategoryResponse {
  data: CategoryData;
}

export interface CategoryArray {
  data: CategoryData[];
}

export interface CategoryData {
  id: string;
  attributes: CategoryAttributes;
}

export interface CategoryAttributes {
  name: string;
}

export const CATEGORIES_QUERY = gql`
  query GetAllCategories {
    categories {
      data {
        id
        attributes {
          name
        }
      }
    }
  }
`;
