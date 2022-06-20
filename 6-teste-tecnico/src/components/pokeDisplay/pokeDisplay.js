import { useState, useEffect } from "react";
import { loadPokemons } from "../../services/pokeAPI";
import Pokemon from "../pokemon/pokemon";
import Button from '../button/button';

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
            <ul>
                {
                    display.pokemons.map((pokemon, index) => {
                        return <Pokemon pokemon={pokemon} key={index} />
                    })
                }
            </ul>
            <Button label="Mais Pokémon" morePokemon={morePokemon} />
        </>
    );
}

export default PokeDisplay;