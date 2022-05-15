function carregar() {
  let mensagem = document.getElementById("container-msg");
  let imagem = document.getElementById("img");

  let data = new Date();
  let mes = 10;

  // Outono - De 21 de março a 21 de junho
  if (mes >= 2 && mes < 5) {
    imagem.src = "./assets/outono.jpg";
    document.body.style.background = "#9B433F";
    // Inverno -  de 21 de junho a 23 de setembro
  } else if (mes >= 5 && mes < 8) {
    imagem.src = "./assets/inverno.jpg";
    document.body.style.background = "#76FAEF";
    // Primavera - de 23 de setembro a 21 de Dezembro
  } else if (mes >= 8 && mes < 11) {
    imagem.src = "./assets/primavera.jpg";
    document.body.style.background = "#ED049C";
  } else {
    // Verão - de 21 de Dezembro a 21 de Março
    imagem.src = "./assets/verao.jpg";
    document.body.style.background = "#1C86C5";
  }
}
