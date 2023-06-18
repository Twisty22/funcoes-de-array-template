const pokemons = [
  { nome: 'Bulbasaur', tipo: 'grama', vida: 40 },
  { nome: 'Bellsprout', tipo: 'grama', vida: 20 },
  { nome: 'Charmander', tipo: 'fogo', vida: 35 },
  { nome: 'Vulpix', tipo: 'fogo', vida: 25 },
  { nome: 'Squirtle', tipo: 'água', vida: 45 },
  { nome: 'Psyduck', tipo: 'água', vida: 25 }
]
function mudaVida(poke){
    const novoPoke = {
        nome: poke.nome,
        tipo: poke.tipo,
        vida: 100,
    }
    return novoPoke;
}
function checaTipo(poke){
    let tipo = poke.tipo === "grama";
    return tipo; 
}
const novoArray = pokemons.map(mudaVida);
const outroArray = pokemons.filter(checaTipo);
console.log(novoArray);
console.log(outroArray)