import { gql } from 'apollo-server-express';

export const postsType = gql`
    type Post {
        id: ID!
    }
`;

export const postsResolvers = {
    Post: {}
};
