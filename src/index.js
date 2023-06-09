// Imports 
import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/Root/Root";
import PokemonPage from "./routes/PokemonPage/PokemonPage";

// Routes 
const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />
    },
    {
        path: "/:name",
        element: <PokemonPage />
    }
])

// Render 
const root = createRoot(document.getElementById("root"));

root.render(
    <RouterProvider router={router} />
);