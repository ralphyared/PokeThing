// Imports 
import React from "react";
import { useRouteError } from "react-router-dom";

// Component
const ErrorPage = () => {

    const error = useRouteError();
    console.error(error);

    return (
        <div className="errorPage">
            <h1>Oops!</h1>
            <p>Couldn't catch 'em all!</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    )
};

export default ErrorPage;