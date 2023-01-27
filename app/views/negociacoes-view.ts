import { Negociacoes } from "../models/negociacoes.js";
import { View } from "./View.js";

export class NegociacoesView extends View<Negociacoes> {
    // It's not posssible set an access property more restrict which the access property of the parent
    protected template(model: Negociacoes): string {
        return `
            <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>DATA</th>
                        <th>QUANTIDADE</th>
                        <th>VALOR</th>
                    </tr>
                </thead>
                <tbody>
                    ${
                        model.list().map(negociacao => {
                            return `
                                <tr>
                                    <td>${this.format(negociacao.data)}</td>
                                    <td>${negociacao.quantidade}</td>
                                    <td>${negociacao.valor}</td>
                                <tr>
                            `;
                        }).join("")
                    }
                </tbody>
            </table>
        `;
    }

    public update(model: Negociacoes): void {
        const template = this.template(model);

        this.element.innerHTML = template;
    }

    private format(data: Date): string {
        return new Intl.DateTimeFormat().format(data);
    }
}