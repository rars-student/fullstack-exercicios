const URL = "https://crud-basico-node.herokuapp.com";

let listaDeProdutos = [];
let tbody = document.querySelector("table>tbody");
let modal = document.querySelector("#cadastroProduto");

// Aqui estou capturando os elementos do meu formulário de cadastro
let form = {
  campoNome: document.querySelector("#nome"),
  campoValor: document.querySelector("#valor"),
  campoQuantidade: document.querySelector("#estoque"),
  btnCadastrar: document.querySelector("#btnCadastrar"),
};

form.btnCadastrar.addEventListener("click", evento => {
  // evento.preventDefault();

  let nome = form.campoNome.value;
  let valor = form.campoValor.value;
  let quantidadeEstoque = form.campoQuantidade.value;

  if (!nome) {
    alert("O nome precisa ser preenchido.");
  } else if (!valor) {
    alert("O valor precisa ser preenchido.");
  } else if (!quantidadeEstoque) {
    alert("A quantidade precisa ser preenchida.");
  }

  let produto = { nome, valor, quantidadeEstoque };
  adicionarProdutoNaAPI(produto);
});

function adicionarProdutoNaAPI(produto) {
  fetch(`${URL}/produtos`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(produto),
  })
    .then(resposta => resposta.json())
    .then(resposta => {
      listaDeProdutos.push(resposta);

      popularTabela(listaDeProdutos);
    });
}

function obterListaDeProdutos() {
  fetch(`${URL}/produtos`)
    .then(resposta => resposta.json())
    .then(resposta => {
      resposta.forEach(produto => {
        listaDeProdutos.push(produto);
      });

      popularTabela(listaDeProdutos);
    });
}

function popularTabela(listaDeProdutos) {
  //Aqui limpo a tabel
  tbody.textContent = "";

  listaDeProdutos.forEach(produto => {
    criarTrComBaseNoProduto(produto);
  });
}

function criarTrComBaseNoProduto(produto) {
  let tr = document.createElement("tr");
  let tdId = document.createElement("td");
  let tdNome = document.createElement("td");
  let tdValor = document.createElement("td");
  let tdEstoque = document.createElement("td");
  let tdOpcoes = document.createElement("td");

  tdId.textContent = produto.id;
  tdNome.textContent = produto.nome;
  tdValor.textContent = produto.valor;
  tdEstoque.textContent = produto.quantidadeEstoque;
  tdOpcoes.innerHTML = `<button onclick="editar(${produto.id})" class="btn btn-outline-info btn-sm">Editar</button>
  <button onclick="excluir(${produto.id})" class="btn btn-outline-info btn-sm">Excluir</button>`;

  tr.appendChild(tdId);
  tr.appendChild(tdNome);
  tr.appendChild(tdValor);
  tr.appendChild(tdEstoque);
  tr.appendChild(tdOpcoes);

  tbody.appendChild(tr);
}

function cadastrar(id) {
  fetch(`${URL}/produtos/${id}`, {
    method: "POST",
    headers: "Content-Type: application/json",
  }).then(reposta => {
    // DESAFIO: CADSTRAR UM PRODUTO
  });
}

function excluir(id) {
  fetch(`${URL}/produtos/${id}`, {
    method: "DELETE",
  }).then(() => {
    alert("Produto deletado com sucesso");

    let indice = listaDeProdutos.findIndex(produto => produto.id == id);
    listaDeProdutos.splice(indice, 1);
    popularTabela(listaDeProdutos);
  });
}

function editar(id) {
  fetch(`${URL}/produtos/${id}`, {
    method: "PUT",
    headers: "Content-Type: application/json",
  }).then(() => {
    
  }).then(() => {
    alert("Produto atualizado com sucesso");

    let indice = listaDeProdutos.findIndex(produto => produto.id == id);
    listaDeProdutos.splice(indice, 1);
    popularTabela(listaDeProdutos);
  });
}
