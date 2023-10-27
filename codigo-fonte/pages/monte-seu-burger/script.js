document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("burgerForm");
  const resumoBurger = document.getElementById("resumoBurger");
  const copiarResumo = document.getElementById("copiarResumo");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const selectedOptions = {
      proteina: [],
      ponto: [],
      dobrar_proteina: [],
      pao: [],
      queijo: [],
      queijo_extra: [],
      complemento: [],
      salada: [],
      molho: [],
      molho_extra: [],
    };

    const formData = new FormData(form);
    for (const [key, value] of formData.entries()) {
      if (selectedOptions[key]) {
        if (Array.isArray(selectedOptions[key])) {
          selectedOptions[key].push(value);
        } else {
          selectedOptions[key] = value;
        }
      }
    }

    const summary = criarResumo(selectedOptions);
    const resumoTable = resumoBurger.querySelector("tbody");
    resumoTable.innerHTML = summary;
    resumoBurger.style.display = "block";
  });

  copiarResumo.addEventListener("click", function () {
    const resumoTable = resumoBurger.querySelector("table");
    const range = document.createRange();
    range.selectNode(resumoTable);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
  });

  function criarResumo(options) {
    const {
      proteina,
      ponto,
      pao,
      queijo,
      queijo_extra,
      complemento,
      salada,
      molho_extra,
    } = options;
    const createTableRow = (label, value) => `<tr><th>${label}</th><td>${value}</td></tr>`;
  
    let summary = "";
    summary += createTableRow("Proteína", proteina.join(", "));
    summary += createTableRow("Ponto da Carne", ponto);
    summary += createTableRow("Pão", pao);
    summary += createTableRow("Queijo", queijo);
    summary += createTableRow("Queijo Extra", queijo_extra);
    summary += createTableRow("Outros complementos", complemento.join(", "));
    summary += createTableRow("Salada", salada.join(", "));
    summary += createTableRow("Molho Extra", molho_extra);
  
    return summary;
  }
  
});
