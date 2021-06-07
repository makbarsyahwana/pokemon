import React, { useEffect, useContext, useState } from 'react';
import { useQuery } from "@apollo/client";
import { useRouter } from 'next/router'

import { GlobalContext } from '../context/GlobalState';
import { GET_POKEMONS } from "../graphql/pokeApi"
import PokeCard from "./pokeCard/PokeCard"
import Link from "next/link"
import { StyledButtonDark } from "./style/StyledButtonDark"

export default function MyPokemonList() {
    const [state, dispatch] = useContext(GlobalContext);
    const [myPokemonsState, setMyPokemonsState] = useState([])
    const router = useRouter()

    useEffect(async () => {
        
        let myPokemonsList = await JSON.parse(localStorage.getItem("myPokemons"));
        setMyPokemonsState(myPokemonsList)
        
    },[])

    const removePokemon = (pokemon) => {
        dispatch({
            type: "REMOVE_MY_POKEMON",
            payload: pokemon
        })

        router.reload(window.location.pathname)
    }
    
    return (
        <React.Fragment>
        {myPokemonsState && myPokemonsState.length > 0 ? (
            <React.Fragment>
            <div style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                flexWrap: "wrap",
                // width: "100%",
                marginRight: "auto",
                marginLeft: "auto"

            }}>
                {myPokemonsState.map((pokemon) => (
                    <div
                    className="pokecard-container"
                    key={pokemon.id}
                    style={{
                        width: "240px",
                        height: "290px",
                        justifyContent: "center",
                        // flex: "1 1 calc(20% - 8px)",
                        margin: "2em",
                        marginBottom: "4rem"
                    }}
                    >
                        <Link href={`/${pokemon.name.toLowerCase()}`}>
                            <a>
                                <PokeCard
                                id={pokemon.id}
                                name={pokemon.name}
                                isMyPokemonListPage={true}
                                image={pokemon.sprites.front_default}
                                nickname={pokemon.nickname}
                                />
                            </a>
                        </Link>
                        <a onClick={removePokemon.bind(this, pokemon)}>
                            <StyledButtonDark> Remove </StyledButtonDark>
                        </a>
                    </div>
                ))}
            </div>
            </React.Fragment>
        ) : (
            <div styel={{
                display: "flex",
                flexDirection: "row",
                // width: "100%",
                marginRight: "auto",
                marginLeft: "auto",
                justifyContent: "center",
                textAlign: "center"
            }}>
                <p className="empty-message">Your Bag is Empty</p>
                <Link href={"/"}>
                    <StyledButtonDark >let's catch them</StyledButtonDark>
                </Link>
            </div>
        )}
        </React.Fragment>
    );
};