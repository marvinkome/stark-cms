import { gql } from 'apollo-server-express';
import * as CategoriesMutations from './categories';
import * as PostMutations from './posts';

export const mutationType = gql`
    type Mutation {
        ${PostMutations.typeDef}
        ${CategoriesMutations.typeDef}
    }

    ${PostMutations.postInput}
`;

export const mutationResolvers = {
    Mutation: {
        ...CategoriesMutations.resolvers,
        ...PostMutations.resolvers
    }
};
