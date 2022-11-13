var num1 , num2 ;
num1 = prompt("Informe a base");
num2 = prompt("Informe a altura")


{
    class Retangulo {
        constructor(altura, largura) {
            this.altura = altura;
            this.largura = largura;
        }

        calculaArea() {
            return this.altura * this.largura;
        }
    }

    objRetangulo = new Retangulo(num1, num2);

    alert("A area do Retangulo eh: " + objRetangulo.calculaArea());

}

