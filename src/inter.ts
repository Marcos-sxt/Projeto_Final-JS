import { generation } from "./Banco";
import { BancoDeItens } from "./BancoItens";
import { cliente } from "./Client";
import { Depositos } from "./Depósitos";
import { saque } from "./Saque";

export class inter implements saque,Depositos,BancoDeItens,cliente,generation {
    
    conta_corrente: number;
    conta_poupanca: number;
    fgts: number;
    agencia: number;
    cnpj: number;
    telefone: string;
    enderecobanco: string;
    contaCorrente: number;
    contaPoupança: number;
    nome: string;
    cpf: string;
    dtnasc: string;
    endereco: string;
    Itens: string[] = [];

    constructor(
        conta_corrente: number,
        conta_poupanca: number,
        fgts: number,
        agencia: number,
        cnpj: number,
        telefone: string,
        enderecobanco: string,
        contaCorrente: number,
        contaPoupança: number,
        nome: string,
        cpf: string,
        dtnasc: string,
        endereco: string,
        Itens: string[] = []
    ) {
       this.conta_corrente = conta_corrente
       this.conta_poupanca = conta_poupanca 
       this.fgts = fgts
       this.agencia = agencia 
       this.cnpj = cnpj
       this.telefone = telefone
       this.enderecobanco = enderecobanco 
       this.contaCorrente = contaCorrente 
       this.contaPoupança = contaPoupança 
       this.nome = nome 
       this.cpf = cpf
       this.dtnasc = dtnasc 
       this.endereco = endereco 
       this.Itens = Itens
    }
    //-------------------------------------------
    saqueCorente(valor: number){
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
    saqueFgts(valor: number): void {
        if (valor > 0 && valor <= this.fgts) {
            console.log(`O saldo do fgts após o saque é: R$${this.fgts}`)
        } else
            console.log(`Valor insuficiente para saque: R$${this.fgts}`)
    }
    verConta(): void {
        console.log(`Conta Corrente: R$${this.contaCorrente} \n Conta Poupança: R$${this.contaPoupança}`)
    }
    depcorrente(valor: number): void {
        if (valor > 0){
            this.contaCorrente += valor
            console.log(`Deposito de R$ ${valor} Realizado com sucesso. \n Saldo da Conta Corrente R$${this.contaCorrente}`)
        }else{
            console.log(`Deposito de R$ ${valor} impossivel de ser realizado.`)
        }
    }
    deppoupança(valor: number): void {
        if (valor > 0){
            this.contaPoupança += valor
            console.log(`Deposito de R$ ${valor} Realizado com sucesso. \n Saldo da Conta Poupança R$${this.contaPoupança}`)
        }else{
            console.log(`Deposito de R$ ${valor} impossivel de ser realizado.`)
        }
    }
    transferenciaCorrente(valor: number): void {
        if(valor > 0 && valor <= this.contaCorrente){
            this.contaCorrente -= valor 
            this.contaPoupança =+ valor
            console.log(`Transferencia de R$ ${valor} realizado com sucesso 
            \n Saldo da conta Poupança `)
        }else{
            console.log(`Transferencia de R$ ${valor} impossivel de ser realizado.`)
        }
    }
    transferenciapoupanca(valor: number): void {
        if(valor > 0 && valor <= this.contaPoupança){
            this.contaPoupança -= valor
            this.contaCorrente += valor
            console.log(`Transferencia de R$ ${valor} realizado com sucesso`)
        }else{
            console.log(`Transferencia de R$ ${valor} impossivel de ser realizado.`)
        }
    }
    VerItens(): void {
        console.log("Ok, a seguir está a lista de todos os itens depositados no seu cofre do mais antigo para o mais recente")
        for(let I of this.Itens){
            console.log(I)
        }
    }
    RetirarO_UltimoItem(): void {
        this.Itens.pop()
        console.log("Tudo bem retiramos o ultimo item depositado do seu cofre")
    }
    AdicionarMais1Contrato(): void {
        this.Itens.push('Contrato')
    }
    dadosCliente(): void {
        console.log(`O seu nome é: ${this.nome},\nO seu cpf é: ${this.cpf},\nA sua data de nascimento é: ${this.dtnasc},\nO seu endereço é: ${this.endereco}`)
    }
    verAgencia(): void {
        console.log(`A Agência do Banco GENERATION - BRASIL é: ${this.agencia}`)
    }
    verCnpj(): void {
        console.log(`O CNPJ do Banco GENERATION - BRASIL é: ${this.cnpj}`)
    }
    verEndereco(): void {
        console.log(`O Endereço do Banco GENERATION - BRASIL é: ${this.enderecobanco}`)
    }

}