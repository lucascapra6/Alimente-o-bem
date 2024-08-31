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
    const selectOpcao1 = document.getElementById('oqueDoar');

    // Remove quaisquer options existentes
    selectOpcao1.innerHTML = '';

    // Itera sobre os dados dos alimentos
    cadAlimentos.forEach(function(alimento) {
      // Cria um novo elemento option
      const option = document.createElement('option');
      // Define o valor e o texto do option com base nos dados do alimento
      option.value = alimento.alimento;
      option.textContent = alimento.alimento;
      // Adiciona o option ao select
      selectOpcao1.appendChild(option);
    });
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
      optionReceptor.value = cadReceptor.nome;
      optionReceptor.textContent = cadReceptor.nome;
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
  const oqueDoar = document.getElementById('oqueDoar').value;
  const paraQuemDoar = document.getElementById('paraQuemDoar').value;
  const mensagem = document.getElementById('mensagemCadFacaSuaDoacao').value;
  const telefone = document.getElementById('telefoneCadFacaSuaDoacao').value;
  const email = document.getElementById('emailCadFacaSuaDoacao').value;

  // Cria um objeto com os valores capturados
  const data = {
    nome: nome,
    id: id,
    oqueDoar: oqueDoar,
    paraQuemDoar: paraQuemDoar,
    mensagem: mensagem,
    telefone: telefone,
    email: email
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
  document.getElementById('oqueDoar').value = '';
  document.getElementById('paraQuemDoar').value = '';
  document.getElementById('mensagemCadFacaSuaDoacao').value = '';
  document.getElementById('telefoneCadFacaSuaDoacao').value = '';
  document.getElementById('emailCadFacaSuaDoacao').value = '';

  // Exibe mensagem de sucesso
  alert('Os dados de cadastro para doação foram salvos com sucesso!');
});
