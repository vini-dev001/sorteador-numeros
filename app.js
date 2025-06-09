

function sortear(){
  let quantidade = parseInt(document.getElementById('quantidade').value);
  let de = parseInt(document.getElementById('de').value);
  let ate = parseInt(document.getElementById('ate').value);
  let sorteados = [];
  let numeroSorteado;

  for (let i = 0; i < quantidade; i++) {
    numeroSorteado = obterNumeroAleatorio(de, ate);

    while(sorteados.includes(numeroSorteado)) {
      numeroSorteado = obterNumeroAleatorio(de, ate);
    }

    sorteados.push(numeroSorteado);
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
