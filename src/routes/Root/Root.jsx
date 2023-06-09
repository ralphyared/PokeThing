// Imports
import React, { useEffect, useState } from "react";
import axios from "axios";
import Pokemon from "./Pokemon";
import pokemonLogo from "../../resources/pokemon-logo.png";

// Component 
const Root = () => {

    const [pokemonList, setPokemonList] = useState([]);
    const [offset, setOffset] = useState(0);

    // API Call 
    useEffect(() => {

        axios.get("https://pokeapi.co/api/v2/pokemon/?limit=30&offset=" + offset)
            .then(response => {

                setPokemonList(response.data.results)
            })
    }, [offset]);

    // Next/Prev Button Press 
    const handleNext = () => {
        if (offset !== 1260)
            setOffset(offset + 30)
    };

    const handlePrev = () => {
        if (offset !== 0)
            setOffset(offset - 30)
    };

    // Return 
    return (
        <div className="homePage">
            <img className="logo" src={pokemonLogo} alt="Pokemon!" />
            <div>
                <button className="pokeButton" onClick={handlePrev}>Prev Pokemon</button>
                <button className="pokeButton" onClick={handleNext}>Next Pokemon</button>
            </div>
            <div>
                {pokemonList.map((pokemon, index) => {
                    return (
                        <div className="pokemonLink" key={index}>
                            <Pokemon
                                name={pokemon.name}
                            />
                        </div>
                    )
                })}
            </div>
            <span>Page {(offset / 30) + 1} of 43</span>
        </div>
    )
};

// Export 
export default Root;