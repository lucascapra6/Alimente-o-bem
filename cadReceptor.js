// Captura o formulário
const formReceptor = document.getElementById('formCadReceptor');
const estruturaFamiliar = [
  { id: 1, name: "Família de 2 adultos e 1 criança", idTipoAlimentacaoAReceber: 1},
  { id: 2, name: "Família de 2 adultos e 2 crianças", idTipoAlimentacaoAReceber: 1},
  { id: 3, name: "Família de 2 adultos e 3 crianças ou mais", idTipoAlimentacaoAReceber: 1},
  { id: 4, name: "Família de 1 adulto e 1 criança", idTipoAlimentacaoAReceber: 2},
  { id: 5, name: "Família de 1 adulto e 2 crianças", idTipoAlimentacaoAReceber: 2},
  { id: 6, name: "Família de 1 adulto e 3 crianças ou mais", idTipoAlimentacaoAReceber: 2}
]
// Adiciona um evento de envio ao formulário
formReceptor.addEventListener('submit', function(event) {
  // Evita o comportamento padrão de envio do formulário
  event.preventDefault();

  // Captura os valores dos inputs
  const nome = document.getElementById('nomeCadReceptor').value;
  const id = document.getElementById('idCadReceptor').value;
  const estruturaFamiliar = document.getElementById('estruturaFamiliar');
  const descricao = document.getElementById('descricaoCadReceptor').value;
  const email = document.getElementById('emailCadReceptor').value;
  const telefone = document.getElementById('telefoneCadReceptor').value;
  const endereco = document.getElementById('enderecoCadReceptor').value;


  // Cria um objeto com os valores capturados
  const data = {
    nome: nome,
    id: id,
    estruturaFamiliar: estruturaFamiliar.value,
    descricao: descricao,
    email: email,
    telefone: telefone,
    endereco: endereco
  };

  // Verifica se já existem dados no localStorage
  let cadReceptor = localStorage.getItem('cadReceptor');
  if (!cadReceptor) {
    // Se não houver dados, cria um novo array com os dados atuais
      cadReceptor = [data];
  } else {
    // Se houver dados, converte de JSON para array
      cadReceptor = JSON.parse(cadReceptor);
    // Adiciona os novos dados ao array existente
      cadReceptor.push(data);
  }

  // Converte o array atualizado para JSON
  const dadosJSON = JSON.stringify(cadReceptor);

  // Salva o array atualizado de volta no localStorage
  localStorage.setItem('cadReceptor', dadosJSON);

  // Limpa os valores dos inputs após o envio
  document.getElementById('nomeCadReceptor').value = '';
  document.getElementById('idCadReceptor').value = '';
  document.getElementById('estruturaFamiliar').value = '';
  document.getElementById('descricaoCadReceptor').value = '';
  document.getElementById('emailCadReceptor').value = '';
  document.getElementById('telefoneCadReceptor').value = '';
  document.getElementById('enderecoCadReceptor').value = '';

  // Exibe mensagem de sucesso
  alert('O seu cadastro de receptor foi salvos com sucesso!');
});

// LÓGICA PARA INSERIR OS RECEPTORES NO FORM

document.addEventListener('DOMContentLoaded', function() {
  // Recupera os dados do localStorage para os receptores
  const dadosLocalStorageReceptores = localStorage.getItem('cadReceptor');

  // Verifica se há dados no localStorage
  if (dadosLocalStorageReceptores) {
    // Converte os dados do localStorage para um array de receptores
    const cadReceptor = JSON.parse(dadosLocalStorageReceptores);
    const selectOpcao1 = document.getElementById('estruturaFamiliar');
    // Seleciona o elemento select para os receptores
    const selectOpcaoReceptor = document.getElementById('paraQuemDoar');

    // Remove quaisquer options existentes
    selectOpcaoReceptor.innerHTML = '';

    // Cria uma opção padrão
    const optionPadraoReceptor = document.createElement('option');
    optionPadraoReceptor.value = '';
    optionPadraoReceptor.textContent = 'Selecione um receptor';
    selectOpcaoReceptor.appendChild(optionPadraoReceptor);

    // Itera sobre os dados dos receptores
    cadReceptor.forEach(function(cadReceptor) {
      // Cria um novo elemento option
      const optionReceptor = document.createElement('option');
      // Define o valor e o texto do option com base nos dados do receptor
      optionReceptor.value = cadReceptor.nome;
      optionReceptor.textContent = cadReceptor.nome;
      // Adiciona o option ao select
      selectOpcaoReceptor.appendChild(optionReceptor);
    });
  }
});

function exportarParaExcel() {
  const cadReceptor = JSON.parse(localStorage.getItem('cadReceptor') || '[]');

  if (cadReceptor.length === 0) {
    alert("Não há dados para exportar.");
    return;
  }

  const worksheet = XLSX.utils.json_to_sheet(cadReceptor);

  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Receptores");

  XLSX.writeFile(workbook, "receptores_cadastrados.xlsx");
}

document.getElementById('exportarDados').addEventListener('click', exportarParaExcel);


function populateSelect() {
  const select = document.getElementById("estruturaFamiliar");
  estruturaFamiliar.forEach(family => {
    const option = document.createElement("option");
    option.value = family.idTipoAlimentacaoAReceber;
    option.textContent = family.name;
    select.appendChild(option);
  });
}
window.onload = populateSelect;
