const frutas = ["Banana", "Limão", "Pêssego", "Uva", "Manga", "Pera"];
const intArray = [1, 2, 3, 4, 5];
const pessoas = [
  { nome: "Eduardo", sobrenome: "Aguiar", sexo: "M" },
  { nome: "Mariana", sobrenome: "Cabral", sexo: "F" },
  { nome: "Nicolas", sobrenome: "Teodoro", sexo: "M" },
];

// for (let index = 0; index < stringArray.length; index++) {
//   const element = stringArray[index];
//   console.log(element);
// }

frutas.forEach((fruta, indice) => console.log(`${indice + 1} - ${fruta}`));

let nomePessoas = pessoas.map((pessoa) => {
  return pessoa.nome;
});

let novoPessoas = pessoas.map((pessoa) => {
  return {
    nomeCompleto: `${pessoa.nome} ${pessoa.sobrenome}`,
    sexo: pessoa.sexo,
  };
});

// console.log(pessoas);
// console.log(nomePessoas);
// console.log(novoPessoas);

const carrinhoCompras = [
  { nome: "Biscoito", valor: 3.99, quantidade: 5 },
  { nome: "Leite", valor: 8.99, quantidade: 2 },
  { nome: "Pão", valor: 0.8, quantidade: 8 },
];

const numeros = [1, 10, 20];

let soma = numeros.reduce((acumulador, numero) => {
  return acumulador + numero;
}, 0);

let somaTotalProdutos = carrinhoCompras.reduce((acc, obj) => {
  return acc + obj.valor * obj.quantidade;
}, 0);

console.log(soma);
console.log(somaTotalProdutos);
