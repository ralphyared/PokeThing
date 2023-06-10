// Imports 
import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Landing from "./routes/Landing";
import PokemonDetails from "./routes/PokemonDetails";
import ErrorPage from "./routes/ErrorPage";

// Routes 
const router = createBrowserRouter([
    {
        path: "/",
        element: <Landing />,
        errorElement: <ErrorPage />
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