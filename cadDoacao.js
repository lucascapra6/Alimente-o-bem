// FUNÇÃO PARA DESABILITAR O INPUT NOME CASO O USUÁRIO OPTE POR SER ANÔNIMO
document.addEventListener('DOMContentLoaded', function () {

    const inputNome = document.getElementById('nome');

    const radioAnonimo = document.getElementById('anonimo');

    function toggleNomeField() {

        if (radioAnonimo.checked) {

            inputNome.value = '';
            inputNome.disabled = true;
        } else {

            inputNome.disabled = false;
        }
    }
    radioAnonimo.addEventListener('click', toggleNomeField);

    // Chame a função inicialmente para garantir que o estado do campo de nome esteja correto
    toggleNomeField();
});

// Espera até que o DOM esteja totalmente carregado
document.addEventListener('DOMContentLoaded', function() {
  // Recupera os dados do localStorage
  const dadosLocalStorage = localStorage.getItem('cadAlimentos');

  // Verifica se há dados no localStorage
  if (dadosLocalStorage) {
    // Converte os dados do localStorage para um array
    const cadAlimentos = JSON.parse(dadosLocalStorage);

    // Seleciona o elemento select
    const selectOpcao1 = document.getElementById('alimentoParaDoar');

    // Remove quaisquer options existentes
    selectOpcao1.innerHTML = '';
  }
});

// INSERIOR

document.addEventListener('DOMContentLoaded', function() {
  // Recupera os dados do localStorage para os receptores
  const dadosLocalStorageReceptores = localStorage.getItem('cadReceptor');

  // Verifica se há dados no localStorage
  if (dadosLocalStorageReceptores) {
    // Converte os dados do localStorage para um array de receptores
    const cadReceptor = JSON.parse(dadosLocalStorageReceptores);

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
      optionReceptor.value = cadReceptor.id;
      optionReceptor.textContent = `${cadReceptor.nome} - ${cadReceptor.id}`;
      // Adiciona o option ao select
      selectOpcaoReceptor.appendChild(optionReceptor);
    });
  }
});

// LÓGICA PARA ARMAZENAR OS DADOS DO CADASTRO PARA DOAÇÃO

// Captura o formulário
const form = document.getElementById('formFacaSuaDoacao');

// Adiciona um evento de envio ao formulário
form.addEventListener('submit', function(event) {
  // Evita o comportamento padrão de envio do formulário
  event.preventDefault();

  // Captura os valores dos inputs
  const nome = document.getElementById('cadNomeFacaSuaDoacao').value;
  const id = document.getElementById('idCadFacasuaDoacao').value;
  const alimentos = document.getElementById('alimentoParaDoar').value;
  const paraQuemDoar = document.getElementById('paraQuemDoar').value;
  const mensagem = document.getElementById('mensagemCadFacaSuaDoacao').value;
  // const telefone = document.getElementById('telefoneCadFacaSuaDoacao').value;
  // const email = document.getElementById('emailCadFacaSuaDoacao').value;

  const dadosReceptores = JSON.parse(localStorage.getItem('cadReceptor'));

  const receptorEncontrado = dadosReceptores.find(receptor => receptor.id === id);

  if(!receptorEncontrado) return alert('Falha ao salvar doação')

  // Cria um objeto com os valores capturados
  const data = {
    nome: nome,
    id: id,
    alimentos: alimentos,
    paraQuemDoar: paraQuemDoar,
    mensagem: mensagem,
    telefone: receptorEncontrado.telefone,
    email: receptorEncontrado.email
  };

  // Verifica se já existem dados no localStorage
  let cadDoacoes = localStorage.getItem('cadDoacoes');
  if (!cadDoacoes) {
    // Se não houver dados, cria um novo array com os dados atuais
    cadDoacoes = [data];
  } else {
    // Se houver dados, converte de JSON para array
    cadDoacoes = JSON.parse(cadDoacoes);
    // Adiciona os novos dados ao array existente
    cadDoacoes.push(data);
  }

  // Converte o array atualizado para JSON
  const dadosJSON = JSON.stringify(cadDoacoes);

  // Salva o array atualizado de volta no localStorage
  localStorage.setItem('cadDoacoes', dadosJSON);

  // Limpa os valores dos inputs após o envio
  document.getElementById('cadNomeFacaSuaDoacao').value = '';
  document.getElementById('idCadFacasuaDoacao').value = '';
  document.getElementById('alimentoParaDoar').value = '';
  document.getElementById('paraQuemDoar').value = '';
  document.getElementById('mensagemCadFacaSuaDoacao').value = '';

  // Exibe mensagem de sucesso
  alert('Os dados de cadastro para doação foram salvos com sucesso!');
});


