import { Link } from 'react-router-dom'

const Pokemon = ({ pokemon }) => {
    return (
        <Link to={`pokemon/${pokemon.name}`}>
            <li>
                <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                <p>
                    {pokemon.name}
                </p>
            </li>
        </Link>
    );
}

export default Pokemon;