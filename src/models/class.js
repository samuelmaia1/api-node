export class Material{
    #nome;
    #preco_aluguel;
    #preco_reposicao;
    #tipo;
    #estoque;

    constructor(nome, preco_aluguel, preco_reposicao, tipo, estoque){
        this.#nome = nome;
        this.#preco_aluguel = preco_aluguel;
        this.#preco_reposicao = preco_reposicao;
        this.#tipo = tipo;
        this.#estoque = estoque;
    }

    setNome(value){
        this.#nome = value
    }

    getNome(){
        return this.#nome 
    }

    setPreco_Aluguel(value){
        this.#preco_aluguel = value
    }

    getPreco_Aluguel(){
        return this.#preco_aluguel
    }

    setPreco_Reposicao(value){
        this.#preco_reposicao = value
    }

    getPreco_Reposicao(){
        return this.#preco_reposicao
    }

    setTipo(value){
        this.#tipo = value
    }

    getTipo(){
        return this.#tipo
    }

    setEstoque(value){
        this.#estoque = value
    }

    getEstoque(){
        return this.#estoque
    }

    aumentaEstoque(value){
        this.#estoque += value;
    }

    reduzEstoque(value){
        if (this.#estoque >= value){
            this.#estoque -= value;
            return;
        }
        else{
            alert(`Não há estoque suficiente. Peças disponíveis ${this.estoque}`);
            return;
        }
    }
}