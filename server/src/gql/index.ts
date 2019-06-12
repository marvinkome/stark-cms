import { makeExecutableSchema } from 'apollo-server-express';

// types and resolvers
import { queryType, queryResolver } from './queries';

export default makeExecutableSchema({
    typeDefs: [queryType],
    resolvers: [queryResolver]
});
