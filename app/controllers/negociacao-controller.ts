import { DiaDaSemana } from "../models/enums/dia-da-semana.js";
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { MessageView } from "../views/message-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";

export class NegociacaoController {
    private inputData: HTMLInputElement;
    private inputQuantidade: HTMLInputElement;
    private inputValor: HTMLInputElement;

    private negociacoes = new Negociacoes();

    private negociacoesView = new NegociacoesView("#negociacoesView");
    private messageView = new MessageView("#message-view");

    constructor() {
        this.inputData = document.querySelector("#data");
        this.inputQuantidade = document.querySelector("#quantidade");
        this.inputValor = document.querySelector("#valor");
        this.negociacoesView.update(this.negociacoes);
    }

    public addNegociacao(): void {
        const negociacao = this.createNegociacao();

        if(negociacao.data.getDay() > DiaDaSemana.DOMINGO && negociacao.data.getDay() < DiaDaSemana.SABADO) {
            this.negociacoes.add(negociacao);
         
            this.clearForm();
            this.updateView();
        } else {
            this.messageView.update("Apenas negociações em dias úteis são aceitas");
        }
    }

    private createNegociacao(): Negociacao {
        const pattern = /-/g;
        const date = new Date(this.inputData.value.replace(pattern, ","));

        const quantidade = parseInt(this.inputQuantidade.value);
        const valor = parseFloat(this.inputValor.value);

        return new Negociacao(date, quantidade, valor);
    }

    private clearForm(): void {
        this.inputData.value = "";
        this.inputQuantidade.value = "";
        this.inputValor.value = "";

        this.inputData.focus();
    }

    private updateView(): void {
        this.negociacoesView.update(this.negociacoes);
        this.messageView.update("Negociação adicionada com sucesso");
    }
}