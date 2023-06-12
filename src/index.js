// Imports 
import React, { lazy } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import ErrorPage from "./routes/ErrorPage";

// Lazy 
const Landing = lazy(() => import("./routes/Landing"));
const PokemonDetails = lazy(() => import("./routes/PokemonDetails"));

// Routes 
const root = createRoot(document.getElementById("root"));

root.render(
    <Router>
        <ErrorBoundary FallbackComponent={ErrorPage}>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/:name" element={<PokemonDetails />} />
            </Routes>
        </ErrorBoundary>
    </Router>
);