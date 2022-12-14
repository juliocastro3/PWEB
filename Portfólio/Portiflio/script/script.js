let time = 3000,
    currentImageIndex = 0, 
    images = document.querySelectorAll("#slider img"),
    max = images.length,
    slideActive = true,
    btnBack = document.getElementById("btnBack"),
    btnNext = document.getElementById("btnNext"),
    textElement = document.querySelector('.automaticText'),    
    textsIntro = ['Tecnólogo.', 'Técnico de Qualidade.', 'Estudante.'],
    counter = 0;

function start(){
    setInterval(()=>{
        if(counter==textsIntro.length) counter=0;
        automaticText(textElement, textsIntro[counter]);
        counter++;
    }, 2000);
}

function nextImage(){         
    images[currentImageIndex].classList.remove("selected");

    currentImageIndex++;

    if (currentImageIndex >= max)
        currentImageIndex = 0    ;

    images[currentImageIndex]
        .classList.add("selected");
}

function backImage(){
    images[currentImageIndex]
    .classList.remove("selected")
    
    console.log(currentImageIndex, max)
    if (currentImageIndex <= 0)
        currentImageIndex = max - 1
    else
        currentImageIndex = currentImageIndex - 1       

    images[currentImageIndex]
        .classList.add("selected")
}

function automaticText(element, text){
    const textArray = text.split('');
    element.innerHTML = '';
    textArray.forEach((letter, i) => {
        setTimeout(function(){
            element.innerHTML += letter;
        }, 60*i);
    });    
}

window.addEventListener("load",start);