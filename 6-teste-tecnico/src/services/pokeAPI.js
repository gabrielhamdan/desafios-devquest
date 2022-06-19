let nextPokemons;

async function loadPokemons(pokeDisplay) {
    const response = await fetch(pokeDisplay == null ? 'https://pokeapi.co/api/v2/pokemon/?limit=10&offset=10' : nextPokemons);
    const data = await response.json();

    nextPokemons = data.next;

    let pokemons = data.results.map(async (pokemon) => {
        return await fetchPokemon(pokemon.url);
    });

    return await Promise.all(pokemons);
}

async function fetchPokemon(url) {
    const response = await fetch(`${url}`)
    const data = await response.json();

    return await data;
}

export { loadPokemons };