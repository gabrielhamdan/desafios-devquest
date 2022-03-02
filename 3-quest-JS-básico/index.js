let nomeUsuario = prompt("Digite seu nome.");

boasVindas(nomeUsuario);

function boasVindas(nome) {
    nome != "" ? alert(`Olá, ${nome}, que bom ter você por aqui!`) : alert(`Olá, visitante, que bom ter você por aqui!`);
}