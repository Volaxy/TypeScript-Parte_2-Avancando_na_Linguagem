export class Negociacoes {
    constructor() {
        // CLASS[] indicates to the TS what the variable is an Array
        this.negociacoes = [];
    }
    add(negociacao) {
        this.negociacoes.push(negociacao);
    }
    // This is the same of "ReadonlyArray<Negociacao>"
    list() {
        return this.negociacoes;
    }
}
