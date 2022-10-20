    var jogador, computador;
    var escolhaJogador, escolhaMaquina;
    
 
    jogador = prompt("Informe:\n(1) Pedra \n(2) Papel   \n(3) Tesoura");
  

    computador = Math.floor(Math.random() * 3);
    
    if(computador == 0)
         computador =3;

    if( jogador == 1)
        escolhaJogador = 'Pedra'
    else if ( jogador == 2)
        escolhaJogador = 'Papel'
    else
        escolhaJogador = 'Tesoura'

    if( computador == 1)
        escolhaMaquina = 'Pedra'
    else if ( computador == 2)
        escolhaMaquina = 'Papel'
    else
        escolhaMaquina = 'Tesoura'
    

    if(jogador == 1 && computador == 3 || jogador == 2 && computador == 1 || jogador == 3 && computador == 2){
        alert('Jogador Venceu!' +'\nJogador - ' + escolhaJogador + '\ncomputador - ' + escolhaMaquina);

        }
    
    
       else if(jogador == 1 && computador == 2 || jogador == 2 && computador == 3 || jogador == 3 && computador == 1){
        alert('Você Perdeu!!' +'\nJogador - ' + escolhaJogador + '\nComputador -' + escolhaMaquina);
        }
    
       else{
        alert('Empatou' +'\nJogador - ' + escolhaJogador + '\nComputador - ' + escolhaMaquina);

    }


