import { Negociacao } from "./negociacao.js";

export class Negociacoes {
    // CLASS[] indicates to the TS what the variable is an Array
    private negociacoes: Negociacao[] = [];

    add(negociacao: Negociacao) {
        this.negociacoes.push(negociacao);
    }

    // This is the same of "ReadonlyArray<Negociacao>"
    list(): readonly Negociacao[] {
        return this.negociacoes;
    }
}