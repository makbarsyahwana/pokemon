export default function appReducer(state, action) {
    switch (action.type) {
      case "ADD_MY_POKEMON":
        const addPokemonResult = { 
          ...state,
          myPokemons: [...state.myPokemons, action.payload],
        };
        localStorage.setItem("myPokemons", JSON.stringify(addPokemonResult.myPokemons))
        return addPokemonResult
  
      case "EDIT_MY_POKEMON_NICKNAME":
        const myPokemonId = action.payload.pokemon.pokeId;
  
        const updatedMyPokemnons = state.myPokemons.map((myPokemon) => {
          console.log(myPokemon.pokeId, myPokemonId)
          if (myPokemon.pokeId === myPokemonId) {
            return {
              ...myPokemon,
              nickname: action.payload.nickname
            };
          }
          return myPokemon;
        });

        localStorage.setItem("myPokemons", JSON.stringify(updatedMyPokemnons))
  
        return {
          ...state,
          myPokemons: updatedMyPokemnons,
        };
  
      case "REMOVE_MY_POKEMON":
        const removePokemonResult = {
          ...state,
          myPokemons: state.myPokemons.filter(
            (myPokemon) => 
            myPokemon.pokeId !== action.payload.pokeId
          ),
        };
        localStorage.setItem("myPokemons", JSON.stringify(removePokemonResult.myPokemons))
        return removePokemonResult

      case "SET_POKEMON_LIST":
        return {
          ...state,
          pokemons: action.payload,
        };
  
      default:
        return state;
    }
  };