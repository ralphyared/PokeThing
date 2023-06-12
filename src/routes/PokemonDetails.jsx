// Imports 
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import _ from "lodash";
import PokemonInfo from "../components/atoms/PokemonInfo";
import { useErrorBoundary } from "react-error-boundary";

// Component 
const PokemonPage = () => {

    const { showBoundary } = useErrorBoundary();
    const pokemonName = useParams();
    const [pokemonStats, setPokemonStats] = useState();

    // API Call 
    useEffect(() => {
        axios.get("https://pokeapi.co/api/v2/pokemon/" + _.toLower(pokemonName.name))
            .then(response => {

                setPokemonStats(response.data)
            },
                error => {

                    showBoundary(error);
                })
    }, [])

    // Return 
    return (
        <div className="PokemonPage">
            {pokemonStats && <PokemonInfo pokemonStats={pokemonStats} />}
        </div>
    )
};

// Export 
export default PokemonPage;