import { useState, useEffect } from "react";
import { fetchPokemon, loadPokemons } from "../../services/pokeAPI";
import { useParams, Link } from 'react-router-dom';
import styled from "styled-components";

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
    if (pokemonStats.name !== undefined) {
        return (
            <>
                <Section>
                    <div>
                        <Link to={"/"}>
                            <Btn>back</Btn>
                        </Link>
                        <Pokemon>
                            <img src={pokemonStats.sprites.front_default} alt={pokemonStats.name} />
                            <PokemonName>{`A wild ${pokemonStats.name.toUpperCase()} appears!`}</PokemonName>
                        </Pokemon>
                    </div>
                    <div>
                        <Stats>
                            <h3>Moves</h3>
                            <Values>
                                {pokemonStats.moves.map((move, index) => {
                                    return <ListItems key={index}>{move.move.name}</ListItems>
                                })}
                            </Values>
                        </Stats>
                        <Stats>
                            <h3>Abilities</h3>
                            <Values>
                                {pokemonStats.abilities.map((ability, index) => {
                                    return <ListItems key={index}>{ability.ability.name + ": "}</ListItems>
                                })}
                            </Values>
                        </Stats>
                        <Stats>
                            <h3>Type</h3>
                            <Values>
                                {pokemonStats.types.map((type, index) => {
                                    return <ListItems key={index}>{type.type.name}</ListItems>
                                })}
                            </Values>
                        </Stats>
                    </div>
                </Section>
            </>
        );
    }
}

const Section = styled.section`
    background-color: #E3350D;
    min-width: 100%;
    display: flex;
    flex-direction: column;    
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 20px 0 20px 0;
`

const Pokemon = styled.div`
    display: flex;
    flex-direction: column;
    background-color: white;
    border-radius: 15px;
    padding: 25px;
    margin: 20px;
    height: 50vh;
    width: 50vh;
    text-align: center;
`

const PokemonName = styled.h2`
    font-size: 20px;
    animation: .8s .2s shake infinite alternate;

    @keyframes shake {
        0% { transform: skewX(-15deg); }
        5% { transform: skewX(15deg); }
        10% { transform: skewX(-15deg); }
        15% { transform: skewX(15deg); }
        20% { transform: skewX(0deg); }
        100% { transform: skewX(0deg); }  
      }
`

const Stats = styled.div`
      color: white;
      margin: 20px;
      font-size: 12px;
`

const Values = styled.ul`
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      max-width: 80vw;
      justify-content: center;
`

const ListItems = styled.li`
      background-color: white;
      color: black;
      padding: 5px;
      margin: 5px;
`

const Btn = styled.h4`
      display: inline-block; 
      color: white;
      transition: ease-in-out .2s;

      &:hover {
        color: black;
        font-size: 14px;
      }
`

export default PokeStats;