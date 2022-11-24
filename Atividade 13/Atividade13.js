function maiusculas(){
    var checkbox = document.getElementById('maior');
    if (checkbox.checked == true){
      document.forms.atividade.elements.texto.value = document.forms.atividade.elements.texto.value.toUpperCase();
      document.forms.atividade.elements.menor.checked = false;
    }
  }
  
  function minusculas(){
    var checkbox = document.getElementById('menor');
    if (checkbox.checked == true){
      document.forms.atividade.elements.texto.value = document.forms.atividade.elements.texto.value.toLowerCase();
      document.forms.atividade.elements.maior.checked = false;
    }
  }