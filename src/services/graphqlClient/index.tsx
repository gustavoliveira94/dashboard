import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import { apiUrl, apiSecret } from 'services/envs';

const client = new ApolloClient({
  uri: apiUrl,
  headers: {
    'x-hasura-admin-secret': apiSecret as string,
  },
  cache: new InMemoryCache(),
});

export const Apollo: React.FC = ({ children }) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
