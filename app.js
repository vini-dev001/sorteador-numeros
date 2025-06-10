function sortear(){
  let quantidade = parseInt(document.getElementById('quantidade').value);
  let de = parseInt(document.getElementById('de').value);
  let ate = parseInt(document.getElementById('ate').value);
  let sorteados = [];
  let numero;

  if (de >= ate) {
    alert('Campo "Do número" deve ser inferior ao campo "Até o número". Verifique!');
    return;
  }
  if (quantidade > (ate - de + 1)) {
    alert('Campo "Quantidade" deve ser menor ou igual ao intervalo informado no campo "Do número" até o campo "Até o número". Verifique!');
    return;
  }
  for (let i = 0; i < quantidade; i++) {
    numero = obterNumeroAleatorio(de, ate);

    while (sorteados.includes(numero)) {
      numero = obterNumeroAleatorio(de, ate);
      alert('Tentando obter número inédito');
    }

    sorteados.push(numero);
  }

  let resultado = document.getElementById('resultado');
  resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${sorteados}</label>`; 
  
  alterarStatusBotao(); 
}



function obterNumeroAleatorio(min, max) {
   return Math.floor(Math.random() * (max - min + 1)) + min;
}



function alterarStatusBotao() {
  let btnReiniciar = document.getElementById('btn-reiniciar');
  btnReiniciar.classList.toggle('container__botao-desabilitado');
  btnReiniciar.classList.toggle('container__botao');
}

function reiniciar() {
  document.getElementById('quantidade').value = '';
  document.getElementById('de').value = '';
  document.getElementById('ate').value = '';
  document.getElementById('resultado').innerHTML = `<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>`;
  let btnReiniciar = document.getElementById('btn-reiniciar');
  btnReiniciar.classList.add('container__botao-desabilitado');
  btnReiniciar.classList.remove('container__botao');
}