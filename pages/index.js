import PokemonList from "../component/PokemonList"
import Navbar from "../component/Navbar"
import React, { useEffect, useContext, useState } from 'react';
import Link from "next/link"
import { useQuery } from "@apollo/client";
import { GlobalContext } from '../context/GlobalState';
import { GET_POKEMONS } from "../graphql/pokeApi"

export default function Home() {
  return (
    <PokemonList />
  )
}
