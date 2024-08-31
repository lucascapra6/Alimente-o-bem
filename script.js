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


// FUNÇÃO RECEBER DADOS DO FORMULÁRIO DOAÇÃO E ARQUIVAR EM JSON

const selectElement = document.getElementById('oqueDoar');

// Seleciona o elemento do input
const inputElement = document.getElementById('outrosInput');

selectElement.addEventListener('change', function() {

  if (selectElement.value === 'outros') {

    inputElement.style.display = 'block';
  } else {

    inputElement.style.display = 'none';
  }
});

document.getElementById('myForm').addEventListener('submit', function(event) {
  // Evita o comportamento padrão de envio do formulário
  event.preventDefault();

  // Cria um objeto com os dados do formulário
  const formData = {
    oqueDoar: selectElement.value,
    outrosInput: inputElement.value
  };

  // Converte o objeto em uma string JSON
  const jsonData = JSON.stringify(formData);

  // Arquiva a string JSON onde for necessário
  console.log(jsonData); // Aqui, por exemplo, está sendo impressa no console
});




