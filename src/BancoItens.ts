export class BancoDeItens {

    Itens: string[] = ['Documentos', 'Jóias', 'Barras de ouro', 'Hds', 'Pendrive']

    constructor(
    Itens: string[] = []
    ){
        this.Itens = Itens
    }
    VerItens(){
        console.log("Ok, a seguir está a lista de todos os itens depositados no seu cofre do mais antigo para o mais recente")
        for(let I of this.Itens){
            console.log(I)
        }
    }
    RetirarO_UltimoItem(){
        this.Itens.pop()
        console.log("Tudo bem retiramos o ultimo item depositado do seu cofre")
    }
    AdicionarMais1Contrato(){
        this.Itens.push('Contrato')
    }
}