// Imports
import React, { useEffect, useState } from "react";
import axios from "axios";
import Pokemon from "./Pokemon";
import pokemonLogo from "../../resources/pokemon-logo.png";

// Component 
const Root = () => {

    const [pokemonList, setPokemonList] = useState([]);
    const [pokemonShown, setPokemonShown] = useState();
    const [count, setCount] = useState(0);
    const limit = 30;

    // API Call 
    useEffect(() => {

        axios.get("https://pokeapi.co/api/v2/pokemon/?limit=10000")
            .then(response => {

                setPokemonList(response.data.results);
            })
    }, []);

    useEffect(() => {

        setPokemonShown(pokemonList && pokemonList.filter((pokemon, index) => {
            return (
                index >= (limit * count) && index <= (limit - 1) + (limit * count)
            )
        }));
    }, [pokemonList, count])

    // Next/Prev Button Press 
    const handlePrev = () => {
        if (count !== 0)
            setCount(count - 1)
    }

    const handleNext = () => {
        if (count !== (Math.floor(pokemonList.length / limit)))
            setCount(count + 1)
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
                {pokemonShown && pokemonShown.map((pokemon, index) => {
                    return (
                        <div className="pokemonLink" key={index}>
                            <Pokemon
                                name={pokemon.name}
                            />
                        </div>
                    )
                })}
            </div>
            <span>Page {count + 1} of {Math.floor(pokemonList.length / limit) + 1}</span>
        </div>
    )
};

// Export 
export default Root;