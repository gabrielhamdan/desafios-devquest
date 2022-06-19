const Pokemon = ({pokemon}) => {
    return (
        <li>
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            {pokemon.name}
        </li>
    );
}

export default Pokemon;