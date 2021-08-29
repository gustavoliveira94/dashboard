import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import { apiUrl, apiSecret } from 'services/envs';

export const apolloClient = new ApolloClient({
  uri: apiUrl,
  headers: {
    'x-hasura-admin-secret': apiSecret as string,
  },
  cache: new InMemoryCache(),
});

export const Apollo: React.FC = ({ children }) => {
  return <ApolloProvider client={apolloClient}>{children}</ApolloProvider>;
};
