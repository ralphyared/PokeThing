// Imports 
import React from "react";
import _ from "lodash";

// Component 
const PokemonInfo = (props) => {

    return (
        <div>
            <h1 className="pokemonName">{_.upperFirst(props.pokemonStats.name)}</h1>

            <img className="pokemonImg" src={props.pokemonStats.sprites.front_default} alt={props.pokemonStats.name} />

            <div className="pokemonStat"><span className="preText">Type:</span> {props.pokemonStats.types.map((type, index) => {
                return (<div className={type.type.name + " text"} key={index}>{_.upperFirst(type.type.name) + " "}</div>)
            })}</div>

            <div className="pokemonStat"><span className="preText">Abilities:</span> {props.pokemonStats.abilities.map((ability, index) => {
                return (<div className="text" key={index}>{_.upperFirst(ability.ability.name) + " "}</div>)
            })}</div>

            <div className="pokemonStat"><span className="preText">Height:</span> <div className="text">{props.pokemonStats.height / 10}m</div></div>

            <div className="pokemonStat"><span className="preText">Weight:</span> <div className="text">{props.pokemonStats.weight / 10}kg</div></div>

            <div className="pokemonStat"><span className="preText">Base Stats:</span> <table>{props.pokemonStats.stats.map((stat, index) => {
                return (<tr key={index}><td>{_.upperFirst(stat.stat.name)}</td><td>{stat.base_stat}</td></tr>)
            })}</table></div>
        </div >
    )
}

// Export 
export default PokemonInfo;