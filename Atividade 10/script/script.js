var aluno1 = new Object();


aluno1.ra = "0030482023036";
aluno1.nome = "Julio Cesar de Castro";
alert("PRIMEIRA FORMA:" +
      "\nNome: " + aluno1.nome + 
      "\nRA: " + aluno1.ra);


aluno1["ra"] = "0030482023036";
aluno1["nome"] = "Julio Cesar de Castro";
alert("SEGUNDA FORMA:" +
      "\nNome: " + aluno1["nome"] + 
      "\nRA: " + aluno1["ra"]);


var ra = "ra", nome = "nome"
aluno1[ra] = "0030482023036";
aluno1[nome] = "Julio Cesar de Castro";
alert("TERCEIRA FORMA:" +
      "\nNome: " + aluno1.nome + 
      "\nRA: " + aluno1.ra);