import { gql } from 'apollo-server-express';
import { IContext } from '@gql/index';
import { authenticated } from '@libs/auth';
import Category from '@models/categories';
import Post from '@models/posts';

export const queryType = gql`
    type Query {
        hello: String
        user: User
        categories: [Category]
        posts: [Post]
    }
`;

export const queryResolver = {
    Query: {
        hello: () => 'world',
        user: authenticated(async function(_: any, __: any, context: IContext) {
            return context.currentUser;
        }),
        categories: authenticated(async function() {
            return Category.find();
        }),
        posts: authenticated(async function() {
            return Post.find();
        })
    }
};
