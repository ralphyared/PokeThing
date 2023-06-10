// Imports 
import React from "react";

// Component 
const Pokemon = (props) => {
    return (

        <a href={"/" + props.name}>
            <span>{props.name}</span>
        </a>

    )
};

// Export 
export default Pokemon;