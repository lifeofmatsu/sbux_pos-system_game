import express from 'express';
import { ApolloServer, gql } from 'apollo-server-express';

// Placeholder typeDefs to be replaced later
const typeDefs = gql`
  type Query {
    hello: String
  }
`;

// Define resolvers
const resolvers = {
  Query: {
    hello: () => 'Hello world!',
  },
};

async function startServer() {
    const app = express();
    const apolloServer = new ApolloServer({
        typeDefs, // Your GraphQL schema
        resolvers, // Your resolver functions
    });

    await apolloServer.start();
    apolloServer.applyMiddleware({ app });

    app.listen(4000, () => console.log(`Server running on http://localhost:4000${apolloServer.graphqlPath}`));
}

startServer();
