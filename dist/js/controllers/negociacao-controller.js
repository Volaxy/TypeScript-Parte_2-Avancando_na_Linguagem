import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { MessageView } from "../views/message-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";
export class NegociacaoController {
    constructor() {
        this.negociacoes = new Negociacoes();
        this.negociacoesView = new NegociacoesView("#negociacoesView");
        this.messageView = new MessageView("#message-view");
        this.inputData = document.querySelector("#data");
        this.inputQuantidade = document.querySelector("#quantidade");
        this.inputValor = document.querySelector("#valor");
        this.negociacoesView.update(this.negociacoes);
    }
    add() {
        const negociacao = this.createNegociacao();
        this.negociacoes.add(negociacao);
        this.negociacoesView.update(this.negociacoes);
        this.messageView.update("Negociação adicionada com sucesso");
        this.clearForm();
    }
    createNegociacao() {
        const pattern = /-/g;
        const date = new Date(this.inputData.value.replace(pattern, ","));
        const quantidade = parseInt(this.inputQuantidade.value);
        const valor = parseFloat(this.inputValor.value);
        return new Negociacao(date, quantidade, valor);
    }
    clearForm() {
        this.inputData.value = "";
        this.inputQuantidade.value = "";
        this.inputValor.value = "";
        this.inputData.focus();
    }
}
