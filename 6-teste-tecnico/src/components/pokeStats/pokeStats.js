import { useState, useEffect } from "react";
import { fetchPokemon } from "../../services/pokeAPI";
import { useParams, Link } from 'react-router-dom';

const PokeStats = () => {
    const [pokemonStats, setStats] = useState({});
    const { name } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchPokemon(`https://pokeapi.co/api/v2/pokemon/${name}`);

            setStats(data);
        }

        fetchData();
    }, []);


    // apenas com esse operador if consegui renderizar o componente, pois parece haver um delay do useParams() em relação ao useEffect() e o consumo da API
    if (pokemonStats.name != undefined) {
        return (
            <>
                <section>
                    <div>
                        <img src={pokemonStats.sprites.front_default} />
                        <h2>{`A wild ${pokemonStats.name.toUpperCase()} appears!`}</h2>
                        <div>
                            <div>
                                <h3>Moves</h3>
                                <ul>
                                    {pokemonStats.moves.map((move, index) => {
                                        return <li key={index}>{move.move.name}</li>
                                    })}
                                </ul>
                            </div>
                            <div>
                                <h3>Abilities</h3>
                                <ul>
                                    {pokemonStats.abilities.map((ability, index) => {
                                        return <li key={index}>{ability.ability.name}</li>
                                    })}
                                </ul>
                            </div>
                            <div>
                                <h3>Type</h3>
                                <ul>
                                    {pokemonStats.types.map((type, index) => {
                                        return <li key={index}>{type.type.name}</li>
                                    })}
                                </ul>
                            </div>
                        </div>
                        <Link to={"/"}>
                            <h3>voltar</h3>
                        </Link>
                    </div>
                </section>
            </>
        );
    }
}

export default PokeStats;