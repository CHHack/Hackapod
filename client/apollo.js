import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';

const GRAPHQL_API_URL = 'https://dawn-surf.us-east-1.aws.cloud.dgraph.io/graphql';

/*
uncomment the code below in case you are using a GraphQL API that requires some form of
authentication. asyncAuthLink will run every time your request is made and use the token
you provide while making the request.


const TOKEN = '';
const asyncAuthLink = setContext(async () => {
  return {
    headers: {
      Authorization: TOKEN,
    },
  };
});

*/

const httpLink = new HttpLink({
  uri: GRAPHQL_API_URL,
});

export const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  link: httpLink,
  // link: asyncAuthLink.concat(httpLink),
});
