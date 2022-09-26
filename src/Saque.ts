export class saque {
    conta_corrente: number;
    conta_poupanca: number;
    fgts: number;

    constructor(
        conta_corrente: number,
        conta_poupanca: number,
        fgts: number
    ) {
        this.conta_corrente = conta_corrente;
        this.conta_poupanca = conta_poupanca;
        this.fgts = fgts

    }

    saqueCorente(valor: number) {
        if (valor > 0 && valor <= this.conta_corrente) {
            console.log(`O saldo da conta corente após o saque é:  R$${this.conta_corrente}`)
        } else {
            console.log(`Valor insuficiente para saque: R$${this.conta_corrente}`)
        }
    }

        saquePoupança(valor: number){
        if (valor > 0 && valor <= this.conta_poupanca) {
            console.log(`O saldo da conta poupança após o saque é: R$${this.conta_poupanca}`)
        } else {
            console.log(`Valor insuficiente para saque: R$${this.conta_poupanca}`)
        }
    }
        saqueFgts(valor: number){
        if (valor > 0 && valor <= this.fgts) {
            console.log(`O saldo do fgts após o saque é: R$${this.fgts}`)
        } else
            console.log(`Valor insuficiente para saque: R$${this.fgts}`)
    }
}