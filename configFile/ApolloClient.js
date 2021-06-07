import { ApolloClient, InMemoryCache } from "@apollo/client";

//initialize and config for apollo client
export const client = new ApolloClient({
  uri: `https://graphql-pokeapi.vercel.app/api/graphql`,
  cache: new InMemoryCache(),
});