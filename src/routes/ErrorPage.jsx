// Imports 
import React from "react";
import { useRouteError } from "react-router-dom";

// Component
const ErrorPage = () => {


    return (
        <div className="errorPage">
            <h1>Oops!</h1>
            <p>Couldn't catch 'em all!</p>
        </div>
    )
};

export default ErrorPage;