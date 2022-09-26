export class Depositos{
    contaCorrente: number;
    contaPoupança: number;

    constructor(
        contaCorrente: number,
        contaPoupança: number,
    ){
        this.contaCorrente = contaCorrente
        this.contaPoupança = contaPoupança
    }
    

    verConta(){
        console.log(`Conta Corrente: R$${this.contaCorrente} \n Conta Poupança: R$${this.contaPoupança}`)
    }


    depcorrente(valor: number){
        if (valor > 0){
            this.contaCorrente += valor
            console.log(`Deposito de R$ ${valor} Realizado com sucesso. \n Saldo da Conta Corrente R$${this.contaCorrente}`)
        }else{
            console.log(`Deposito de R$ ${valor} impossivel de ser realizado.`)
        }
    }
    deppoupança(valor: number){
        if (valor > 0){
            this.contaPoupança += valor
            console.log(`Deposito de R$ ${valor} Realizado com sucesso. \n Saldo da Conta Poupança R$${this.contaPoupança}`)
        }else{
            console.log(`Deposito de R$ ${valor} impossivel de ser realizado.`)
        }
    }
    transferenciaCorrente(valor: number){
        if(valor > 0 && valor <= this.contaCorrente){
            this.contaCorrente -= valor 
            this.contaPoupança =+ valor
            console.log(`Transferencia de R$ ${valor} realizado com sucesso 
            \n Saldo da conta Poupança `)
        }else{
            console.log(`Transferencia de R$ ${valor} impossivel de ser realizado.`)
        }

    }
    transferenciapoupanca(valor: number){
        if(valor > 0 && valor <= this.contaPoupança){
            this.contaPoupança -= valor
            this.contaCorrente += valor
            console.log(`Transferencia de R$ ${valor} realizado com sucesso`)
        }else{
            console.log(`Transferencia de R$ ${valor} impossivel de ser realizado.`)
        }

    }
}