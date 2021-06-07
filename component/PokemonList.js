import React, { useEffect, useContext, useState } from 'react';
import { useQuery } from "@apollo/client";
import { GlobalContext } from '../context/GlobalState';
import { GET_POKEMONS } from "../graphql/pokeApi"
import PokeCard from "./pokeCard/PokeCard"
import Link from "next/link"
import { useRouter } from 'next/router'

import { StyledButtonDark } from "./style/StyledButtonDark"

export default function PokemonList() {
    const [state, dispatch] = useContext(GlobalContext);
    const [limitState, setLimitState] = useState(20)
    const [catchedPokemonsState, setcatchedPokemons] = useState([])
    const router = useRouter()


    const { loading, error, data } = useQuery(GET_POKEMONS, {
        variables: { limit: limitState, offset: 0 },
    });

    const loadMore = async () => {
        let newLimit = state.pokemons.length + limitState
        setLimitState(newLimit)
    }

    // let myPokemonsList = JSON.parse(localStorage.getItem("myPokemons"));

    useEffect(() => {
        dispatch({
            type: "SET_POKEMON_LIST",
            payload: data ? data.pokemons.results : state.pokemons
        })
        let catchedPokemonsList = JSON.parse(localStorage.getItem("myPokemons"));
        setcatchedPokemons(catchedPokemonsList)
    }, [state])
    
    return (
        <React.Fragment>
        {state.pokemons.length > 0 ? (
            <React.Fragment>
            <div
            style={{
                display: "flex",
                flexDirection: "row",
                // width: "100%",
                marginRight: "auto",
                marginLeft: "auto",
                justifyContent: "center",
            }}
            >
                {
                (
                    <>
                        <p>
                            You got {catchedPokemonsState && catchedPokemonsState.length} owned pokemon, 
                            <Link href={"/myPokemonList"}>
                                <a style={{color: "#4d7aff"}}>See Now</a>
                            </Link>
                        </p> 
                    </>
                )}
            </div>
            <div style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                // width: "100%",
                marginRight: "3em",
                marginLeft: "3em",
                justifyContent: "center",
            }}>
                {state.pokemons.map((pokemon) => (
                    <div
                    className="pokecard-container"
                    key={pokemon.id}
                    style={{
                        width: "240px",
                        height: "290px",
                        flex: "1 1 calc(20% - 8px)",
                        margin: "2em"
                    }}
                    >
                        <Link href={`/${pokemon.name.toLowerCase()}`}>
                            <a>
                                <PokeCard
                                id={pokemon.id}
                                name={pokemon.name}
                                isMyPokemonListPage={false}
                                image={pokemon.image}
                                nickname={pokemon.nickname}
                                />
                            </a>
                        </Link>
                        <p>
                        Catched: {
                            catchedPokemonsState.filter((catchedPokemon) => 
                                catchedPokemon.id === pokemon.id
                            ).length
                        }
                        </p>     
                    </div>
                ))}
                <a 
                style={{marginBottom: "4em"}} 
                onClick={async () => loadMore()}>
                    <StyledButtonDark> Give me more </StyledButtonDark>
                </a>
            </div>
            </React.Fragment>
        ) : (
            <p className="text-center bg-gray-100 text-gray-500 py-5">Loading...</p>
        )}
        </React.Fragment>
    );
};