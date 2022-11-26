function validar(event){
    event.preventDefault();

    let nome = document.pesquisa.elements[0].value
    let email = document.getElementById("txtEmail").value
    let comentario = document.getElementById("txtComentario").value

    if(nome == "" || nome.length < 10){
        alert("O campo nome tem menos de 10 caracteres")  
        nome = ''
                      
    }else if(((email.indexOf("@") > -1) == false) || ((email.indexOf(".") > -1) == false)){
        alert("Informe um endereço de email válido") 
        email = ''
        
    }else if(comentario.length < 20){
        alert("O campo comentário tem menos de 20 caracteres")
        comentario = ''

    }else if(document.getElementById('txtSim').checked == false && document.getElementById('txtNao').checked == false){
        alert("selecione uma resposta")
        
    }else{
        if(document.querySelector('#txtNao').checked == true){
            alert("Que bom que você voltou a visitar esta página!")
        }else{
            alert("Volte sempre à esta página!")
        }
        
    }
}
