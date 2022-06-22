import { useState, useEffect } from "react";
import { loadPokemons } from "../../services/pokeAPI";
import Pokemon from "../pokemon/pokemon";
import Button from '../button/button';
import styled from "styled-components";

const PokeDisplay = () => {
    const [display, setDisplay] = useState({
        pokemons: []
    });

    useEffect(() => {
        const fetchData = async () => {
            const loadTenPokemons = await loadPokemons();

            setDisplay({
                pokemons: loadTenPokemons
            });
        }

        fetchData();
    }, []);

    const morePokemon = async () => {
        //refatorar nomenclatura getMorePokemon
        const moreTenPokemon = await loadPokemons(1);

        setDisplay({
            pokemons: [...display.pokemons, ...moreTenPokemon]
        });
    }

    return (
        <>
            <Container>
                <PokeList>
                    {
                        display.pokemons.map((pokemon, index) => {
                            return <Pokemon pokemon={pokemon} key={index} />
                        })
                    }
                </PokeList>
                <Button label="More Pokémon" onClick={() => morePokemon()} />
            </Container>
        </>
    );
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 10px;
`

const PokeList = styled.ul`
    display: grid;
    grid-template-columns: repeat(5, 1fr);    
    justify-content: center;
    grid-gap: 10px;
    margin: 15px;
`

export default PokeDisplay;