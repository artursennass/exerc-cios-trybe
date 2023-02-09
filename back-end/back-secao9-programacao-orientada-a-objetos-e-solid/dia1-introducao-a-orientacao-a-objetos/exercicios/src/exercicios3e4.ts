export class Cliente {
 nome: string;

 constructor (nome: string) {
    this.nome = nome;
 }
}

export class Item {
    nomeDoItem: string;
    preco: number;

    constructor (nomeDoItem: string, preco: number) {
        this.nomeDoItem = nomeDoItem;
        this.preco = preco;
    }
}

export class Pedido {
    cliente: Cliente;
    itensConsumidos: Item[];
    pagamento: string;
    desconto?: number;

    constructor (
        cliente: Cliente,
        itensConsumidos: Item[],
        pagamento: string,
        desconto?: number,
    ) {
        this.cliente = cliente;
        this.itensConsumidos = itensConsumidos;
        this.pagamento = pagamento;
        this.desconto = desconto;
    }

    totalPedido () {
        return this.itensConsumidos.reduce((total, item) => {
            return total + item.preco;
        }, 0)
    }

    totalComDesconto () {
        if (this.desconto !== undefined) {
            return this.totalPedido() * this.desconto
        }
    }
}