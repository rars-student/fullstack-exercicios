function carregar() {
  let mensagem = document.getElementById("container-msg");
  let imagem = document.getElementById("img");

  let data = new Date();
  // let hora = data.getHours();
  let hora = 19;

  mensagem.innerHTML = `Agora são ${hora} horas`;

  if (hora > 0 && hora <= 12) {
    imagem.src = "./assets/manha.jpg";
    document.body.style.background = "#D3C6A4";
  } else if (hora > 12 && hora <= 18) {
    imagem.src = "./assets/tarde.jpg";
    document.body.style.background = "#FD8504";
  } else if (hora > 18) {
    imagem.src = "./assets/noite.jpg";
    document.body.style.background = "#0067A4";
  }
}
