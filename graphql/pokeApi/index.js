import { gql } from "@apollo/client";

//graphql query for getting all pokemons
export const GET_POKEMONS = gql`
  query pokemons($limit: Int, $offset: Int) {
    pokemons(limit: $limit, offset: $offset) {
      nextOffset
      next
      results {
        id
        url
        name
        image
      }
    }
  }
`;

//graphql query for getting specific pokemon
export const GET_POKEMON = gql`
  query pokemon($name: String!) {
    pokemon(name: $name) {
      id
      name
      sprites {
        front_default
      }
      abilities {
        ability {
          name
        }
      }
      weight
      height
      types {
        type {
          name
        }
      }
      moves {
        move {
          name
        }
      }
    }
  }
`;