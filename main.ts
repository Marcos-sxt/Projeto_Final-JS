import { inter} from "./src/inter";

let cliente1 = new inter(12315123, 4234234, 345345, 21313, 234234, "(27)9835-3425", "Rua da esquina 9, N: 7",
12315123, 4234234, "Flavin", "421.423.546-67", "20/05/1993", "Rua Sandro arnaldo 32, N 34", ['Documentos', 'Jóias', 'Barras de ouro', 'Hds', 'Pendrive'])

cliente1.VerItens();
cliente1.AdicionarMais1Contrato();
cliente1.RetirarO_UltimoItem();
cliente1.VerItens();
cliente1.dadosCliente();
cliente1.verAgencia();
cliente1.verCnpj();
cliente1.verEndereco();
cliente1.verConta();
