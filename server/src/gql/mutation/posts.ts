import { authenticated } from '@libs/auth';
import Post from '@models/posts';

export const postInput = `
    input PostInput {
        title: String!
        content: String!
        status: String!
    }
`;

export const typeDef = `
    addPost(post: PostInput): Post
`;

export const resolvers = {
    addPost: authenticated(async (_: any, data: any) => {
        const post = new Post(data.post);
        return post.save();
    })
};
