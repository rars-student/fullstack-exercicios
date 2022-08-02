let generalJumbotron = document.getElementsByClassName("general-jumbotron")[0];
let generalJumbotronTitle = document.querySelector(".general-jumbotron h1");
generalJumbotronTitle.style.color = "#ba170b";
let carModels = ["Cayenne", "Macan", "Taycan", "Panamera", "718", "911"];
let carModelsSort = carModels.sort();
let randomNumber = Math.floor(Math.random() * 5);

const modifyJumbotron = () => {
  generalJumbotron.innerHTML = `
    <div class="container">
    <h1 class="display-4">ENTRE AGORA EM CONTATO CONOSCO!</h1>
    <h2>Modelo recomendado para você: Porsche ${carModels[randomNumber]} </h2>
    <a href="../pages/fale-conosco.html" class="btn btn-danger btn-lg">CLIQUE AQUI</a>
    </div>
  `;
};

// const addItemList = () => {
//   list.push();
// };
