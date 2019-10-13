import { gql } from 'apollo-server-express';

export const postsType = gql`
    type Post {
        id: ID!
        title: String!
        content: String!
        status: String!
    }
`;

export const postsResolvers = {
    Post: {}
};
