import { gql } from 'apollo-server-express';

export const categoriesType = gql`
    type Category {
        id: ID!
        name: String!
        slug: String!
        isDefault: Boolean
    }
`;

export const categoriesResolvers = {
    Category: {}
};
