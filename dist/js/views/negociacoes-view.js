import { View } from "./View.js";
export class NegociacoesView extends View {
    // It's not posssible set an access property more restrict which the access property of the parent
    template(model) {
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
                    ${model.list().map(negociacao => {
            return `
                                <tr>
                                    <td>${this.format(negociacao.data)}</td>
                                    <td>${negociacao.quantidade}</td>
                                    <td>${negociacao.valor}</td>
                                <tr>
                            `;
        }).join("")}
                </tbody>
            </table>
        `;
    }
    update(model) {
        const template = this.template(model);
        this.element.innerHTML = template;
    }
    format(data) {
        return new Intl.DateTimeFormat().format(data);
    }
}
