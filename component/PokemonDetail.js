import React, { useEffect, useContext, useState } from 'react';
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import Image from "next/image";
import PokeCard from "../component/pokeCard/PokeCard"
import PokeBallImage from "../assets/images/pokeball.png"
import { GlobalContext } from '../context/GlobalState';
import styled from "@emotion/styled";
import { useForm } from "react-hook-form";
import crypto from "crypto"

import { GET_POKEMON } from "../graphql/pokeApi";

import { StyledPokeTypes } from "./style/StyledPokeTypes";
import { StyledPokeMoves } from "./style/StyledPokeMoves";
import { StyledPokeBall } from "./style/StyledPokeBall"
import { StyledSuccessMessage } from "./style/StyledSuccesMessage"
import { StyledButtonDark } from "./style/StyledButtonDark"

import Link from 'next/link';

function Types({ pokemon }) {
  return (
    <StyledPokeTypes>
      {/* <strong>Types:</strong> */}
      <div className="types">
        {pokemon.types.map(({ type }, id) => (
          <div key={id} className="type">
            {type.name}
          </div>
        ))}
      </div>
    </StyledPokeTypes>
  );
}

function Moves({ pokemon }) {
    return (
      <StyledPokeMoves>
        <strong>Moves:</strong>
        <div className="moves">
          {pokemon.moves.map(({ move }, id) => (
            <div key={id} className="move">
              {move.name}
            </div>
          ))}
        </div>
      </StyledPokeMoves>
    );
}

function PokemonCatched({ pokemon, myPokemons, dispatch, state, success }) {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const router = useRouter();

    const checkUniqueNickname = (newNickname) => {
        let nickname = newNickname.toLowerCase().trim();
        let catchedPokemons = myPokemons
        return catchedPokemons.length > 0 ? !catchedPokemons.find(
          (catchedPokemon) =>
            catchedPokemon.nickname === nickname &&
            catchedPokemon.name === pokemon.name
        ) : true ;
    };

    const addNickname = async (data) => {

        const pokeId = crypto.randomBytes(16).toString("hex");
        pokemon.pokeId = pokeId
        await dispatch({
            type: "ADD_MY_POKEMON",
            payload: pokemon
        })

        await dispatch({
            type: "EDIT_MY_POKEMON_NICKNAME",
            payload: {
                pokemon: pokemon,
                nickname: data.nickname,
            }
        })

        // localStorage.setItem("myPokemons", JSON.stringify(state.myPokemons));
        
        router.push("/");
    }

    return (
      <StyledSuccessMessage>
        {
            success ? (
                <div>
                    <strong>Congratulation you got <span>{pokemon.name}</span>!!&nbsp;🎉🎉🎉</strong>
                    <div className="pokecard-wrapper">
                        <form onSubmit={handleSubmit(addNickname)} method="post">
                            <PokeCard
                                id={pokemon.id}
                                name={pokemon.name}
                                isMyPokemonListPage={false}
                                image={pokemon.sprites.front_default}
                                altImg={pokemon.nickname}
                            />
                            <input
                                id="nickname"
                                className="input-nickname"
                                type="text"
                                {...register('nickname', {
                                    required: "Put nickname first",
                                    maxLength: {
                                    value: 15,
                                    message: "Should be less than 15 characters",
                                    },
                                    validate: checkUniqueNickname,
                                    
                                })}
                                name="nickname"
                                placeholder="Put a nickname"
                            />
                            {errors.nickname ? (
                            <div style={{color: "#ff2e2e"}}>
                                {errors.nickname.type === "validate"
                                ? `please input another nickname, this one already picked`
                                : errors.nickname.message}
                            </div>
                            ) : null}
                            <div className="button-wrapper">
                                <StyledButtonDark type="submit">Put to my bag</StyledButtonDark>
                                <StyledButtonDark ><Link href={"/"}>Leave it there</Link></StyledButtonDark>
                            </div>
                        </form>
                    </div>
                </div>
            ) : (
                <div>
                    <strong>Oooppps you missed to catch it!!&nbsp;😔😔😔</strong>
                    <div className="button-wrapper">
                        <StyledButtonDark ><Link href={"/"}>Lets catch others</Link></StyledButtonDark>
                    </div>
                </div>
            )
        }
      </StyledSuccessMessage>
    );
  }

function Pokeball() {
    return(
        <StyledPokeBall>
                <img  style={{width: "70px"}} src={PokeBallImage} alt="Catch Pokemon" />
                <span className="pokeball__label">Catch It!</span>
        </StyledPokeBall>
    )
}

export default function PokemonDetail({
    pokemonName
}) {

    const [state, dispatch] = useContext(GlobalContext);

    const [catchedResult, setCatchedResult] = useState({
        success: null,
        pokemon: null,
      });

    const { loading, error, data } = useQuery(GET_POKEMON, {
        variables: { name: pokemonName },
    });

    const handleCatchedPokemon = (pokemon) => {
        const isPokemonCatched = Math.random() > 0.5;
        
        if (isPokemonCatched) {
          
            // dispatch({
            //     type: "ADD_MY_POKEMON",
            //     payload: pokemon
            // })

            setCatchedResult(() => ({
                success: true,
                pokemon: pokemon
            }))

        } 
        else {
          setCatchedResult((prevState) => ({
            ...prevState,
            success: false,
          }));
        }
    };

    // useEffect(() => {
    //     localStorage.setItem("myPokemons", JSON.stringify(state.myPokemons));
    // })

    return (
        <React.Fragment>
        {data ? (
            <React.Fragment>
                {
                    catchedResult.success === null ? (
                        <div
                            className="flex items-center bg-gray-100 mb-10 shadow"
                            >
                                <PokeCard
                                id={data.pokemon.id}
                                name={data.pokemon.name}
                                isMyPokemonListPage={false}
                                image={data.pokemon.sprites.front_default}
                                altImg={data.pokemon.nickname}
                                />
                                <a onClick={() => handleCatchedPokemon(data.pokemon)}>
                                <Pokeball />
                                </a>
                                <Types 
                                pokemon={data.pokemon}
                                />
                                <Moves 
                                pokemon={data.pokemon}
                                />
                        </div>
                    ) : (
                        <PokemonCatched 
                            pokemon={catchedResult.pokemon}
                            myPokemons={state.myPokemons}
                            dispatch={dispatch}
                            state={state}
                            success={catchedResult.success}
                        />
                    )
                }
            </React.Fragment>
        ) : (
            <p className="text-center bg-gray-100 text-gray-500 py-5">Loading...</p>
        )}
        </React.Fragment>
    );
}