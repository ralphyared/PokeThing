// Imports
import React, { Suspense, useEffect, useState } from "react";
import axios from "axios";
import Pokemon from "../components/atoms/Pokemon";
import pokemonLogo from "../resources/pokemon-logo.png";
import { Audio } from "react-loader-spinner";
import { useErrorBoundary } from "react-error-boundary";

// Component 
const Landing = () => {

    const { showBoundary } = useErrorBoundary;
    const [pokemonList, setPokemonList] = useState([]);
    const [offset, setOffset] = useState(0)
    const [total, setTotal] = useState(0)
    const limit = 30;

    // API Call 
    useEffect(() => {

        axios.get("https://pokeapi.co/api/v2/pokemon/", {
            params: {
                limit: limit,
                offset: offset
            }
        })
            .then(response => {

                setTotal(response.data.count);
                setPokemonList(response.data.results);
            },
                error => {

                    showBoundary(error);
                })
    }, [offset]);

    // Next/Prev Button Press 
    const handlePrev = () => {
        if (offset !== 0)
            setOffset(offset - limit)
    }

    const handleNext = () => {
        if (offset !== Math.floor(total / limit) * limit)
            setOffset(offset + limit)
    }

    // Return 
    return (
        <div className="homePage">
            <img className="logo" src={pokemonLogo} alt="Pokemon!" />
            <div>
                <button className="pokeButton" onClick={handlePrev}>Prev Pokemon</button>
                <button className="pokeButton" onClick={handleNext}>Next Pokemon</button>
            </div>
            <Suspense fallback={<Audio
                height="80"
                width="80"
                radius="9"
                color="black"
                ariaLabel="loading" />}
            >
                <div>
                    {pokemonList && pokemonList.map((pokemon) => {
                        return (
                            <div className="pokemonLink" key={pokemon.name}>
                                <Pokemon
                                    name={pokemon.name}
                                />
                            </div>
                        )
                    })}
                </div>
            </Suspense>
            <span>Page {(offset / limit) + 1} of {Math.floor(total / limit) + 1}</span>
        </div>
    )
};

// Export 
export default Landing;