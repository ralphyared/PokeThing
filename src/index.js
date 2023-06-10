// Imports 
import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/Root";
import PokemonDetails from "./routes/PokemonDetails";

// Routes 
const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />
    },
    {
        path: "/:name",
        element: <PokemonDetails />
    }
])

// Render 
const root = createRoot(document.getElementById("root"));

root.render(
    <RouterProvider router={router} />
);