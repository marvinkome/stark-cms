import { gql } from 'apollo-server-express';
import * as CategoriesMutations from './categories';

export const mutationType = gql`
    type Mutation {
        ${CategoriesMutations.typeDef}
    }
`;

export const mutationResolvers = {
    Mutation: {
        ...CategoriesMutations.resolvers
    }
};
