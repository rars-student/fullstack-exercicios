let generalJumbotron = document.getElementsByClassName("general-jumbotron")[0];

const modifyJumbotron = () => {
  generalJumbotron.innerHTML = `
    <div class="container">
    <h1 class="display-4">ENTRE AGORA EM CONTATO CONOSCO!</h1>
    <a href="../pages/fale-conosco.html" class="btn btn-danger btn-lg">CLIQUE AQUI</a>
    </div>
  `;
};
