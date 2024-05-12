// Import necessary dependencies from Apollo Client and React
import React, { ReactNode } from 'react';
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider as Provider,
    HttpLink,
    ApolloLink,
    concat
} from '@apollo/client';

// Configure the HTTP link for Apollo Client
const httpLink = new HttpLink({ uri: 'http://localhost:4000/graphql' });

// Example of an authentication middleware
const authMiddleware = new ApolloLink((operation, forward) => {
    // Retrieve the authentication token from local storage if it exists
    const token = localStorage.getItem('token');

    // Use the setContext method to set the HTTP headers
    operation.setContext({
        headers: {
            authorization: token ? `Bearer ${token}` : ''
        }
    });

    // Call the next link in the middleware chain
    return forward(operation);
});

// Create the Apollo Client with the link and cache configuration
const client = new ApolloClient({
    // Use concat to combine the auth middleware with the HTTP link
    link: concat(authMiddleware, httpLink),
    cache: new InMemoryCache()
});

interface ApolloProviderProps {
    children: ReactNode;
}

// Create a component that wraps children with ApolloProvider
const ApolloProvider: React.FC<ApolloProviderProps> = ({ children }) => (
    <Provider client={client}>
        {children}
    </Provider>
);

// Export the ApolloProvider component
export default ApolloProvider;
