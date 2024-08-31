// Captura o formulário
const form = document.getElementById('formCadReceptor');

// Adiciona um evento de envio ao formulário
form.addEventListener('submit', function(event) {
  // Evita o comportamento padrão de envio do formulário
  event.preventDefault();

  // Captura os valores dos inputs
  const nome = document.getElementById('nomeCadReceptor').value;
  const id = document.getElementById('idCadReceptor').value;
  const descricao = document.getElementById('descricaoCadReceptor').value;
  const email = document.getElementById('emailCadReceptor').value;
  const telefone = document.getElementById('telefoneCadReceptor').value;
  const endereco = document.getElementById('enderecoCadReceptor').value;

  // Cria um objeto com os valores capturados
  const data = {
    nome: nome,
    id: id,
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


