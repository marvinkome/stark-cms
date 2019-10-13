import gql from 'graphql-tag';

export const ADD_POST = gql`
    mutation AddPost($title: String!, $content: String!, $status: String!) {
        addPost(post: { title: $title, content: $content, status: $status }) {
            id
        }
    }
`;
