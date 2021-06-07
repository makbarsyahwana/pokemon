import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import MyPokemonList from "../component/MyPokemonList"
import Navbar from "../component/Navbar"


export default function MyPokemon() {
  return (
    <MyPokemonList />
  )
}
