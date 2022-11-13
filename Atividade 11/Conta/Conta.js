function Conta() {
    var nomeCorrentista, banco, numConta, saldo;
    this.getNomeCorrentista = function(){
      return nomeCorrentista;
    }
    this.getBanco = function(){
      return banco;
    }
    this.getNumConta = function(){
      return numConta;
    }
    this.getSaldo = function(){
      return saldo;
    }
    this.setNomeCorrentista = function(value){
      nomeCorrentista = value;
    }
    this.setBanco = function(value){
      banco = value;
    }
    this.setNumConta = function(value){
      numConta = value;
    }
    this.setSaldo = function(value){
      saldo = value;
    }
  }
  
  function Corrente() {
    var saldoEspecial;
    this.getSaldoEspecial = function(){
      return saldoEspecial;
    }
    this.setSaldoEspecial = function(value){
      saldoEspecial = value;
    }
  }
  
  function Poupanca() {
    var juros, dataVencimento;
    this.getJuros = function(){
      return juros;
    }
    this.getDataVencimento = function(){
      return dataVencimento;
    }
    this.setJuros = function(value){
      juros = value;
    }
    this.setDataVencimento = function(value){
      dataVencimento = value;
    }
  }
  
  Corrente.prototype = new Conta();
  Poupanca.prototype = new Conta();
  
  contaCorrente = new Corrente();
  contaCorrente.setNomeCorrentista("Julio Cesar de Castro");
  contaCorrente.setBanco("Banco do Brasil");
  contaCorrente.setNumConta("252436-1");
  contaCorrente.setSaldo(10000);
  contaCorrente.setSaldoEspecial(2000);
  
  contaPoupanca = new Poupanca();
  contaPoupanca.setNomeCorrentista("Julio Cesar de Castro");
  contaPoupanca.setBanco("Itau");
  contaPoupanca.setNumConta("362514-2");
  contaPoupanca.setSaldo(30000);
  contaPoupanca.setJuros(0.2);
  contaPoupanca.setDataVencimento("20");
  
  alert("CONTA CORRENTE:" +
        "\nNome Correntista: " + contaCorrente.getNomeCorrentista() + 
        "\nBanco: " + contaCorrente.getBanco() + 
        "\nN° Conta: " + contaCorrente.getNumConta() + 
        "\nSaldo: " + contaCorrente.getSaldo() + 
        "\nSaldo Especial: " + contaCorrente.getSaldoEspecial());
  
        alert("CONTA POUPANÇA:" +
        "\nNome Correntista: " + contaPoupanca.getNomeCorrentista() + 
        "\nBanco: " + contaPoupanca.getBanco() + 
        "\nN° Conta: " + contaPoupanca.getNumConta() + 
        "\nSaldo: " + contaPoupanca.getSaldo() + 
        "\nJuros: " + contaPoupanca.getJuros() +
        "\nData Vencimento: Dia " + contaPoupanca.getDataVencimento());