document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('burgerForm');
  const resumoBurger = document.getElementById('resumoBurger');
  const copiarResumo = document.getElementById('copiarResumo');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const selectedOptions = {
      proteina: [],
      ponto: [],
      dobrar_proteina: [],
      pao: [],
      queijo: [],
      acrescentar_queijo: [],
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
    const resumoTable = resumoBurger.querySelector('tbody');
    resumoTable.innerHTML = summary;
    resumoBurger.style.display = 'block';
  });

  copiarResumo.addEventListener('click', function () {
    const resumoTable = resumoBurger.querySelector('table');
    const range = document.createRange();
    range.selectNode(resumoTable);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
  });

  function criarResumo(options) {
    let summary = '';
    summary += '<tr><th>Proteína</th><td>' + options.proteina.join(', ') + '</td></tr>';
    summary += '<tr><th>Ponto da Carne</th><td>' + options.ponto + '</td></tr>';
    summary += '<tr><th>Pão</th><td>' + options.pao + '</td></tr>';
    summary += '<tr><th>Queijo</th><td>' + options.queijo + '</td></tr>';
    summary += '<tr><th>Outros complementos</th><td>' + options.complemento.join(', ') + '</td></tr>';
    summary += '<tr><th>Salada</th><td>' + options.salada.join(', ') + '</td></tr>';
    summary += '<tr><th>Molho Extra</th><td>' + options.molho_extra + '</td></tr>';

    return summary;
  }
});
