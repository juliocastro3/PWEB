var idade = 0;
var sexo = null;
var opiniao = null;
var pessoas = 0;
var totIdade = 0;
var mediaIdade = 0;
var maisVelha = 0;
var maisNova = 0;
var qtdPessimo = 0;
var qtdOtimo = 0;
var qtdBom = 0
var porcOtimo = 0;
var porcBom = 0;
var numMulheres = 0;
var numHomens = 0;
var continuar = true;
var resposta = null;

for (pessoas = 1; pessoas < 46; pessoas++) {
  
  idade = Number(prompt("Sua Idade: "));
  sexo = prompt("Sexo(M/F): ")[0].toUpperCase();
  opiniao = Number(prompt("Qual sua opinião:\n(4)Ótimo;\n(3)Bom;\n(2)Regular;\n(1)Péssimo;"));

  
  totIdade += idade;

  
  if (pessoas === 1) {
    maisVelha = idade;
    maisNova = idade;
  }
  else {
    if (idade > maisVelha) {
      maisVelha = idade;
    } else if (idade < maisNova) {
      maisNova = idade;
    }
  }

  if (opiniao === 1) {
    qtdPessimo += 1;
  } else if (opiniao === 4) {
    qtdOtimo += 1;
  } else if (opiniao === 3) {
    qtdBom += 1;
  }

  

  if (sexo === "M") {
    numHomens += 1;
  }
  else if (sexo === "F") {
    numMulheres += 1;
  }

  while (continuar === true) {
    resposta = prompt("Deseja continuar? (S/N): ")[0].toUpperCase();
    if (resposta === "N") {
      continuar = false;
    }
    else {
      break;
    }
  }

  if (continuar === false) {
    break;
  }
}

mediaIdade = totIdade / pessoas;
porcBom = ((qtdBom / pessoas) * 100);
porcOtimo = ((qtdOtimo / pessoas) * 100);

alert("Média de Idade das Pessoas: " + mediaIdade +
      "\nIdade da pessoa Mais Velha: " + maisVelha +
      "\nIdade da pessoa Mais Nova: " + maisNova +
      "\nQuantidade de pessoas que responderam péssimo: " + qtdPessimo +
      "\nPorcentagem que responderam Ótimo: " + porcOtimo + "%" +
      "\nPorcentagem que responderam Bom: " + porcBom + "%" +
      "\nNúmero de Homens que responderam: " + numHomens +
      "\nNúmero de Mulheres que responderam: " + numMulheres);





