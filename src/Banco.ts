export class generation{
    agencia: number;
    cnpj: number;
    telefone:string;
    enderecobanco:string;

    constructor(
        agencia: number,
        cnpj: number,
        telefone:string,
        enderecobanco:string,
        )

    {
        this.agencia = agencia;
        this.cnpj = cnpj;
        this.telefone = telefone;
        this.enderecobanco = enderecobanco;

        }
    verAgencia(){
        console.log(`A Agência do Banco GENERATION - BRASIL é: ${this.agencia}`)
    }
    verCnpj(){
        console.log(`O CNPJ do Banco GENERATION - BRASIL é: ${this.cnpj}`)
    }
    verEndereco(){
        console.log(`O Endereço do Banco GENERATION - BRASIL é: ${this.enderecobanco}`)
    }
}