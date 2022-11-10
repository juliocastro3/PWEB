var i, num=[3], maior = 0;

    

for (i = 0; i < 3; i++)

        num[i] = parseInt(prompt('Informe um numero '));



maior = Math.max.apply(null, num);



num.sort(function(a,b){return a - b});



alert('O Maior número é: ' + maior);



for (i = 0; i < 3; i++)

alert('\nA Forma ordenada é ' + num[i]);