function exportarParaExcel() {
  const cadDoacao = JSON.parse(localStorage.getItem('cadDoacoes') || '[]');

  if (cadDoacao.length === 0) {
    alert("Não há dados para exportar.");
    return;
  }

  const worksheet = XLSX.utils.json_to_sheet(cadDoacao);

  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Doações");

  XLSX.writeFile(workbook, "doacoes_realizadas.xlsx");
}

document.getElementById('exportarDados').addEventListener('click', exportarParaExcel);


const alimentacaoParaDoar = [
  { id: 1, name: "Alimentação Básica", content: "1kg de arroz, 1kg de feijão, 500g de farinha branca, 3l de óleo, 1 pacote de papel higiênico 9un, 250g de sal, 500g de macarrão, 1kg de açúcar, 2kg de café", idClassificacaoAlimentacao: 1 },
  { id: 2, name: "Alimentação Reforçada", content: "2kg de arroz, 2kg de feijão, 500g de farinha branca, 4l de óleo, 2 pacotes de papel higiênico 6un, 500g de sal, 1kg de macarrão, 1kg de açúcar, 2kg de café", idClassificacaoAlimentacao: 1 },
  { id: 3, name: "Alimentação Completa", content: "5kg de arroz, 5kg de feijão, 500g de farinha branca, 5l de óleo, 3 pacotes de papel higiênico 9un, 1,5kg de sal, 2kg de macarrão, 2kg de açúcar, 4kg de café", idClassificacaoAlimentacao: 1 },
  { id: 4, name: "Alimentação Básica", content: "1kg de arroz, 1kg de feijão, 1kg de farinha branca, 2l de óleo, 1 pacote de papel higiênico 9un, 500g de sal, 1kg de macarrão, 1kg de açúcar, 500g de café", idClassificacaoAlimentacao: 2  },
  { id: 5, name: "Alimentação Reforçada", content: "2kg de arroz, 2kg de feijão, 500g de farinha branca, 4l de óleo, 2 pacotes de papel higiênico 6un, 500g de sal, 1kg de macarrão, 1kg de açúcar, 2kg de café", idClassificacaoAlimentacao: 2  },
  { id: 6, name: "Alimentação Completa", content: "5kg de arroz, 5kg de feijão, 500g de farinha branca, 5l de óleo, 3 pacotes de papel higiênico 9un, 1,5kg de sal, 2kg de macarrão, 2kg de açúcar, 4kg de café", idClassificacaoAlimentacao: 2  }
]

function populateFilteredSelect(alimentacoesFiltradas) {
  const select = document.getElementById("alimentoParaDoar");
  // Limpa as opções atuais antes de popular com as novas
  select.innerHTML = '';
  alimentacoesFiltradas.forEach(alimentacao => {
    const option = document.createElement("option");
    option.value = alimentacao.content;
    option.textContent = alimentacao.name;
    select.appendChild(option);
  });
}

// Função para atualizar o select de alimentoParaDoar com base na estrutura familiar do receptor selecionado
function onSelectParaQuemDoar() {
  const paraQuemDoar = document.getElementById('paraQuemDoar').value;
  const dadosLocalStorageReceptores = localStorage.getItem('cadReceptor');

  if (dadosLocalStorageReceptores) {
    const cadReceptor = JSON.parse(dadosLocalStorageReceptores);
    const findReceptor = cadReceptor.find(item => item.id === paraQuemDoar);

    if (findReceptor) {
      const alimentacoesFiltradas = alimentacaoParaDoar.filter(item => Number(item.idClassificacaoAlimentacao) === Number(findReceptor.estruturaFamiliar));

      // Chama a função para popular o select com as opções filtradas
      populateFilteredSelect(alimentacoesFiltradas);
    } else {
      alert('Receptor não encontrado.');
    }
  } else {
    alert('Não há receptores cadastrados.');
  }
}
