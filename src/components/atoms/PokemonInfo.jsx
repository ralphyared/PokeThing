// Imports 
import React from "react";
import Stack from "react-bootstrap/Stack";
import Image from "react-bootstrap/Image";

// Component 
const PokemonInfo = (props) => {

    return (
        <Stack gap={0}>
            <h1 className="pokemonName">{props.pokemonStats.name}</h1>

            <Image className="pokemonImg mx-auto" src={props.pokemonStats.sprites.front_default} alt={props.pokemonStats.name} />

            <div className="pokemonStat"><span>Type:</span> {props.pokemonStats.types.map(type => {
                return (<div className={type.type.name} key={type.type.name}>{type.type.name + " "}</div>)
            })}</div>

            <div className="pokemonStat"><span>Abilities:</span> {props.pokemonStats.abilities.map(ability => {
                return (<div key={ability.ability.name}>{ability.ability.name + " "}</div>)
            })}</div>

            <div className="pokemonStat"><span>Height:</span> <div>{props.pokemonStats.height / 10}m</div></div>

            <div className="pokemonStat"><span>Weight:</span> <div>{props.pokemonStats.weight / 10}kg</div></div>

            <div className="pokemonStat"><span>Base Stats:</span><table className="pokemonStatsTable"><tbody>{props.pokemonStats.stats.map(stat => {
                return (<tr key={stat.stat.name}><td>{stat.stat.name}</td><td>{stat.base_stat}</td></tr>)
            })}</tbody></table></div>
        </Stack>
    )
}

// Export 
export default PokemonInfo;