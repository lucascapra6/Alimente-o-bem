// Captura o formulário
const form = document.getElementById('formCadAlimentos');

// Adiciona um evento de envio ao formulário
form.addEventListener('submit', function(event) {
  // Evita o comportamento padrão de envio do formulário
  event.preventDefault();

  // Captura os valores dos inputs
  const nome = document.getElementById('nomeCadAlimentos').value;
  const alimento = document.getElementById('alimentoCad').value;
  const telefone = document.getElementById('telefoneCadAlimento').value;
  const email = document.getElementById('emailCadAlimento').value;

  // Cria um objeto com os valores capturados
  const data = {
    nome: nome,
    alimento: alimento,
    telefone: telefone,
    email: email
  };

  // Verifica se já existem dados no localStorage
  let cadAlimentos = localStorage.getItem('cadAlimentos');
  if (!cadAlimentos) {
    // Se não houver dados, cria um novo array com os dados atuais
    cadAlimentos = [data];
  } else {
    // Se houver dados, converte de JSON para array
    cadAlimentos = JSON.parse(cadAlimentos);
    // Adiciona os novos dados ao array existente
    cadAlimentos.push(data);
  }

  // Converte o array atualizado para JSON
  const dadosJSON = JSON.stringify(cadAlimentos);

  // Salva o array atualizado de volta no localStorage
  localStorage.setItem('cadAlimentos', dadosJSON);

  // Limpa os valores dos inputs após o envio
  document.getElementById('nomeCadAlimentos').value = '';
  document.getElementById('alimentoCad').value = '';
  document.getElementById('telefoneCadAlimento').value = '';
  document.getElementById('emailCadAlimento').value = '';

  // Exibe mensagem de sucesso
  alert('Os dados de cadastro do(s) alimento(s) foram salvos com sucesso!');
});
