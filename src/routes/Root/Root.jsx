// Imports
import React, { Suspense, useEffect, useState } from "react";
import axios from "axios";
import Pokemon from "./Pokemon";
import pokemonLogo from "../../resources/pokemon-logo.png";
import { Audio } from "react-loader-spinner";

// Component 
const Root = () => {

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
            <div>
                {pokemonList && pokemonList.map((pokemon, index) => {
                    return (
                        <Suspense fallback={<Audio
                            height="80"
                            width="80"
                            radius="9"
                            color="green"
                            ariaLabel="loading" />}
                        >
                            <div className="pokemonLink" key={index}>
                                <Pokemon
                                    name={pokemon.name}
                                />
                            </div>
                        </Suspense>
                    )
                })}
            </div>
            <span>Page {(offset / limit) + 1} of {Math.floor(total / limit) + 1}</span>
        </div>
    )
};

// Export 
export default Root;