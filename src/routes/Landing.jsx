// Imports
import React, { Suspense, useEffect, useState } from "react";
import axios from "axios";
import Pokemon from "../components/atoms/Pokemon";
import pokemonLogo from "../resources/pokemon-logo.png";
import { useErrorBoundary } from "react-error-boundary";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Spinner from "react-bootstrap/Spinner";

// Component 
const Landing = () => {

    const { showBoundary } = useErrorBoundary;
    const [pokemonList, setPokemonList] = useState([]);
    const [offset, setOffset] = useState(0)
    const [total, setTotal] = useState(0)
    const limit = 30;

    // API Call 
    useEffect(() => {

        axios.get("https://pokeapi.co/api/v2/pokemon/", {
            params: {
                limit: limit,
                offset: offset
            }
        })
            .then(response => {

                setTotal(response.data.count);
                setPokemonList(response.data.results);
            },
                error => {

                    showBoundary(error);
                })
    }, [offset]);

    // Next/Prev Button Press 
    const handlePrev = () => {
        if (offset !== 0)
            setOffset(offset - limit)
    }

    const handleNext = () => {
        if (offset !== Math.floor(total / limit) * limit)
            setOffset(offset + limit)
    }

    // Return 
    return (
        <Container className="homePage">
            <Row className="logo">
                <Col />
                <Col md={12} lg={6}>
                    <Image src={pokemonLogo} alt="Pokemon!" fluid />
                </Col>
                <Col />
            </Row>
            <span>Page {(offset / limit) + 1} of {Math.floor(total / limit) + 1}</span>
            <div>
                <Button className="pokeButton" variant="light" onClick={handlePrev} disabled={offset === 0 ? true : false}>Prev Pokemon</Button>
                <Button className="pokeButton" variant="light" onClick={handleNext} disabled={(offset / limit) === Math.floor(total / limit) ? true : false}>Next Pokemon</Button>
            </div>
            <Suspense fallback={<Spinner />}
            >
                <Container>
                    {pokemonList && pokemonList.map((pokemon) => {
                        return (
                            <div className="pokemonLink" key={pokemon.name}>
                                <Pokemon
                                    name={pokemon.name}
                                />
                            </div>
                        )
                    })}
                </Container>
            </Suspense>
        </Container>
    )
};

// Export 
export default Landing;