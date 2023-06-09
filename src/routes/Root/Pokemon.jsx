// Imports 
import React from "react";
import _ from "lodash";

// Component 
const Pokemon = (props) => {
    return (

        <a className="pokemonLinkClickable" href={"/" + props.name}>
            <span className="pokemonLinkText">{_.upperFirst(props.name)}</span>
        </a>

    )
};

// Export 
export default Pokemon;