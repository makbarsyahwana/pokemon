import { useRouter } from "next/router";
import PokemonDetails from "../component/PokemonDetail"
import Navbar from "../component/Navbar"

export default function PokemonDetailsPage() {
    const router = useRouter()
    const queryPokemonName = router.query.pokemonName;

    return (
        <PokemonDetails pokemonName={queryPokemonName}/>
    )
}