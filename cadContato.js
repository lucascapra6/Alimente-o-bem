// Captura o formulário de contato
const formContato = document.getElementById('formContato');

// Adiciona um evento de envio ao formulário de contato
formContato.addEventListener('submit', function(event) {
  // Evita o comportamento padrão de envio do formulário
  event.preventDefault();

  // Captura os valores dos campos do formulário de contato
  const nome = document.getElementById('nomeContato').value;
  const identificacao = document.getElementById('idContato').value;
  const descricao = document.getElementById('descricaoContato').value;
  const email = document.getElementById('emailContato').value;
  const telefone = document.getElementById('telefoneContato').value;

  // Cria um objeto com os valores capturados
  const contato = {
    nome: nome,
    identificacao: identificacao,
    descricao: descricao,
    email: email,
    telefone: telefone
  };

  // Verifica se já existem dados no localStorage para os contatos
  let contatos = localStorage.getItem('contatos');
  if (!contatos) {
    // Se não houver dados, cria um novo array com os dados atuais
    contatos = [contato];
  } else {
    // Se houver dados, converte de JSON para array
    contatos = JSON.parse(contatos);
    // Adiciona os novos dados ao array existente
    contatos.push(contato);
  }

  // Converte o array atualizado para JSON
  const dadosJSON = JSON.stringify(contatos);

  // Salva o array atualizado de volta no localStorage
  localStorage.setItem('contatos', dadosJSON);

  // Limpa os valores dos campos do formulário após o envio
  document.getElementById('nomeContato').value = '';
  document.getElementById('idContato').value = '';
  document.getElementById('descricaoContato').value = '';
  document.getElementById('emailContato').value = '';
  document.getElementById('telefoneContato').value = '';

  // Exibe uma mensagem de sucesso
  alert('O seu cadastro de contato foi salvo com sucesso! Entraremos em contato com você através do e-mail ou telefone informado.');
});
