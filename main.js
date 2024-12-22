function sorteia() {
  return Math.round(Math.random() * 10);
}

function sorteiaNumeros(quantidade) {
  var segredos = [];
  var numero = 1;

  while (numero <= quantidade) {
    var numeroAleatorio = sorteia();
    var achou = false;

    if (numeroAleatorio !== 0) {
      for (var posicao = 0; posicao < segredos.length; posicao++) {
        if (segredos[posicao] == numeroAleatorio) {
          achou = true;
          break;
        }
      }

      if (achou == false) {
        segredos.push(numeroAleatorio);
        numero++;
      }
    }
  }
  return segredos;
}

var segredos = sorteiaNumeros(3);

console.log("Os segredos eram: " + segredos);

var input = document.querySelector("input");
var resultDiv = document.querySelector(".result");
input.focus();

function verifica() {
  var achou = false;

  for (var posicao = 0; posicao < segredos.length; posicao++) {
    if (input.value == segredos[posicao]) {
      resultDiv.textContent = "Você ACERTOU!";
      resultDiv.style.color = "lime";
      achou = true;
      break;
    }
  }

  if (achou == false) {
    resultDiv.textContent = "Você ERROU!";
    resultDiv.style.color = "orange";
  }

  input.value = "";
  input.focus();
}

var button = document.querySelector("button");
button.onclick = verifica;
