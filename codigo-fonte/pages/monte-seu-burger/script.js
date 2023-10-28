document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("burgerForm");
  const summaryBurger = document.getElementById("resumoBurger");
  const copySummary = document.getElementById("copiarResumo");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const selectedOptions = {
      carne: [],
      ponto: [],
      carne_extra: [],
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

    const summary = createSummary(selectedOptions);
    const summaryTable = summaryBurger.querySelector("tbody");
    summaryTable.innerHTML = summary;
    summaryBurger.style.display = "block";
  });

  copySummary.addEventListener("click", function () {
    const summaryTable = summaryBurger.querySelector("table");
    const range = document.createRange();
    range.selectNode(summaryTable);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
  });

  function createSummary(options) {
    const {
      carne,
      carne_extra,
      ponto,
      pao,
      queijo,
      queijo_extra,
      complemento,
      salada,
      molho,
      molho_extra,
    } = options;
    const createTableRow = (label, value) => `<tr><th>${label}</th><td>${value}</td></tr>`;
  
    let summary = "";
    summary += createTableRow("Carne", carne.join(", "));
    summary += createTableRow("Carne Extra", carne_extra.join(", "));
    summary += createTableRow("Ponto da Carne", ponto);
    summary += createTableRow("Pão", pao);
    summary += createTableRow("Queijo", queijo);
    summary += createTableRow("Queijo Extra", queijo_extra);
    summary += createTableRow("Outros complementos", complemento.join(", "));
    summary += createTableRow("Salada", salada.join(", "));
    summary += createTableRow("Molho", molho.join(", "));
    summary += createTableRow("Molho Extra", molho_extra);
  
    return summary;
  }
  
});
