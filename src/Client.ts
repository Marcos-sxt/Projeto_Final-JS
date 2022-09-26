export class cliente{
    nome: string;
    cpf: string;
    dtnasc: string;
    endereco: string;

    constructor(
    nome: string,
    cpf: string,
    dtnasc: string,
    endereco: string,

    ){
    this.nome = nome
    this.cpf = cpf
    this.dtnasc = dtnasc
    this.endereco = endereco

    }
    dadosCliente():void{
        console.log(`O seu nome é: ${this.nome},\nO seu cpf é: ${this.cpf},\nA sua data de nascimento é: ${this.dtnasc},\nO seu endereço é: ${this.endereco}`)
    }
}
