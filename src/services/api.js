
const cartoons = [
  {
    title: "Os Flinstones",
    cardFoto: "imagem",
    description: "Os Flintstones parecem uma família típica de classe média da década de 60, mas suas aventuras são ambientadas na Idade da Pedra. Eles utilizam eletrodomésticos que são uma mistura de tecnologia com artefatos de pedra lascada e dinossauros."
  },
  {
    title: "Steven Universe",
    cardFoto: "imagem",
    description: "Quando um cometa mágico vem em direção a Beach City, Steven deverá revirar a coleção de quinquilharias do seu pai para encontrar uma arma capaz de salvar a cidade."
  },
  {
    title: "Três Espiãs Demais",
    cardFoto: "imagem",
    description: "Sob o cuidado do diretor da Organização Mundial de Proteção Humana, três garotas, de Beverly Hills, se transformam em agentes secretos. Elas combatem o crime internacional e frequentam a escola para manter a qualidade de suas notas."
  },
]

const getCartoons = () => {
  return cartoons.get("/");
}

export default {
  getCartoons
};