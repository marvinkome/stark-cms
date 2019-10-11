import { gql } from 'apollo-boost';

export const POSTS = gql`
    query AllPosts {
        posts {
            id
            title
            content
            status
        }
    }
`;
