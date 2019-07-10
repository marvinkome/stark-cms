import { gql } from 'apollo-server-express';
import { IContext } from '@gql/index';
import { authenticated } from '@libs/auth';
import Category from '@models/categories';

export const queryType = gql`
    type Query {
        hello: String
        user: User
        categories: [Category]
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
        })
    }
};
