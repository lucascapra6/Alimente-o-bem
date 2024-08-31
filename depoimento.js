// Captura o formulário
const form = document.getElementById('formularioDepoimento');

// Adiciona um evento de envio ao formulário
form.addEventListener('submit', function(event) {
  // Evita o comportamento padrão de envio do formulário
  event.preventDefault();

  // Captura os valores dos inputs
  const nome = document.getElementById('nomeDepoimento').value;
  const email = document.getElementById('emailDepoimento').value;
  const mensagem = document.getElementById('mensagemDepoimento').value;
  // Cria um objeto com os valores capturados
  const data = {
    nome: nome,
    email: email,
    mensagem: mensagem
  };

  // Verifica se já existem dados no localStorage
  let depoimento = localStorage.getItem('depoimento');
  if (!depoimento) {
    // Se não houver dados, cria um novo array com os dados atuais
    depoimento = [data];
  } else {
    // Se houver dados, converte de JSON para array
      depoimento = JSON.parse(depoimento);
    // Adiciona os novos dados ao array existente
      depoimento.push(data);
  }

  // Converte o array atualizado para JSON
  const dadosJSON = JSON.stringify(depoimento);

  // Salva o array atualizado de volta no localStorage
  localStorage.setItem('depoimento', dadosJSON);

  // Limpa os valores dos inputs após o envio
  document.getElementById('nomeDepoimento').value = '';
  document.getElementById('emailDepoimento').value = '';
  document.getElementById('mensagemDepoimento').value = '';
  // Exibe mensagem de sucesso
  alert('O seu depoimento foi salvos com sucesso!');
});