// Imports 
import React from "react";

// Component 
const Pokemon = (props) => {
    return (

        <a className="pokemonLinkClickable" href={"/" + props.name}>
            <span className="pokemonLinkText">{props.name}</span>
        </a>

    )
};

// Export 
export default Pokemon;