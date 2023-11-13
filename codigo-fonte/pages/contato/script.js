document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("endereco-form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const nome = e.target[0].value;
    const sobrenome = e.target[1].value;
    const endereco = e.target[2].value;
    const numero = e.target[3].value;
    const apto = e.target[4].value;
    const bairro = e.target[5].value;
    const pontoDeReferencia = e.target[6].value;
  });
});
